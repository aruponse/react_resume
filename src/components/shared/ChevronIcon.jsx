import React from 'react';

const ChevronIcon = ({ 
  isOpen, 
  className = "w-6 h-6 text-cyan-400" 
}) => {
  return (
    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
};

export default ChevronIcon;
