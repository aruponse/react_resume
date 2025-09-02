import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProfileData } from '../hooks/useProfileData';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const { t } = useTranslation();
  const profileData = useProfileData();

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          {t('navigation.experience')}
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
        </h2>
        <div className="mt-12 relative">
          {profileData.experience.map((job, index) => (
            <ExperienceCard
              key={index}
              role={job.role}
              company={job.company}
              period={job.period}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

