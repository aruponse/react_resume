import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStackData } from '../../hooks/useStackData';
import StackCard from './StackCard';

const FrameworksStack = () => {
  const { t } = useTranslation();
  const stackData = useStackData();
  const [activeLanguage, setActiveLanguage] = useState(null);
  const [activeFrameworkGroup, setActiveFrameworkGroup] = useState(null);

  const toggleLanguage = (languageName) => {
    setActiveLanguage(activeLanguage === languageName ? null : languageName);
    setActiveFrameworkGroup(null); // Reset framework group when changing language
  };

  const toggleFrameworkGroup = (frameworkGroupName) => {
    setActiveFrameworkGroup(activeFrameworkGroup === frameworkGroupName ? null : frameworkGroupName);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="space-y-4">
        {stackData.languages
          .filter(language => language.frameworks && language.frameworks.length > 0)
          .map((language) => (
            <div key={language.name} className="border border-cyan-500/30 rounded-xl overflow-hidden">
              {/* Language Header */}
              <button
                onClick={() => toggleLanguage(language.name)}
                className="w-full px-4 py-3 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">💻</span>
                  <h4 className="text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {language.name}
                  </h4>
                </div>
                <div className={`transform transition-transform duration-300 ${activeLanguage === language.name ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Language Content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeLanguage === language.name ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-4 bg-slate-800/50">
                  <div className="space-y-3">
                    {language.frameworks.map((frameworkGroup) => (
                      frameworkGroup.frameworks && frameworkGroup.frameworks.length > 0 && (
                        <div key={frameworkGroup.name} className="border border-cyan-400/20 rounded-lg overflow-hidden">
                          {/* Framework Group Header */}
                          <button
                            onClick={() => toggleFrameworkGroup(frameworkGroup.name)}
                            className="w-full px-4 py-2 bg-gradient-to-r from-slate-600/30 to-slate-500/30 hover:from-slate-500/30 hover:to-slate-400/30 transition-all duration-300 flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm">⚙️</span>
                              <h5 className="text-sm font-semibold text-cyan-200 group-hover:text-cyan-100 transition-colors">
                                {frameworkGroup.name}
                              </h5>
                            </div>
                            <div className={`transform transition-transform duration-300 ${activeFrameworkGroup === frameworkGroup.name ? 'rotate-180' : 'rotate-0'}`}>
                              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>

                          {/* Framework Group Content */}
                          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            activeFrameworkGroup === frameworkGroup.name ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
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
                      )
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

export default FrameworksStack;
