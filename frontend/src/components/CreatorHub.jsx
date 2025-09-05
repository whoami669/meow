import React from 'react';
import { Video, Users, Image } from 'lucide-react';
import content from '../data/content.json';

const CreatorHub = () => {
  const { creatorHub } = content;

  const iconMap = {
    video: Video,
    users: Users,
    image: Image
  };

  return (
    <section id="creators" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#05060C] to-[#0A0F1A]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {creatorHub.title}
          </h2>
          <p className="text-xl text-gray-400">
            {creatorHub.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {creatorHub.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <div
                key={index}
                className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Top Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="backdrop-blur-md bg-emerald-500/10 border-2 border-emerald-500/50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-emerald-400 mb-4">
              Ready to Create?
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Join our creator community and get the support you need to make amazing content. From collaboration opportunities to technical help, we've got you covered.
            </p>
            <button
              onClick={() => window.open(content.site.discordInvite, '_blank')}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              Join Creator Hub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorHub;