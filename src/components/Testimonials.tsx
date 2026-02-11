import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Vishwanatham',
      location: 'Khammam, India',
      project: '3-Bedroom flat',
      rating: 5,
      text: 'Guru Interiors completed our three-bedroom flat in an unexpectedly short time, fully meeting all our requirements. We are completely satisfied, and even years later, visitors continue to appreciate and admire the space.'
    },
    {
      name: 'Name',
      location: 'Hyderabad, India',
      project: 'Old House Renovation',
      rating: 5,
      text: 'We never imagined our old house could look this way. The renovation was impeccable, with neat finishes throughout. Once the work was completed, everything was perfect—we didn\'t need any additional services unless we invited them for special occasions.'
    },
    {
      name: 'Name',
      location: 'Khammam, India',
      project: 'Construction',
      rating: 5,
      text: 'From an empty site outside the city to a fully finished home with interiors, the team knew exactly how I wanted the house. After six months of planning and execution, the home turned out exactly as I had envisioned for years—it feels truly made for us.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
            Client
            <span className="block text-emerald-700 font-medium">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hear what our clients have to say about their experience working with Guru Interiors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-emerald-700 mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-lg italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-full">
                  <h4 className="font-medium text-slate-800">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.location}</p>
                  <p className="text-emerald-700 text-sm font-medium">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;