import React, { useState, useEffect } from 'react';
import { Menu, X, Users } from 'lucide-react';
import content from '../data/content.json';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Safety', href: '#safety' },
    { label: 'Channels', href: '#channels' },
    { label: 'Roles', href: '#roles' },
    { label: 'Creator Hub', href: '#creators' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleJoinDiscord = () => {
    window.open(content.site.discordInvite, '_blank');
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#0A0F1A]/80 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-white">
              OCE Live Link-Up
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={handleJoinDiscord}
              className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Discord
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-[#0A0F1A]/95 border-b border-white/10">
            <div className="flex flex-col py-6 px-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleJoinDiscord}
                className="bg-gradient-to-r from-violet-600 to-violet-700 text-white px-6 py-3 rounded-xl font-semibold mt-4 w-full"
              >
                Join Discord
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;