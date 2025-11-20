import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const images = [
    // Modern Exterior (Matches the corner apartment building)
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop", 
    // Interior (Matches the clean reception/office space)
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop", 
    // Construction framing (Matches the wood framing construction)
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"  
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-brand-dark">
      {/* Image Carousel */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img} alt="Construction project" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Transforming Spaces, <span className="text-brand-red">Restoring Confidence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            Your trusted partner for remodeling, tenant improvements, and restoration services in Seattle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                onClick={() => onNavigate(ViewState.CONTACT)}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-none font-bold tracking-wider hover:bg-white hover:text-brand-black transition-all duration-300"
            >
                GET A QUOTE
            </button>
            <button 
                onClick={() => onNavigate(ViewState.SERVICES)}
                className="bg-brand-red border-2 border-brand-red text-white px-8 py-3 rounded-none font-bold tracking-wider hover:bg-red-700 hover:border-red-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
                OUR SERVICES <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? 'bg-brand-red w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;