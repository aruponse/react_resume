import React from 'react';

const StackCard = ({ 
  name, 
  level, 
  color, 
  className = "",
  size = "default" 
}) => {
  // Configuración de tamaños
  const sizeClasses = {
    small: {
      container: "min-w-[120px] px-4 py-2",
      name: "text-sm font-semibold",
      level: "text-xs"
    },
    default: {
      container: "min-w-[140px] px-5 py-3",
      name: "text-lg font-semibold",
      level: "text-xs"
    },
    large: {
      container: "min-w-[160px] px-6 py-4",
      name: "text-xl font-semibold",
      level: "text-sm"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      className={`
        flex flex-col items-center 
        rounded-xl shadow-lg 
        bg-gradient-to-r ${color} 
        text-white 
        ${currentSize.container}
        transition-transform 
        hover:scale-105 
        hover:shadow-cyan-400/50 
        animate-fade-in-up
        ${className}
      `}
    >
      <span className={`${currentSize.name} mb-1 drop-shadow`}>
        {name}
      </span>
      <span className={`
        ${currentSize.level} 
        font-mono 
        bg-slate-900/70 
        px-3 py-1 
        rounded-full 
        mt-1 
        border border-cyan-400 
        animate-pulse 
        uppercase 
        tracking-wide
      `}>
        {level}
      </span>
    </div>
  );
};

export default StackCard;
