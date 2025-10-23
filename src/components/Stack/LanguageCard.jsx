import React, { useState } from 'react';
import StackCard from './StackCard';

const LanguageCard = ({ 
  name, 
  level, 
  color, 
  frameworks = [],
  description = "",
  className = "" 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`
          relative
          transition-all duration-300 ease-out
          w-[140px]
          cursor-pointer
          ${className}
        `}
        onClick={handleClick}
      >
        {/* Tarjeta principal del lenguaje */}
        <div className="relative">
          <StackCard
            name={name}
            level={level}
            color={color}
            className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900/98 to-slate-800/98 rounded-xl border border-cyan-400/40 shadow-2xl shadow-cyan-400/30 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="sticky top-0 bg-slate-800/90 backdrop-blur-md border-b border-cyan-400/30 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl">💻</span>
                <div>
                  <h3 className="text-3xl font-bold text-cyan-300">{name} Ecosystem</h3>
                  <p className="text-cyan-400/80 text-sm">Lenguaje de programación</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm font-mono bg-cyan-400/30 text-cyan-200 px-4 py-2 rounded-full border border-cyan-400/50 shadow-lg">
                  {level}
                </div>
                <button
                  onClick={handleCloseModal}
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
              {/* Descripción del lenguaje */}
              {description && (
                <div className="mb-8 p-6 bg-slate-800/50 rounded-xl border border-cyan-400/20">
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                    <span className="text-xl">📝</span> Sobre {name}
                  </h4>
                  <p className="text-cyan-200/90 leading-relaxed">
                    {description}
                  </p>
                </div>
              )}

              {frameworks.length > 0 ? (
                <div className="space-y-8">
                  {frameworks.map((frameworkGroup) => (
                    frameworkGroup.frameworks && frameworkGroup.frameworks.length > 0 && (
                      <div key={frameworkGroup.name} className="animate-fade-in-up">
                        <h4 className="text-xl font-semibold text-cyan-200 mb-6 flex items-center gap-3 border-b border-cyan-600/40 pb-3">
                          <span className="text-lg">⚙️</span> {frameworkGroup.name}
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          {frameworkGroup.frameworks.map((framework) => (
                            <StackCard
                              key={framework.name}
                              name={framework.name}
                              level={framework.level}
                              color={framework.color}
                              size="small"
                              className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
                            />
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔧</div>
                  <h4 className="text-2xl font-bold text-cyan-300 mb-4">
                    Sin frameworks específicos
                  </h4>
                  <p className="text-cyan-400/80 text-lg max-w-md mx-auto">
                    Este lenguaje se utiliza principalmente de forma nativa o con herramientas estándar de la industria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageCard;