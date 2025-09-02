import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProfileData } from '../hooks/useProfileData';
import profileImg from '../images/profile.jpg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const profileData = useProfileData();

  const navLinks = [
    { name: t('navigation.home'), path: '/react_resume' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.experience'), path: '/experience' },
    { name: t('navigation.skills'), path: '/skills' },
    { name: t('navigation.stack'), path: '/stack' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
          <img
            src={profileImg}
            alt="Foto de perfil miniatura"
            className="w-8 h-8 rounded-full object-cover border-2 border-cyan-400 shadow"
          />
          <Link to="/react_resume">{profileData.name}</Link>
        </h1>
        <nav className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300 px-2 py-1 rounded border border-slate-600 hover:border-cyan-400"
            title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {i18n.language.toUpperCase()}
          </button>

          {profileData.contact.social.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={socialLink.name}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 ml-2"
            >
              <socialLink.icon size={22} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
