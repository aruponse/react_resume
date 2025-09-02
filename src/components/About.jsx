import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProfileData } from '../hooks/useProfileData';

const About = () => {
  const { t } = useTranslation();
  const profileData = useProfileData();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          {t('navigation.about')}
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
        </h2>
        <p className="text-center text-lg leading-relaxed mt-8">
          {profileData.about}
        </p>
      </div>
    </section>
  );
};

export default About;

