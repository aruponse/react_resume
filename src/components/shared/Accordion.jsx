import React from 'react';
import ChevronIcon from './ChevronIcon';

const Accordion = ({ 
  isOpen, 
  onToggle, 
  title, 
  icon, 
  children, 
  className = "",
  headerClassName = "",
  contentClassName = ""
}) => {
  return (
    <div className={`border border-cyan-500/30 rounded-xl overflow-hidden ${className}`}>
      {/* Header del acordeón */}
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 flex items-center justify-between group ${headerClassName}`}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
            {title}
          </h3>
        </div>
        <ChevronIcon isOpen={isOpen} />
      </button>

      {/* Contenido del acordeón */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`p-6 bg-slate-800/50 ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
