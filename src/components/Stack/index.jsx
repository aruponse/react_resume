import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeader, Accordion } from '../shared';
import LanguagesStack from './LanguagesStack';
import FrameworksStack from './FrameworksStack';
import DatabasesStack from './DatabasesStack';
import ToolsStack from './ToolsStack';

const Stack = () => {
  const { t } = useTranslation();
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
        <SectionHeader title={t('stack.title')} />
        <div className="space-y-4">
          {sections.map((section) => (
            <Accordion
              key={section.id}
              isOpen={activeSection === section.id}
              onToggle={() => toggleSection(section.id)}
              title={section.title}
              icon={section.icon}
            >
              {section.component}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;