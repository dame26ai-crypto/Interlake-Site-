import { GoogleGenAI, Modality } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const editImageWithGemini = async (
  base64Image: string,
  prompt: string,
  mimeType: string = 'image/png'
): Promise<string> => {
  const ai = getClient();
  
  // Clean base64 string if it contains the header
  const base64Data = base64Image.split(',')[1] || base64Image;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    // Extract the image from the response
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          const generatedBase64 = part.inlineData.data;
          // Assuming PNG output from the model for images usually, 
          // but checking part.inlineData.mimeType is safer if available.
          const mime = part.inlineData.mimeType || 'image/png';
          return `data:${mime};base64,${generatedBase64}`;
        }
      }
    }
    
    throw new Error("No image data returned from Gemini.");
  } catch (error) {
    console.error("Error editing image:", error);
    throw error;
  }
};
