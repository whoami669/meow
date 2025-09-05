import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import content from '../data/content.json';

const FAQ = () => {
  const { faq } = content;
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#05060C] to-[#0A0F1A]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              {faq.title}
            </h2>
          </div>
          <p className="text-xl text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 text-cyan-400">
                  {openItems.has(index) ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openItems.has(index) && (
                <div className="border-t border-white/10 p-6 animate-fade-in-up">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="backdrop-blur-md bg-cyan-500/10 border-2 border-cyan-500/50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">
              Still Have Questions?
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Join our Discord server and ask our community or moderators directly. We're here to help and make sure you have the best experience possible.
            </p>
            <button
              onClick={() => window.open(content.site.discordInvite, '_blank')}
              className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Ask in Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;