import React from 'react';
import { ArrowRight, Gamepad2, Ghost, ShieldCheck, UserX, Scale } from 'lucide-react';
import content from '../data/content.json';

const Hero = () => {
  const { hero, site } = content;

  const handleJoinDiscord = () => {
    window.open(site.discordInvite, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1A] via-[#05060C] to-[#0A0F1A]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title with Gradient */}
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              {hero.title}
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            {hero.subtitle}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              onClick={handleJoinDiscord}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
            >
              <span className="relative z-10">Join the Discord</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {hero.badges.map((badge, index) => {
              const IconComponent = {
                'gamepad-2': Gamepad2,
                'ghost': Ghost,
                'shield-check': ShieldCheck,
                'user-x': UserX,
                'balance-scale': Scale
              }[badge.icon];

              return (
                <div
                  key={index}
                  className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-6 py-3 hover:border-violet-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <span className="text-white font-medium">{badge.text}</span>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-violet-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;