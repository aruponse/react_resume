import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProfileData } from '../hooks/useProfileData';
import profileImg from '../images/profile.jpg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const profileData = useProfileData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
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
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300 px-2 py-1 rounded border border-slate-600 hover:border-cyan-400"
            title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {i18n.language.toUpperCase()}
          </button>
          <button
            aria-label="Abrir menú"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="text-slate-200 hover:text-cyan-400 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M3.75 5.25h16.5a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5zm0 6h16.5a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5zm0 6h16.5a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-200 hover:text-cyan-400 font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
