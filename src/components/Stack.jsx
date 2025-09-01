import React from 'react';
import { profileData } from '../data/profileData';

const stackSections = [
  { key: 'languages', label: 'Lenguajes de Programación', icon: '💻' },
  { key: 'frameworks', label: 'Frameworks y Librerías', icon: '🧩' },
  { key: 'databases', label: 'Bases de Datos', icon: '🗄️' },
  { key: 'tools', label: 'Herramientas y DevOps', icon: '🛠️' },
];

const Stack = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
      <div className="max-w-4xl w-full bg-slate-800/80 rounded-2xl shadow-2xl p-8 border border-cyan-500 backdrop-blur-md">
        <h2 className="text-4xl font-extrabold text-cyan-400 text-center mb-8 drop-shadow-lg animate-pulse">
          {profileData.stack.title}
        </h2>
        <div className="space-y-10">
          {stackSections.map((section) => (
            <div key={section.key} className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 border-b-2 border-cyan-400 pb-1">
                <span className="text-2xl">{section.icon}</span> {section.label}
              </h3>
              <div className="flex flex-wrap gap-4">
                {profileData.stack[section.key].map((item) => (
                  <div
                    key={item.name}
                    className={`flex flex-col items-center px-5 py-3 rounded-xl shadow-lg bg-gradient-to-r ${item.color} text-white min-w-[140px] transition-transform hover:scale-105 hover:shadow-cyan-400/50 animate-fade-in-up`}
                  >
                    <span className="text-lg font-semibold mb-1 drop-shadow">{item.name}</span>
                    <span className="text-xs font-mono bg-slate-900/70 px-3 py-1 rounded-full mt-1 border border-cyan-400 animate-pulse uppercase tracking-wide">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
