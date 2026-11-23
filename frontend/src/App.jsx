import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import SocialDock from './components/SocialDock';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const FRAME_COUNT = 238;

const SECTIONS = [
  { id: 'home', label: '01 Home', minProgress: 0, maxProgress: 0.18, targetProgress: 0 },
  { id: 'about', label: '02 About', minProgress: 0.18, maxProgress: 0.38, targetProgress: 0.28 },
  { id: 'projects', label: '03 Projects', minProgress: 0.38, maxProgress: 0.62, targetProgress: 0.50 },
  { id: 'skills', label: '04 Skills', minProgress: 0.62, maxProgress: 0.82, targetProgress: 0.72 },
  { id: 'contact', label: '05 Contact', minProgress: 0.82, maxProgress: 1.0, targetProgress: 1.0 },
];

// Module-level image cache to persist across React 18 StrictMode unmount/remount
const imageCache = new Array(FRAME_COUNT);
const loadedMap = new Array(FRAME_COUNT).fill(false);
let isPreloadStarted = false;

const getFrameUrl = (index) => {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNum}.jpg`;
};

// Start preloading immediately in module scope
const startPreload = (onFrameLoaded) => {
  if (isPreloadStarted) return;
  isPreloadStarted = true;

  // Frame 0 priority
  const f0 = new Image();
  f0.src = getFrameUrl(0);
  imageCache[0] = f0;
  f0.onload = () => {
    loadedMap[0] = true;
    onFrameLoaded?.(0);
  };

  for (let i = 0; i < FRAME_COUNT; i++) {
    if (i === 0) continue;
    const img = new Image();
    img.src = getFrameUrl(i);
    imageCache[i] = img;
    img.onload = () => {
      loadedMap[i] = true;
      onFrameLoaded?.(i);
    };
  }
};

export default function App() {
  const canvasRef = useRef(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);

  const [activeSection, setActiveSection] = useState('home');

  // Helper to draw a specific frame onto canvas with cover aspect ratio
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Pick frame or closest loaded frame
    let img = imageCache[frameIndex];
    if (!loadedMap[frameIndex]) {
      let nearest = -1;
      let minDiff = Infinity;
      for (let i = 0; i < FRAME_COUNT; i++) {
        if (loadedMap[i]) {
          const diff = Math.abs(i - frameIndex);
          if (diff < minDiff) {
            minDiff = diff;
            nearest = i;
          }
        }
      }
      if (nearest !== -1) {
        img = imageCache[nearest];
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = frameIndex;
  };

  // Resize canvas for display and high DPI
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(window.innerWidth * dpr);
    const h = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      const currentFrame = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(currentProgressRef.current * (FRAME_COUNT - 1)))
      );
      drawFrame(currentFrame);
    }
  };

  // Initialize preload & setup continuous rAF loop
  useEffect(() => {
    startPreload((idx) => {
      if (idx === 0 && lastDrawnFrameRef.current === -1) {
        drawFrame(0);
      }
    });

    resizeCanvas();
    drawFrame(0);

    let rafId;

    const loop = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      // Buttery smooth LERP interpolation (0.09)
      if (Math.abs(diff) > 0.00005) {
        currentProgressRef.current += diff * 0.09;
      } else {
        currentProgressRef.current = target;
      }

      const targetFrame = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(currentProgressRef.current * (FRAME_COUNT - 1)))
      );

      if (targetFrame !== lastDrawnFrameRef.current) {
        drawFrame(targetFrame);
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Sync scroll progress & detect active section for pop-up
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const maxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      
      if (maxScroll > 0) {
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
        targetProgressRef.current = progress;

        // Determine which section pops up based on scroll progress
        for (let i = 0; i < SECTIONS.length; i++) {
          if (progress >= SECTIONS[i].minProgress && progress <= SECTIONS[i].maxProgress) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      resizeCanvas();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial position sync
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigate = (id) => {
    const sec = SECTIONS.find((s) => s.id === id);
    if (sec) {
      const maxScroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      const targetY = sec.targetProgress * maxScroll;
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative w-full bg-[#05070c] text-white selection:bg-purple-600 selection:text-white select-none">
      
      {/* 500vh Virtual Scroll Track for Buttery Smooth Scrubbing */}
      <div className="relative w-full pointer-events-none" style={{ height: '520vh' }}>
        <div id="home" className="absolute top-0" />
        <div id="about" className="absolute top-[28%]" />
        <div id="projects" className="absolute top-[50%]" />
        <div id="skills" className="absolute top-[72%]" />
        <div id="contact" className="absolute top-[96%]" />
      </div>

      {/* Fixed Fullscreen 3D Character Scroll Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full block pointer-events-none z-0"
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      />

      {/* Softer, transparent ambient lighting for crystal-clear character visibility */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(5,7,12,0.05) 0%, rgba(5,7,12,0.4) 65%, rgba(5,7,12,0.85) 100%)'
        }}
      />

      {/* Top Fixed Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Left Social Dock */}
      <SocialDock />

      {/* Right Vertical Stage Dots Indicator */}
      <aside className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto hidden lg:flex flex-col items-end gap-3">
        {SECTIONS.map((s) => {
          const isActive = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => handleNavigate(s.id)}
              className="group flex items-center gap-3 py-1 cursor-pointer"
            >
              <span
                className={`text-[11px] font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-purple-300 font-bold opacity-100 translate-x-0'
                    : 'text-gray-500 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-purple-500 shadow-[0_0_12px_#a855f7]'
                    : 'w-2 h-2 bg-gray-600 group-hover:bg-purple-400'
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* FIXED VIEWPORT POP-UP STAGE (Never Collides with Navbar!) */}
      <div className="fixed inset-0 top-20 bottom-2 z-20 flex items-center justify-center pointer-events-none px-4 md:px-8">
        <div className="w-full max-w-7xl max-h-full overflow-y-auto no-scrollbar pointer-events-none flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.92, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.96, y: -25, filter: 'blur(6px)' }}
              transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex items-center justify-center pointer-events-auto"
            >
              {activeSection === 'home' && <HeroSection onExplore={() => handleNavigate('projects')} />}
              {activeSection === 'about' && <AboutSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'skills' && <SkillsSection />}
              {activeSection === 'contact' && <ContactSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
