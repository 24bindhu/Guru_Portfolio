import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'living', label: 'Living Rooms' },
    {id: 'pooja', label: 'Pooja Mandir'},
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'bathroom', label: 'Bathrooms' }
  ];

  const projects = [
    {
      id: 1,
      category: 'pooja',
      title: 'Elegant Pooja Room Design',
      description: 'A sophisticated spiritual space featuring custom millwork, ambient lighting, and traditional motifs. The design combines modern aesthetics with cultural elements.',
      image: '/image.png',
      details: 'Custom millwork, LED lighting, traditional motifs, marble flooring'
    },
    {
      id: 2,
      category: 'pooja',
      title: 'Traditional Pooja Mandir',
      description: 'Beautiful traditional pooja room with intricate carved doors, golden motifs, and ambient lighting creating a serene spiritual atmosphere.',
      image: '/pooja mandir/image.png',
      details: 'Carved wooden doors, golden motifs, LED lighting, marble work'
    },
    {
      id: 3,
      category: 'bedroom',
      title: 'Modern Master Bedroom',
      description: 'A contemporary bedroom featuring wood paneling, marble accent wall, and sophisticated LED ceiling lighting creating a luxurious atmosphere.',
      image: '/bedroom/image copy.png',
      details: 'Wood paneling, marble feature wall, LED lighting, modern design'
    },
    {
      id: 4,
      category: 'bedroom',
      title: 'Elegant Bedroom Storage',
      description: 'Sophisticated bedroom design featuring marble accent walls with geometric patterns, warm wood cabinetry, and integrated LED lighting.',
      image: '/bedroom/image.png',
      details: 'Marble geometric patterns, wood cabinetry, LED strip lighting, modern handles'
    },
    {
      id: 5,
      category: 'kitchen',
      title: 'Contemporary Chef\'s Kitchen',
      description: 'A stunning modern kitchen with geometric ceiling design, two-tone cabinetry in cream and green, black granite countertops, and sophisticated lighting.',
      image: '/kitchen/image.png',
      details: 'Geometric ceiling, two-tone cabinets, granite countertops, LED lighting'
    },
    {
      id: 6,
      category: 'bathroom',
      title: 'Spa-Inspired Master Bath',
      description: 'A tranquil sanctuary featuring natural stone, floating vanities, and a stunning freestanding tub.',
      image: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      details: 'Natural stone, rainfall shower, heated floors'
    },
    {
      id: 7,
      category: 'living',
      title: 'Elegant Living Space',
      description: 'A sophisticated living room with custom ceiling design, warm wood tones, and carefully curated artwork creating an inviting atmosphere.',
      image: '/living/image.png',
      details: 'Custom ceiling design, wood accents, curated artwork, warm lighting'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
            Our
            <span className="block text-emerald-700 font-medium">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collection of interior design projects, each telling a unique story of transformation and style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-700 text-white transform scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      {project.details}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;