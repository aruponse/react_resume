import React from 'react';

const ExperienceCard = ({ role, company, period, description }) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-4 group">
      <div className="absolute left-0 top-4 h-full border-l-2 border-slate-700"></div>
      <div className="absolute left-[-9px] top-4 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-900 group-hover:bg-cyan-400 transition-colors duration-300"></div>
      <p className="text-sm font-mono text-cyan-400 mb-1">{period}</p>
      <h3 className="text-xl font-bold text-white">{role}</h3>
      <p className="text-md text-slate-400 mb-3">{company}</p>
      <p className="text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;

