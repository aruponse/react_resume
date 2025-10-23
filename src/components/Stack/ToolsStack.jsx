import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStackData } from '../../hooks/useStackData';
import ToolGroup from './ToolGroup';

const ToolsStack = () => {
  const { t } = useTranslation();
  const stackData = useStackData();
  const [activeToolGroup, setActiveToolGroup] = useState(null);

  const toggleToolGroup = (toolGroupName) => {
    setActiveToolGroup(activeToolGroup === toolGroupName ? null : toolGroupName);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="space-y-4">
        {stackData.tools.map((toolGroup) => (
          <ToolGroup
            key={toolGroup.name}
            toolGroup={toolGroup}
            isOpen={activeToolGroup === toolGroup.name}
            onToggle={() => toggleToolGroup(toolGroup.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsStack;
