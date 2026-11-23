import React, { useState } from 'react';
import { ArrowRightIcon, DownloadIcon, LinkedinIcon, ExternalLinkIcon } from './Icons';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-3 px-6 md:px-16 pointer-events-none select-none">
      
      {/* Main Content Grid (Transparent Glassmorphic Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pointer-events-auto">
        
        {/* Left: Contact Info */}
        <div className="bg-[#0c081e]/40 backdrop-blur-md border border-purple-500/25 p-6 sm:p-7 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="inline-block px-3 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-mono uppercase tracking-widest mb-3">
            Get In Touch
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Exceptional</span>
          </h2>

          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-4 drop-shadow-sm">
            Whether you're looking to hire a dedicated Frontend Developer, build interactive animated web experiences, or discuss new opportunities, feel free to reach out.
          </p>

          <div className="flex flex-col gap-2.5 mb-4">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-purple-950/25 border border-purple-500/15">
              <div className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300 text-sm">
                ✉
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-medium">Email Address</div>
                <a href="mailto:mouleesh05080@gmail.com" className="text-white text-xs sm:text-sm font-semibold hover:text-purple-300 transition-colors drop-shadow-sm">
                  mouleesh05080@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-purple-950/25 border border-purple-500/15">
              <div className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300">
                <LinkedinIcon className="w-4 h-4 text-purple-300" />
              </div>
              <div className="flex-1 flex items-center justify-between pr-2">
                <div>
                  <div className="text-[10px] text-gray-400 font-medium">LinkedIn Profile</div>
                  <a 
                    href="https://www.linkedin.com/in/mouleeshwaranv/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-xs sm:text-sm font-semibold hover:text-purple-300 transition-colors flex items-center gap-1.5 drop-shadow-sm"
                  >
                    <span>linkedin.com/in/mouleeshwaranv</span>
                    <ExternalLinkIcon className="w-3 h-3 text-purple-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-purple-950/25 border border-purple-500/15">
              <div className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300 text-sm">
                📞
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-medium">Phone</div>
                <a href="tel:+919514800678" className="text-white text-xs sm:text-sm font-semibold hover:text-purple-300 transition-colors drop-shadow-sm">
                  +91 95148 00678
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-purple-950/25 border border-purple-500/15">
              <div className="w-8 h-8 rounded-lg bg-purple-600/30 flex items-center justify-center text-purple-300 text-sm">
                📍
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-medium">Location</div>
                <div className="text-white text-xs sm:text-sm font-semibold drop-shadow-sm">
                  Namakkal – 637204, Tamil Nadu, India
                </div>
              </div>
            </div>
          </div>

          {/* Direct Resume Download Link */}
          <a
            href="/MOULEESHWARAN_V_Resume.pdf"
            download="MOULEESHWARAN_V_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-purple-600/40 hover:bg-purple-600/60 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all cursor-pointer"
          >
            <DownloadIcon className="w-3.5 h-3.5 text-purple-300" />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>

        {/* Right: Message Form */}
        <div className="bg-[#0c081e]/40 backdrop-blur-md border border-purple-500/25 p-6 sm:p-7 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <h3 className="text-xl font-bold text-white mb-1.5 drop-shadow-sm">Send a Message</h3>
          <p className="text-gray-300 text-xs mb-4 drop-shadow-sm">Drop your details below and I'll respond promptly.</p>

          {submitted ? (
            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-500/40 text-center animate-fadeIn">
              <div className="text-2xl mb-1.5">🎉</div>
              <h4 className="text-base font-bold text-white mb-1">Message Sent!</h4>
              <p className="text-gray-200 text-xs">Thank you for reaching out, Mouleeshwaran will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-300 mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-3.5 py-2 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-1 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-purple-200" />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Footer Credit Line */}
      <div className="w-full pt-4 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2 pointer-events-auto mt-4">
        <div>
          © {new Date().getFullYear()} <span className="text-white font-semibold">Mouleeshwaran V</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/mouleeshwaranv/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">LinkedIn</a>
          <a href="https://github.com/Mouleeshwaranv" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">GitHub</a>
        </div>
      </div>

    </div>
  );
}
