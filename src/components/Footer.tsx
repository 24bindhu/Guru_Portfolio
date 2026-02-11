import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Residential Design', href: '#' },
    { label: 'Commercial Spaces', href: '#' },
    { label: 'Construction', href: '#' },
    { label: 'Clinics/Hospitals', href: '#' },
    { label: 'Showrooms', href: '#' },
    { label: 'Design Consultation', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">Guru Interiors</h3>
            <p className="text-slate-300 leading-relaxed">
              Creating beautiful, functional spaces that reflect your unique style and enhance your daily life.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">7799406406</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">gurushyam007@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-medium mb-6">Connect With Us</h4>
            <p className="text-slate-300 mb-6">
              Follow us for design inspiration and project updates.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-700 rounded-sm flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              © 2024 Guru Interiors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;