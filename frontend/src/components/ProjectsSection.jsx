import React from 'react';
import { ExternalLinkIcon, GithubIcon } from './Icons';

const projects = [
  {
    title: 'AppoinmentPro',
    category: 'Full Stack Scheduling App',
    description: 'Modern appointment booking platform featuring intuitive slot reservation, dynamic client form handling, and responsive mobile-first UI.',
    tags: ['React.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://appoinment-pro.vercel.app',
    codeUrl: 'https://github.com/Mouleeshwaranv/AppoinmentPro',
    featured: true
  },
  {
    title: 'Where Is My Bus',
    category: 'Transit & Navigation Tool',
    description: 'Real-time public transit tracking and bus locator application enabling users to search active routes, check timetables, and navigate transit.',
    tags: ['JavaScript', 'HTML5', 'Transit API'],
    liveUrl: 'https://where-is-my-bus-wheat.vercel.app',
    codeUrl: 'https://github.com/Mouleeshwaranv/Where-is-my-bus',
    featured: true
  },
  {
    title: 'Billing Platform',
    category: 'FinTech & Invoicing Engine',
    description: 'Financial invoicing and billing calculation platform designed for calculating totals, handling line items, tax computations, and receipt outputs.',
    tags: ['React.js', 'Tailwind CSS', 'State'],
    liveUrl: 'https://billing-platform-kappa.vercel.app',
    codeUrl: 'https://github.com/Mouleeshwaranv/Billing-platform',
    featured: false
  },
  {
    title: 'Library Management System',
    category: 'Education & Catalog Portal',
    description: 'Digital book catalog and inventory system to display book records, author details, borrowing statuses, and search filtering.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://library-management-ten-tau.vercel.app',
    codeUrl: 'https://github.com/Mouleeshwaranv/-Library-management-',
    featured: false
  },
  {
    title: 'Tourist Spots Explorer',
    category: 'Travel & Tourism Guide',
    description: 'Destination discovery web application exploring prominent attractions, spot guides, photo galleries, and tourism information.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://tourist-sparts.vercel.app',
    codeUrl: 'https://github.com/Mouleeshwaranv/Tourist-Sparts',
    featured: false
  },
  {
    title: 'College Subject Portal',
    category: 'Academic Resource Hub',
    description: 'Curriculum and semester subject resource portal organizing study materials, syllabus, and course notes for students.',
    tags: ['React.js', 'Tailwind CSS', 'Architecture'],
    liveUrl: 'https://college-subject.vercel.app',
    codeUrl: 'https://github.com/Mouleeshwaranv/College-Subject',
    featured: false
  }
];

export default function ProjectsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-2 px-6 md:px-16 pointer-events-none select-none">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 pointer-events-auto gap-3">
        <div>
          <div className="inline-block px-3 py-0.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[11px] font-mono uppercase tracking-widest mb-1.5">
            GitHub Repositories
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300">Live Projects</span>
          </h2>
        </div>

        <a
          href="https://github.com/Mouleeshwaranv?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-purple-500/50 bg-[#120826]/50 backdrop-blur-md hover:bg-purple-950/80 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:border-purple-400 transition-all duration-300 self-start sm:self-auto cursor-pointer"
        >
          <GithubIcon className="w-3.5 h-3.5 text-purple-300" />
          <span>View All on GitHub</span>
          <ExternalLinkIcon className="w-3 h-3 text-purple-400" />
        </a>
      </div>

      {/* Projects Grid (Compact 3-column / 2-row layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pointer-events-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-[#0c081e]/40 backdrop-blur-md border border-purple-500/25 p-4.5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-purple-400/70 hover:bg-[#0c081e]/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-medium text-purple-400 uppercase tracking-wider block drop-shadow-sm">
                  {proj.category}
                </span>
                {proj.featured && (
                  <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                    FEATURED
                  </span>
                )}
              </div>
              
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-purple-200 transition-colors drop-shadow-sm">
                {proj.title}
              </h3>
              <p className="text-gray-200 text-xs leading-relaxed mb-3 line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                {proj.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {proj.tags.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-950/40 border border-purple-500/30 text-purple-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Actions: Live Demo (Vercel) & GitHub Code */}
              <div className="flex items-center justify-between pt-2.5 border-t border-purple-900/30 gap-2">
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_18px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ExternalLinkIcon className="w-3 h-3 text-white" />
                </a>
                
                <a
                  href={proj.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-200 hover:text-white bg-purple-950/30 hover:bg-purple-900/50 border border-purple-500/30 transition-all duration-300 cursor-pointer"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
