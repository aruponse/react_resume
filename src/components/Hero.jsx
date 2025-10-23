import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProfileData } from '../hooks/useProfileData';
import profileImg from '../images/profile.jpg';

const Hero = () => {
  const { t } = useTranslation();
  const profileData = useProfileData();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl flex flex-col items-center">
        <img
          src={profileImg}
          alt="Foto de perfil de aruponse"
          className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-8"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          {t('profile.greeting', { name: profileData.name })}
        </h1>
        <h6 className="mt-2 text-2xl md:text-4xl font-bold text-white text-center">
          {profileData.title}
        </h6>
        <p className="mt-4 text-lg md:text-2xl text-slate-300">
          {profileData.titles}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/about" className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
            {t('navigation.about')}
          </Link>
          <Link to="/stack" className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
            {t('navigation.stack')}
          </Link>
          <Link to="/experience" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
            {t('navigation.experience')}
          </Link>
          <Link to="/skills" className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105">
            {t('navigation.skills')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
