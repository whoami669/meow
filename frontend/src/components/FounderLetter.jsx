import React from 'react';
import { Quote } from 'lucide-react';
import content from '../data/content.json';

const FounderLetter = () => {
  const { founderLetter } = content;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060C] via-[#0A0F1A] to-[#05060C]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <Quote className="w-8 h-8 text-violet-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                {founderLetter.title}
              </h2>
              <Quote className="w-8 h-8 text-violet-400 rotate-180" />
            </div>
            <p className="text-xl text-violet-400 font-semibold">
              From {founderLetter.author}
            </p>
          </div>

          {/* Letter Content */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative">
            {/* Quote decoration */}
            <div className="absolute top-6 left-6 text-6xl text-violet-400/20 font-serif">
              "
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-violet-400/20 font-serif rotate-180">
              "
            </div>

            <div className="relative z-10 space-y-6">
              {founderLetter.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-12 text-right">
              <div className="inline-block">
                <div className="text-2xl font-bold text-white mb-2">
                  — {founderLetter.author}
                </div>
                <div className="text-violet-400 font-medium">
                  Founder, OCE Live Link-Up
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 via-cyan-500/10 to-emerald-500/10 opacity-50 -z-10 blur-xl"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-6">
              Ready to be part of the change?
            </p>
            <button
              onClick={() => window.open(content.site.discordInvite, '_blank')}
              className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
            >
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderLetter;