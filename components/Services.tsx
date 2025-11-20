import React from 'react';
import { Home, Briefcase, Hammer } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Residential Remodeling',
      description: 'From kitchens and bathrooms to full-home renovations, we bring modern design and functionality to your living spaces.',
      icon: <Home size={40} />,
      image: 'https://picsum.photos/600/400?random=4'
    },
    {
      title: 'Tenant Improvements',
      description: 'Maximize the potential of your commercial property with our expert tenant improvement services, tailored to your business needs.',
      icon: <Briefcase size={40} />,
      image: 'https://picsum.photos/600/400?random=5'
    },
    {
      title: 'Restoration Services',
      description: 'Specialized restoration for water, fire, or storm damage. We restore your property to its pre-loss condition efficiently.',
      icon: <Hammer size={40} />,
      image: 'https://picsum.photos/600/400?random=6'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-brand-black">Building Excellence in Every Project</h3>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                   <span className="font-bold tracking-widest">LEARN MORE</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-brand-black">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
