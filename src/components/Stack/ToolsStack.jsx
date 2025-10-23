import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStackData } from '../../hooks/useStackData';
import StackCard from './StackCard';

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
          <div key={toolGroup.name} className="border border-cyan-500/30 rounded-xl overflow-hidden">
            {/* Tool Group Header */}
            <button
              onClick={() => toggleToolGroup(toolGroup.name)}
              className="w-full px-4 py-3 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🔧</span>
                <h4 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  {toolGroup.name}
                </h4>
              </div>
              <div className={`transform transition-transform duration-300 ${activeToolGroup === toolGroup.name ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Tool Group Content */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeToolGroup === toolGroup.name ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-4 bg-slate-800/50">
                <div className="flex flex-wrap gap-3">
                  {toolGroup.tools.map((tool) => (
                    <StackCard
                      key={tool.name}
                      name={tool.name}
                      level={tool.level}
                      color={tool.color}
                      size="small"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsStack;
