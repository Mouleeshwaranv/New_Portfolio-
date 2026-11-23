import React from 'react';
import { ArrowRightIcon } from './Icons';

export default function HeroSection({ onExplore }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[calc(100vh-8.5rem)] px-6 md:px-16 pointer-events-none select-none">
      
      {/* Main Hero Content (Left-Aligned, exactly matching the reference layout) */}
      <div className="flex-1 flex items-center">
        <div className="max-w-xl pointer-events-auto z-10">
          
          {/* Subtitle Greeting */}
          <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide mb-1 drop-shadow-sm">
            Hello, I'm
          </p>

          {/* Main Name Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            Mouleesh V
          </h1>

          {/* Role Subheading with purple highlight */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Frontend <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Developer</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Turning ideas into powerful digital experiences with React.js, Tailwind CSS, GSAP, and Framer Motion.
          </p>

          {/* Explore My Work CTA Button */}
          <button
            onClick={onExplore}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-white font-medium text-base border border-purple-500/80 bg-[#120826]/70 hover:bg-purple-900/60 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:border-purple-400 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowRightIcon className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom Ticker Line: Code • Create • Innovate */}
      <div className="w-full flex items-center justify-center gap-6 mt-4 z-10 pointer-events-none">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-purple-200/90 font-mono font-medium drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
          Code &nbsp;•&nbsp; Create &nbsp;•&nbsp; Innovate
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      </div>
    </div>
  );
}
