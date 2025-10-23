import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStackData } from '../../hooks/useStackData';
import LanguagesStack from './LanguagesStack';
import FrameworksStack from './FrameworksStack';
import DatabasesStack from './DatabasesStack';
import ToolsStack from './ToolsStack';

const Stack = () => {
  const { t } = useTranslation();
  const stackData = useStackData();
  const [activeSection, setActiveSection] = useState('languages');

  const sections = [
    {
      id: 'languages',
      title: t('stack.sections.languages'),
      icon: '💻',
      component: <LanguagesStack />
    },
    {
      id: 'frameworks',
      title: t('stack.sections.frameworks'),
      icon: '🧩',
      component: <FrameworksStack />
    },
    {
      id: 'databases',
      title: t('stack.sections.databases'),
      icon: '🗄️',
      component: <DatabasesStack />
    },
    {
      id: 'tools',
      title: t('stack.sections.tools'),
      icon: '🛠️',
      component: <ToolsStack />
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
      <div className="max-w-4xl w-full bg-slate-800/80 rounded-2xl shadow-2xl p-8 border border-cyan-500 backdrop-blur-md">
                    <h2 className="text-4xl font-extrabold text-cyan-400 text-center mb-8 drop-shadow-lg animate-pulse">
                      {t('stack.title')}
                    </h2>
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border border-cyan-500/30 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {section.title}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-300 ${activeSection === section.id ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeSection === section.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 bg-slate-800/50">
                  {section.component}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
