import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-slate-800 mb-6 leading-tight">
          Crafting Beautiful
          <span className="block text-emerald-700 font-medium">Living Spaces</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Where timeless elegance meets modern functionality. Transform your space into a reflection of your unique style and personality.
        </p>

        <div className="flex justify-center items-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="bg-emerald-700 text-white px-8 py-4 rounded-sm hover:bg-emerald-800 transition-all duration-300 transform hover:scale-105 font-medium tracking-wide"
          >
            View Our Work
          </button>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-slate-500 mb-4 font-light">Discover Our Design Philosophy</p>
          <button 
            onClick={scrollToAbout}
            className="text-emerald-700 hover:text-emerald-800 transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;