import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import content from '../data/content.json';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060C] to-[#0A0F1A]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">
                OCE Live Link-Up
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              {content.site.subtitle}
            </p>
            
            <div className="text-violet-400 font-semibold text-lg">
              {content.site.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Mission', href: '#mission' },
                { label: 'Safety Charter', href: '#safety' },
                { label: 'Channels', href: '#channels' },
                { label: 'Creator Hub', href: '#creators' }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Community</h4>
            <div className="space-y-3">
              <button
                onClick={() => window.open(content.site.discordInvite, '_blank')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span>Discord Server</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                FAQ
              </button>
              <button
                onClick={() => document.querySelector('#safety')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Safety Charter
              </button>
              <button
                onClick={() => document.querySelector('#roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Roadmap
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12 border-t border-white/10">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Join OCE Live Link-Up?
            </h4>
            <p className="text-gray-400 mb-8">
              Be part of a safer, united OCE gaming community. Join thousands of players and creators in our Discord server.
            </p>
            <button
              onClick={() => window.open(content.site.discordInvite, '_blank')}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-emerald-600 hover:from-violet-500 hover:to-emerald-500 text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30"
            >
              <span className="relative z-10">Join Discord Now</span>
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500">
            © 2025 OCE Live Link-Up. Built with love for the OCE gaming community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;