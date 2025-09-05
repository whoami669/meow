import React from 'react';
import { UserX, ShieldX, Lock, Flag, Scale } from 'lucide-react';
import content from '../data/content.json';

const SafetyCharter = () => {
  const { safetyCharter } = content;

  const iconMap = {
    'user-x': UserX,
    'shield-x': ShieldX,
    'lock': Lock,
    'flag': Flag,
    'balance-scale': Scale
  };

  return (
    <section id="safety" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#05060C] to-[#0A0F1A]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {safetyCharter.title}
          </h2>
          <p className="text-xl text-red-400 font-semibold mb-8">
            {safetyCharter.subtitle}
          </p>
        </div>

        {/* Safety Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {safetyCharter.rules.map((rule, index) => {
            const IconComponent = iconMap[rule.icon];
            
            return (
              <div
                key={index}
                className="group relative backdrop-blur-md bg-white/5 border-2 border-red-500/30 rounded-2xl p-6 hover:border-red-400/70 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Warning Glow */}
                <div className="absolute inset-0 rounded-2xl bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {rule.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Workflow */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            {safetyCharter.workflow.title}
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {safetyCharter.workflow.steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="group relative backdrop-blur-md bg-white/5 border border-violet-400/30 rounded-xl px-6 py-4 min-w-[140px] text-center hover:border-violet-400/70 hover:bg-white/10 transition-all duration-300">
                  <div className="text-violet-400 font-bold text-lg mb-1">
                    {step.step}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {step.description}
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </div>
                
                {/* Arrow */}
                {index < safetyCharter.workflow.steps.length - 1 && (
                  <div className="hidden md:block text-violet-400 text-2xl">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Zero Tolerance Message */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="backdrop-blur-md bg-red-500/10 border-2 border-red-500/50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-red-400 mb-4">
              Zero Tolerance Policy
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              Violations of our safety charter result in immediate action. We prioritize community safety over individual participation. No exceptions, no negotiations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCharter;