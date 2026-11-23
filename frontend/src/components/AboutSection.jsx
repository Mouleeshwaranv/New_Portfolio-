import React from 'react';
import { DownloadIcon } from './Icons';

const stats = [
  { value: 'BCA', label: 'K.S. Rangasamy College (78%)' },
  { value: 'Ksquare', label: 'Frontend Intern (2025)' },
  { value: '6+', label: 'Live Deployed Projects' },
  { value: '100%', label: 'Clean Code & 60fps' },
];

export default function AboutSection() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-4 px-6 md:px-16 pointer-events-none select-none">
      
      {/* Left Card: Bio (Transparent Glassmorphic Card) */}
      <div className="w-full md:w-[48%] bg-[#0c081e]/40 backdrop-blur-md border border-purple-500/25 p-7 md:p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] pointer-events-auto">
        <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
          About Me
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
          Frontend Developer Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">High-Performance Web Apps</span>
        </h2>

        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-3 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
          I am Mouleeshwaran V, a results-driven Frontend Developer with practical experience designing and building responsive, high-performance web interfaces using React.js, Tailwind CSS, JavaScript, GSAP, and Framer Motion.
        </p>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
          Adept at crafting modern UI/UX experiences, integrating APIs, optimizing web performance, and delivering clean, accessible code following modern development standards.
        </p>

        {/* Quick Pillars */}
        <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-purple-900/30 mb-5">
          <div className="flex items-center gap-2 text-xs text-purple-200 font-medium drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
            <span>React.js & Tailwind</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-purple-200 font-medium drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span>GSAP & Motion</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-purple-200 font-medium drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9]" />
            <span>Responsive Design</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-purple-200 font-medium drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>Performance Tuning</span>
          </div>
        </div>

        <a
          href="/MOULEESHWARAN_V_Resume.pdf"
          download="MOULEESHWARAN_V_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white border border-purple-500/50 bg-purple-950/40 hover:bg-purple-900/60 shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all cursor-pointer"
        >
          <DownloadIcon className="w-3.5 h-3.5 text-purple-300" />
          <span>Download CV (PDF)</span>
        </a>
      </div>

      {/* Right Card: Stats & Metrics */}
      <div className="w-full md:w-[45%] flex flex-col gap-3.5 pointer-events-auto">
        <div className="grid grid-cols-2 gap-3.5">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-[#0c081e]/40 backdrop-blur-md border border-purple-500/25 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-purple-400/60 hover:bg-[#0c081e]/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-200 text-xs font-medium tracking-wide drop-shadow-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0c081e]/40 backdrop-blur-md border border-purple-500/25 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h3 className="text-white font-bold text-sm mb-1.5 flex items-center gap-2">
            <span className="text-purple-400">⚡</span> Experience Highlight
          </h3>
          <p className="text-gray-200 text-xs font-semibold mb-1 drop-shadow-sm">
            Frontend Developer Intern – Ksquare Softtech (May 2025 – June 2025)
          </p>
          <p className="text-gray-300 text-xs leading-relaxed drop-shadow-sm">
            Designed user-centric interfaces using React.js and Tailwind CSS, implemented fluid animations using GSAP and Framer Motion, and enhanced site performance across all devices.
          </p>
        </div>
      </div>

    </div>
  );
}
