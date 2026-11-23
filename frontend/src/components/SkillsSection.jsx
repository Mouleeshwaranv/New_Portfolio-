import React from 'react';

const skillGroups = [
  {
    category: 'Frontend & Animation',
    skills: [
      { name: 'React.js', level: 'Practical' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Proficient' },
      { name: 'GSAP Animation', level: 'Proficient' },
      { name: 'Framer Motion', level: 'Proficient' },
      { name: 'HTML5 & CSS3', level: 'Expert' },
      { name: 'Bootstrap', level: 'Proficient' },
    ]
  },
  {
    category: 'Design & Programming',
    skills: [
      { name: 'Responsive Web Design', level: 'Expert' },
      { name: 'UI/UX Principles', level: 'Proficient' },
      { name: 'Performance Optimization', level: 'Advanced' },
      { name: 'Debugging & Cross-Browser', level: 'Advanced' },
      { name: 'Python', level: 'Basics' },
      { name: 'SQL', level: 'Basics' },
    ]
  },
  {
    category: 'Tools & Soft Skills',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Teamwork & Adaptability', level: 'Core' },
      { name: 'Problem Solving', level: 'Core' },
      { name: 'Time Management', level: 'Core' },
      { name: 'AI Developer Tools', level: 'Certified' },
    ]
  }
];

export default function SkillsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-4 px-6 md:px-16 pointer-events-none select-none">
      
      {/* Section Header */}
      <div className="max-w-xl mb-6 pointer-events-auto">
        <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-2">
          Core Skills
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Technical & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300">Creative Arsenal</span>
        </h2>
      </div>

      {/* Categories Grid (Transparent Glassmorphic Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pointer-events-auto">
        {skillGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-[#0c081e]/40 backdrop-blur-md border border-purple-500/25 p-5 sm:p-6 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-purple-400/60 hover:bg-[#0c081e]/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-300"
          >
            <h3 className="text-base sm:text-lg font-bold text-white mb-3.5 pb-2.5 border-b border-purple-900/30 flex items-center justify-between drop-shadow-sm">
              <span>{group.category}</span>
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            </h3>

            <div className="flex flex-col gap-2">
              {group.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-purple-950/25 border border-purple-500/15 hover:border-purple-500/40 hover:bg-purple-900/30 transition-all duration-200"
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-200 drop-shadow-sm">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/30">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
