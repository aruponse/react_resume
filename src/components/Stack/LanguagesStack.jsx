import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStackData } from '../../hooks/useStackData';
import LanguageCard from './LanguageCard';

const LanguagesStack = () => {
  const { t } = useTranslation();
  const stackData = useStackData();

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-wrap gap-4">
        {stackData.languages.map((item) => (
          <LanguageCard
            key={item.name}
            name={item.name}
            level={item.level}
            color={item.color}
            frameworks={item.frameworks || []}
            description={item.description || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguagesStack;
