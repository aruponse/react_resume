import React from 'react';
import { useProfileData } from '../hooks/useProfileData';

const Footer = () => {
  const profileData = useProfileData();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center">
        <div className="flex items-center gap-4">
          {profileData.contact.social.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLink.name}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <socialLink.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;


