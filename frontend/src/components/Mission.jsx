import React from 'react';
import { Users, Shield, Heart } from 'lucide-react';
import content from '../data/content.json';

const Mission = () => {
  const { mission } = content;

  const iconMap = {
    users: Users,
    shield: Shield,
    heart: Heart
  };

  return (
    <section id="mission" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060C] to-[#0A0F1A]">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {mission.title}
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            {mission.subtitle}
          </p>
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {mission.content}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mission.values.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            
            return (
              <div
                key={index}
                className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-400/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 via-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Top Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {content.site.tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;