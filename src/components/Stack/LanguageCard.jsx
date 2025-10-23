import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StackCard, Modal } from '../shared';

const LanguageCard = ({
  name,
  level,
  color,
  frameworks = [],
  description = "",
  className = ""
}) => {
  const { t } = useTranslation();
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`${name} Ecosystem`}
        subtitle={t('stack.languageType')}
        icon="💻"
        level={level}
      >
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
      </Modal>
    </>
  );
};

export default LanguageCard;