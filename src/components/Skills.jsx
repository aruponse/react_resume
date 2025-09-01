import React, { useState } from 'react';
import { profileData } from '../data/profileData';

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-20 px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in">
      <div className="container mx-auto max-w-4xl bg-slate-800/80 rounded-2xl shadow-2xl p-8 border border-cyan-500 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 animate-pulse">
          Habilidades Profesionales
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4 relative">
          {profileData.skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${skill.color} text-white text-sm font-medium px-5 py-2 rounded-full shadow-md transition-all duration-300 cursor-pointer animate-fade-in-up hover:scale-105 hover:ring-2 hover:ring-cyan-300 hover:ring-offset-2 hover:z-10 relative`}
              style={{ animationDelay: `${index * 40}ms` }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="inline-block align-middle">{skill.name}</span>
              {hovered === index && (
                <div className="absolute left-1/2 top-full mt-2 w-max min-w-[220px] max-w-xs -translate-x-1/2 bg-slate-900 text-slate-100 text-xs rounded-lg shadow-lg px-4 py-2 z-50 border border-cyan-400 animate-fade-in-up pointer-events-none">
                  {skill.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
      `}</style>
    </section>
  );
};

export default Skills;

