import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import content from '../data/content.json';

const ChannelDirectory = () => {
  const { channels } = content;
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="channels" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060C] via-[#0A0F1A] to-[#05060C]">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {channels.title}
          </h2>
          <p className="text-xl text-gray-400">
            {channels.subtitle}
          </p>
        </div>

        {/* Channel Categories */}
        <div className="max-w-6xl mx-auto space-y-6">
          {channels.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-300"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                    {category.channels.length} channels
                  </span>
                </div>
                <div className="text-violet-400">
                  {expandedCategory === categoryIndex ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Channel List */}
              {expandedCategory === categoryIndex && (
                <div className="border-t border-white/10 p-6 animate-fade-in-up">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.channels.map((channel, channelIndex) => (
                      <div
                        key={channelIndex}
                        className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-xl flex-shrink-0 mt-1">
                            {channel.emoji}
                          </span>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-1">
                              #{channel.name}
                            </h4>
                            <p className="text-gray-400 text-sm mb-2">
                              {channel.purpose}
                            </p>
                            <p className="text-cyan-400 text-xs font-medium">
                              {channel.rules}
                            </p>
                          </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Access */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Quick Access Channels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['#welcome', '#rules', '#verify', '#announcements'].map((channel, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-violet-400/30 rounded-xl px-4 py-3 text-center hover:border-violet-400/70 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-violet-400 font-semibold">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelDirectory;