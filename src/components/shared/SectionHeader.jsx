import React from 'react';

const SectionHeader = ({ 
  title, 
  icon, 
  className = "",
  titleClassName = "text-4xl font-extrabold text-cyan-400 text-center mb-8 drop-shadow-lg animate-pulse"
}) => {
  return (
    <h2 className={`${titleClassName} ${className}`}>
      {icon && <span className="mr-3">{icon}</span>}
      {title}
    </h2>
  );
};

export default SectionHeader;
