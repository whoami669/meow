import React from 'react';
import { UserPlus, Settings, Gamepad2, Monitor, Mouse, Trophy } from 'lucide-react';
import content from '../data/content.json';

const Roles = () => {
  const { roles } = content;

  const getCategoryIcon = (title) => {
    switch (title) {
      case 'Player Type':
        return <UserPlus className="w-5 h-5" />;
      case 'Games':
        return <Gamepad2 className="w-5 h-5" />;
      case 'Platform':
        return <Monitor className="w-5 h-5" />;
      case 'Input':
        return <Mouse className="w-5 h-5" />;
      case 'Phasmophobia Experience':
        return <Trophy className="w-5 h-5" />;
      case 'Notifications':
        return <Settings className="w-5 h-5" />;
      default:
        return <Settings className="w-5 h-5" />;
    }
  };

  return (
    <section id="roles" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060C] via-[#0A0F1A] to-[#05060C]">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {roles.title}
          </h2>
          <p className="text-xl text-gray-400">
            {roles.subtitle}
          </p>
        </div>

        {/* Role Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {roles.categories.map((category, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 text-sm hover:border-emerald-400/30 hover:bg-white/10 transition-all duration-200"
                  >
                    {option}
                  </div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
            </div>
          ))}
        </div>

        {/* How to Join Steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            How to Join & Get Roles
          </h3>
          
          <div className="space-y-6">
            {roles.steps.map((step, index) => (
              <div
                key={index}
                className="group flex items-start gap-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-400/50 hover:bg-white/10 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step}
                  </p>
                </div>

                {/* Arrow */}
                {index < roles.steps.length - 1 && (
                  <div className="hidden md:block text-violet-400 text-2xl mt-4">
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="backdrop-blur-md bg-gradient-to-r from-violet-500/10 to-emerald-500/10 border-2 border-violet-400/50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Click the button below to join our Discord server and start your journey with OCE Live Link-Up. Set up your roles and become part of our growing community.
            </p>
            <button
              onClick={() => window.open(content.site.discordInvite, '_blank')}
              className="bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-500 hover:to-emerald-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
            >
              Join & Set Roles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;