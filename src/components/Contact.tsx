import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '7799406406',
      link: 'tel:+917799406406'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'gurushyam007@gmail.com',
      link: 'mailto:gurushyam007@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
            Let's Create Something
            <span className="block text-emerald-700 font-medium">Beautiful Together</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch and let's discuss your vision.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-serif text-slate-800 mb-6">Get in Touch</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                We'd love to hear about your project and discuss how we can bring your vision to life. 
                Reach out through any of the channels below, and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-center space-x-4 bg-white p-6 rounded-sm shadow-md">
                  <div className="text-emerald-700">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">{info.label}</h4>
                    <a 
                      href={info.link}
                      className="text-slate-600 hover:text-emerald-700 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md">
              <h4 className="text-xl font-serif text-slate-800 mb-4">Why Choose Guru Interiors?</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  15+ years of design and construction experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Personalized approach tailored to your lifestyle
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Full-service project management from concept to completion
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Strong client relationships and ongoing support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;