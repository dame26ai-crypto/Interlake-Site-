import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight text-white">
                INTERLAKE <span className="text-brand-red text-sm block tracking-widest">CONSTRUCTION</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
                Professional construction services in Seattle. We bring quality, integrity, and craftsmanship to every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-200">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-brand-red cursor-pointer transition-colors">Residential Remodeling</li>
                <li className="hover:text-brand-red cursor-pointer transition-colors">Tenant Improvements</li>
                <li className="hover:text-brand-red cursor-pointer transition-colors">Restoration Services</li>
                <li className="hover:text-brand-red cursor-pointer transition-colors">AI Design Studio</li>
            </ul>
          </div>

          {/* Contact & License */}
          <div>
             <h3 className="text-lg font-bold mb-6 text-gray-200">Contact</h3>
             <ul className="space-y-3 text-gray-400 text-sm">
                <li>4616 25th Ave. NE #51, Seattle, WA 98105</li>
                <li>(206) 909-4009</li>
                <li>Josh@interlakenw.com</li>
                <li className="pt-4 font-bold text-white">License: INTERCL764PA</li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Interlake Construction. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
