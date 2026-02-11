import React from 'react';
import { Home, Building, Lightbulb, PaintBucket, Ruler, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Residential Design',
      description: 'Complete home transformations from concept to completion, tailored to your lifestyle and preferences.',
      features: ['Full home design', 'Room renovations', 'Color consultation', 'Furniture selection']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Commercial Spaces',
      description: 'Professional environments that enhance productivity while reflecting your brand identity.',
      features: ['Office design', 'Retail spaces', 'Restaurants', 'Healthcare facilities']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Construction',
      description: 'Complete construction services turning your vision into reality with quality craftsmanship.',
      features: ['New construction', 'Home building', 'Project management', 'Quality control']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Clinics/Hospitals',
      description: 'Specialized healthcare facility design focusing on functionality and patient comfort.',
      features: ['Medical facilities', 'Patient areas', 'Equipment planning', 'Compliance standards']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Showrooms',
      description: 'Retail showroom design that showcases products effectively and enhances customer experience.',
      features: ['Product display', 'Customer flow', 'Brand identity', 'Lighting design']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Design Consultation',
      description: 'Expert guidance and professional advice to help you make informed design decisions.',
      features: ['Initial consultation', 'Design direction', 'Material selection', 'Layout optimization']
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: 'Space Planning',
      description: 'Optimize your space with strategic layout solutions that maximize both function and flow.',
      features: ['Floor plan design', 'Traffic flow analysis', 'Furniture layout', 'Storage solutions']
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Renovation Management',
      description: 'Full project oversight from initial design through final installation and styling.',
      features: ['Project timeline', 'Contractor coordination', 'Quality control', 'Final styling']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Custom Design',
      description: 'Bespoke furniture and millwork designed specifically for your space and needs.',
      features: ['Custom furniture', 'Built-in storage', 'Window treatments', 'Lighting design']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
            Our
            <span className="block text-emerald-700 font-medium">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final installation, we offer comprehensive interior design services tailored to your unique vision and needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-stone-50 rounded-sm hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-emerald-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-slate-600 flex items-center">
                    <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;