import React from 'react';
import { Award, Users, Palette } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-emerald-700" />,
      title: "15+ Years Experience",
      description: "Over a decade of creating exceptional interior spaces"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-700" />,
      title: "200+ Happy Clients",
      description: "Trusted by homeowners and businesses alike"
    },
    {
      icon: <Palette className="w-8 h-8 text-emerald-700" />,
      title: "Award-Winning Design",
      description: "Recognized for excellence in interior design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-8">
              About
              <span className="block text-emerald-700 font-medium">Guru Interiors</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded in 2009, our design studio started independently with a passion for creating beautiful and functional spaces. Though initially without prior experience, we grew by honing strong communication skills and connecting with clients to truly understand their needs.
              </p>
              
              <p>
                We take pride in understanding all types of customers and meeting their requirements without compromising the aesthetics and outlook of a space. From small spaces with many requirements to large areas with fewer elements, every project has been completed successfully with a focus on customer satisfaction.
              </p>
              
              <p>
                From the past three years, we have also expanded into construction, turning houses into the homes our clients have always dreamed of. Even long after a project is finished, we maintain strong connections with our clients, reflecting the trust and relationships built through thoughtful design.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Guru Interiors workspace" 
                className="w-full h-96 object-cover rounded-sm shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-sm"></div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {achievements.slice(0, 2).map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-stone-50 rounded-sm">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-slate-800 mb-2">
                      {index === 1 ? '1000+ Happy Clients' : achievement.title}
                    </h4>
                    <p className="text-slate-600">
                      {index === 1 ? 'Trusted by homeowners and businesses alike' : achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;