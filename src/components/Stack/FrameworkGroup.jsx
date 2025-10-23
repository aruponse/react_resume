import React from 'react';
import { StackCard } from '../shared';

const FrameworkGroup = ({ 
  frameworkGroup, 
  isOpen, 
  onToggle 
}) => {
  if (!frameworkGroup.frameworks || frameworkGroup.frameworks.length === 0) {
    return null;
  }

  return (
    <div className="border border-cyan-400/20 rounded-lg overflow-hidden">
      {/* Framework Group Header */}
      <button
        onClick={onToggle}
        className="w-full px-4 py-2 bg-gradient-to-r from-slate-600/30 to-slate-500/30 hover:from-slate-500/30 hover:to-slate-400/30 transition-all duration-300 flex items-center justify-between group"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">⚙️</span>
          <h5 className="text-sm font-semibold text-cyan-200 group-hover:text-cyan-100 transition-colors">
            {frameworkGroup.name}
          </h5>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Framework Group Content */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-3 bg-slate-700/30">
          <div className="flex flex-wrap gap-3">
            {frameworkGroup.frameworks.map((framework) => (
              <StackCard
                key={framework.name}
                name={framework.name}
                level={framework.level}
                color={framework.color}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworkGroup;
