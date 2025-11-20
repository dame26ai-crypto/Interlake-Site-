import React, { useState, useRef } from 'react';
import { Upload, Wand2, Download, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!sourceImage) return;
    if (!prompt.trim()) {
      setError("Please enter a prompt to describe the changes.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await editImageWithGemini(sourceImage, prompt);
      setGeneratedImage(result);
    } catch (err) {
      setError("Failed to edit image. Please try again. " + (err instanceof Error ? err.message : ''));
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setSourceImage(null);
    setGeneratedImage(null);
    setPrompt('');
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-red rounded-full mb-4 shadow-lg">
             <Wand2 className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Interlake Design Studio</h2>
          <p className="mt-2 text-lg text-gray-600">
            Visualize your renovation ideas. Upload a photo and describe what you want to change.
            <br/>
            <span className="text-sm text-brand-red font-semibold bg-red-50 px-2 py-1 rounded mt-2 inline-block">
                Powered by Gemini 2.5 Flash Image
            </span>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                
                {/* Left Panel: Input */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50/50 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <ImageIcon size={20} /> Source Image
                    </h3>
                    
                    {!sourceImage ? (
                        <div 
                            className="flex-1 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-10 text-center hover:bg-gray-50 transition-colors cursor-pointer bg-white"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Upload className="w-12 h-12 text-gray-400 mb-4" />
                            <p className="text-gray-600 font-medium">Click to upload a photo of your space</p>
                            <p className="text-sm text-gray-400 mt-2">Support for PNG, JPG</p>
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                className="hidden" 
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    ) : (
                        <div className="relative flex-1 bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center group">
                            <img src={sourceImage} alt="Source" className="max-w-full max-h-full object-contain" />
                            <button 
                                onClick={clearAll}
                                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full text-gray-700 shadow-lg transition-all opacity-0 group-hover:opacity-100"
                                title="Remove image"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    )}

                    <div className="mt-8 space-y-4">
                         <div>
                             <label className="block text-sm font-bold text-gray-700 mb-2">
                                 What would you like to change?
                             </label>
                             <textarea
                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none outline-none h-32"
                                 placeholder="e.g., 'Add a retro filter', 'Remove the couch', 'Change the wall color to sage green'"
                                 value={prompt}
                                 onChange={(e) => setPrompt(e.target.value)}
                                 disabled={!sourceImage}
                             />
                         </div>
                         
                         {error && (
                             <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100">
                                 {error}
                             </div>
                         )}

                         <button
                            onClick={handleGenerate}
                            disabled={!sourceImage || !prompt || isLoading}
                            className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                                !sourceImage || !prompt || isLoading 
                                ? 'bg-gray-300 cursor-not-allowed' 
                                : 'bg-brand-red hover:bg-red-700 shadow-md hover:shadow-lg'
                            }`}
                         >
                             {isLoading ? (
                                 <>
                                    <Loader2 className="animate-spin" /> Processing...
                                 </>
                             ) : (
                                 <>
                                    <Wand2 size={20} /> Generate Design
                                 </>
                             )}
                         </button>
                    </div>
                </div>

                {/* Right Panel: Output */}
                <div className="p-8 bg-white flex flex-col">
                     <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Wand2 size={20} className="text-brand-red"/> Generated Result
                    </h3>

                    <div className="flex-1 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden relative">
                        {isLoading ? (
                            <div className="text-center px-6">
                                <div className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                <p className="text-gray-600 font-medium">The AI is reimagining your space...</p>
                                <p className="text-sm text-gray-400 mt-2">This may take a few seconds</p>
                            </div>
                        ) : generatedImage ? (
                            <div className="relative w-full h-full flex items-center justify-center bg-gray-900 group">
                                <img src={generatedImage} alt="Generated" className="max-w-full max-h-full object-contain" />
                                <a 
                                    href={generatedImage} 
                                    download="interlake-design.png"
                                    className="absolute bottom-6 right-6 bg-white text-brand-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-brand-red hover:text-white transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
                                >
                                    <Download size={18} /> Download
                                </a>
                            </div>
                        ) : (
                            <div className="text-center text-gray-400 p-8">
                                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <Wand2 className="text-gray-300 w-10 h-10" />
                                </div>
                                <p>Your new design will appear here</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 text-center">
                         <p className="text-sm text-gray-400">
                            Disclaimer: AI generated images are for visualization purposes only. Actual construction results may vary.
                         </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
