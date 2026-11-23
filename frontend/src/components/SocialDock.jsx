import React from 'react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, XTwitterIcon } from './Icons';

const socials = [
  { id: 'github', label: 'GitHub', icon: GithubIcon, url: 'https://github.com/Mouleeshwaranv' },
  { id: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/mouleeshwaranv/' },
  { id: 'youtube', label: 'YouTube', icon: YoutubeIcon, url: 'https://youtube.com' },
  { id: 'twitter', label: 'X (Twitter)', icon: XTwitterIcon, url: 'https://x.com' },
];

export default function SocialDock() {
  return (
    <aside className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto hidden sm:flex flex-col items-center">
      <div className="bg-[#0b081a]/80 backdrop-blur-xl border border-purple-500/30 p-2.5 rounded-full flex flex-col items-center gap-4 shadow-[0_4px_30px_rgba(147,51,234,0.25)]">
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-600/30 hover:scale-115 hover:shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-all duration-300 group cursor-pointer"
            >
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
