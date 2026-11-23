import React, { useState } from 'react';
import { LogoIcon, DownloadIcon } from './Icons';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (id) => {
    onNavigate?.(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div 
          onClick={() => handleClick('home')}
          className="flex items-center gap-3 cursor-pointer pointer-events-auto group select-none"
        >
          <LogoIcon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg md:text-xl tracking-tight leading-tight group-hover:text-purple-200 transition-colors">
              Mouleesh V
            </span>
            <span className="text-purple-400 text-xs font-medium tracking-wider">
              Developer
            </span>
          </div>
        </div>

        {/* Center: Floating Pill Navigation (Desktop) */}
        <nav className="hidden md:flex items-center bg-[#0d091e]/75 backdrop-blur-xl border border-purple-500/25 px-2 py-1.5 rounded-full shadow-[0_4px_25px_rgba(147,51,234,0.25)] pointer-events-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`relative px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 select-none cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.6)] font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Download CV Button */}
        <div className="hidden md:flex items-center pointer-events-auto">
          <a
            href="/MOULEESHWARAN_V_Resume.pdf"
            download="MOULEESHWARAN_V_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white border border-purple-500/60 bg-[#120b29]/60 hover:bg-purple-950/70 hover:border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_22px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <span>Download CV</span>
            <DownloadIcon className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#120b29]/80 border border-purple-500/30 text-white hover:bg-purple-900/40 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 p-4 bg-[#0a0717]/95 backdrop-blur-2xl border border-purple-500/30 rounded-2xl shadow-2xl pointer-events-auto flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-purple-600 text-white font-semibold'
                  : 'text-gray-300 hover:bg-purple-900/30 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-purple-900/40">
            <a
              href="/MOULEESHWARAN_V_Resume.pdf"
              download="MOULEESHWARAN_V_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-purple-600/30 border border-purple-500/50 hover:bg-purple-600/50 transition-colors"
            >
              <span>Download CV</span>
              <DownloadIcon className="w-4 h-4 text-purple-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
