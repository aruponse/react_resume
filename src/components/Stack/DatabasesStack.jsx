import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStackData } from '../../hooks/useStackData';
import { StackCard } from '../shared';

const DatabasesStack = () => {
  const { t } = useTranslation();
  const stackData = useStackData();

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-wrap gap-4">
        {stackData.databases.map((item) => (
          <StackCard
            key={item.name}
            name={item.name}
            level={item.level}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default DatabasesStack;
