import React from 'react';

export const SennaLogo = ({ className = "w-32 h-10", iconOnly = false }: { className?: string, iconOnly?: boolean }) => (
  <svg viewBox="0 0 200 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 5)">
        <circle cx="25" cy="25" r="23" stroke="#4DFF00" strokeWidth="3" fill="none" />
        <path d="M10 25 C 10 25, 18 10, 25 25 C 32 40, 40 25, 40 25" stroke="#4DFF00" strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
    
    {!iconOnly && (
      <g fill="#4DFF00" transform="translate(60, 10)">
        <path d="M0 10 L30 10 L30 18 L8 18 L8 26 L30 26 L30 40 L0 40 L0 32 L22 32 L22 24 L0 24 Z" />
        <path d="M35 10 L65 10 L65 18 L43 18 L43 21 L60 21 L60 29 L43 29 L43 32 L65 32 L65 40 L35 40 Z" />
        <path d="M70 10 L78 10 L92 30 L92 10 L100 10 L100 40 L92 40 L78 20 L78 40 L70 40 Z" />
        <path d="M105 10 L113 10 L127 30 L127 10 L135 10 L135 40 L127 40 L113 20 L113 40 L105 40 Z" />
        <path d="M140 40 L155 10 L170 40 L162 40 L158 32 L152 32 L148 40 Z M155 18 L157 26 L153 26 Z" />
      </g>
    )}
  </svg>
);