import React from 'react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  icon, 
  level, 
  children, 
  className = "" 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`bg-gradient-to-br from-slate-900/98 to-slate-800/98 rounded-xl border border-cyan-400/40 shadow-2xl shadow-cyan-400/30 max-w-4xl w-full max-h-[80vh] overflow-y-auto ${className}`}>
        {/* Header del modal */}
        <div className="sticky top-0 bg-slate-800/90 backdrop-blur-md border-b border-cyan-400/30 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{icon}</span>
            <div>
              <h3 className="text-3xl font-bold text-cyan-300">{title}</h3>
              {subtitle && <p className="text-cyan-400/80 text-sm">{subtitle}</p>}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {level && (
              <div className="text-sm font-mono bg-cyan-400/30 text-cyan-200 px-4 py-2 rounded-full border border-cyan-400/50 shadow-lg">
                {level}
              </div>
            )}
            <button
              onClick={onClose}
              className="text-cyan-400 hover:text-cyan-300 transition-colors p-2 hover:bg-cyan-400/10 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenido del modal */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
