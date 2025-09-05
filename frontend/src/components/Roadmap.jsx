import React from 'react';
import { CheckCircle, Clock, Calendar, Target } from 'lucide-react';
import content from '../data/content.json';

const Roadmap = () => {
  const { roadmap } = content;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Complete':
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case 'In Progress':
        return <Clock className="w-6 h-6 text-violet-400" />;
      case 'Planned':
        return <Target className="w-6 h-6 text-cyan-400" />;
      default:
        return <Calendar className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Complete':
        return 'border-emerald-400/50 bg-emerald-500/10';
      case 'In Progress':
        return 'border-violet-400/50 bg-violet-500/10';
      case 'Planned':
        return 'border-cyan-400/50 bg-cyan-500/10';
      default:
        return 'border-gray-400/50 bg-gray-500/10';
    }
  };

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#05060C] to-[#0A0F1A]">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {roadmap.title}
          </h2>
          <p className="text-xl text-gray-400">
            {roadmap.subtitle}
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {roadmap.phases.map((phase, index) => (
              <div
                key={index}
                className={`group relative backdrop-blur-md border-2 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 ${getStatusColor(phase.status)}`}
              >
                {/* Phase Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(phase.status)}
                    <h3 className="text-2xl font-bold text-white">
                      {phase.phase}
                    </h3>
                  </div>
                  <div className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                    {phase.date}
                  </div>
                </div>

                {/* Phase Title */}
                <h4 className="text-xl font-semibold text-white mb-4">
                  {phase.title}
                </h4>

                {/* Status Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  phase.status === 'Complete' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30' :
                  phase.status === 'In Progress' ? 'bg-violet-500/20 text-violet-400 border border-violet-400/30' :
                  'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                }`}>
                  {phase.status}
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {phase.description}
                </p>

                {/* Items List */}
                <div className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        phase.status === 'Complete' ? 'bg-emerald-400' :
                        phase.status === 'In Progress' ? 'bg-violet-400' :
                        'bg-cyan-400'
                      }`}></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        phase.status === 'Complete' ? 'w-full bg-gradient-to-r from-emerald-400 to-emerald-500' :
                        phase.status === 'In Progress' ? 'w-3/4 bg-gradient-to-r from-violet-400 to-violet-500' :
                        'w-1/4 bg-gradient-to-r from-cyan-400 to-cyan-500'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${
                  phase.status === 'Complete' ? 'bg-emerald-500/20' :
                  phase.status === 'In Progress' ? 'bg-violet-500/20' :
                  'bg-cyan-500/20'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="backdrop-blur-md bg-violet-500/10 border-2 border-violet-500/50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-violet-400 mb-4">
              Current Focus: Community Quality
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're actively working on Phase 2, enhancing our safety measures and building stronger community connections. Your feedback and participation help shape our progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;