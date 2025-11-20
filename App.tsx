import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import ImageEditor from './components/ImageEditor';
import Footer from './components/Footer';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <Services />
            <div className="bg-gray-100 py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-brand-black mb-6">Try our new AI Design Tool</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Visualize changes to your home or office instantly with our advanced AI technology.
                    </p>
                    <button 
                        onClick={() => setCurrentView(ViewState.AI_TOOL)}
                        className="bg-brand-red text-white px-10 py-4 font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-red-700 transition-all transform hover:-translate-y-1"
                    >
                        LAUNCH DESIGN STUDIO
                    </button>
                </div>
            </div>
          </>
        );
      case ViewState.SERVICES:
        return <Services />;
      case ViewState.CONTACT:
        return <Contact />;
      case ViewState.AI_TOOL:
        return <ImageEditor />;
      default:
        return <Hero onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navigation currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
