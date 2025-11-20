import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, Wand2, Phone } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', value: ViewState.HOME },
    { label: 'SERVICES', value: ViewState.SERVICES },
    { label: 'CONTACT', value: ViewState.CONTACT },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => setView(ViewState.HOME)}
          >
            <div className="flex items-end">
                <div className="mr-2 relative w-10 h-10">
                    {/* Abstract House Icon */}
                    <svg viewBox="0 0 24 24" className="w-full h-full text-brand-red fill-current">
                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <path d="M7 20v-8h10v8" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </div>
                <div>
                    <h1 className="text-2xl font-bold leading-none text-brand-black tracking-tight group-hover:text-brand-red transition-colors">
                        INTERLAKE
                    </h1>
                    <p className="text-xs font-bold text-brand-red tracking-widest">CONSTRUCTION</p>
                </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setView(item.value)}
                className={`text-sm font-semibold tracking-wider hover:text-brand-red transition-colors ${
                  currentView === item.value ? 'text-brand-red border-b-2 border-brand-red' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Special AI Tool Button */}
            <button
              onClick={() => setView(ViewState.AI_TOOL)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                currentView === ViewState.AI_TOOL 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <Wand2 size={16} />
              AI DESIGN
            </button>

            <div className="flex items-center gap-2 text-brand-black font-bold ml-4 border-l pl-6 border-gray-300">
                <Phone size={18} className="text-brand-red" />
                <span>(206) 909-4009</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-red focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setView(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  currentView === item.value ? 'text-brand-red bg-gray-50' : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
             <button
                onClick={() => {
                  setView(ViewState.AI_TOOL);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 text-base font-medium ${
                  currentView === ViewState.AI_TOOL ? 'text-brand-red bg-gray-50' : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                <Wand2 size={18} />
                AI DESIGN STUDIO
              </button>
              <div className="px-3 py-2 text-brand-red font-bold flex items-center gap-2">
                  <Phone size={18} /> (206) 909-4009
              </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
