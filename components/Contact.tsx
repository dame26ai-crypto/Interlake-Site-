import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    startDate: '',
    completionDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been received. We will contact you shortly.");
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-black">Get in Touch</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below or contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div className="space-y-10">
            <div className="bg-white p-8 shadow-sm border-l-4 border-brand-red">
              <h3 className="text-2xl font-bold mb-6 text-brand-black">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-brand-black">Headquarters</p>
                    <p className="text-gray-600">4616 25th Ave. NE #51<br />Seattle, WA 98105</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-brand-red flex-shrink-0" />
                  <div>
                    <p className="font-bold text-brand-black">Phone</p>
                    <p className="text-gray-600">(206) 909-4009</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-brand-red flex-shrink-0" />
                  <div>
                    <p className="font-bold text-brand-black">Email</p>
                    <p className="text-gray-600">Josh@interlakenw.com</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">License: <span className="font-mono text-brand-black font-bold">INTERCL764PA</span></p>
                </div>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="h-80 w-full bg-gray-200 relative shadow-md">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.123456789!2d-122.3!3d47.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014929d8!2sUniversity%20District%2C%20Seattle%2C%20WA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy" 
                 title="Interlake Location"
               ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-black">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                    <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                    onChange={handleChange}
                    />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Desired Start Date</label>
                      <div className="relative">
                        <input 
                            type="date" 
                            name="startDate"
                            className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                            onChange={handleChange}
                        />
                        <Calendar className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20}/>
                      </div>
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Completion Deadline</label>
                       <div className="relative">
                        <input 
                            type="date" 
                            name="completionDate"
                            className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                            onChange={handleChange}
                        />
                        <Calendar className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={20}/>
                      </div>
                  </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  name="details"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="pt-4">
                 <div className="bg-gray-100 p-4 mb-6 border border-gray-300 text-sm text-gray-600 text-center">
                    [reCAPTCHA Placeholder]
                 </div>
                <button 
                    type="submit"
                    className="w-full bg-brand-black text-white font-bold py-4 hover:bg-brand-red transition-colors duration-300 uppercase tracking-widest"
                >
                    Submit Request
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
