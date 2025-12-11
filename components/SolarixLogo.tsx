import React from 'react';

export const SolarixLogo = ({ className = "w-10 h-10", color = "fill-current" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <g className={color}>
      {/* Abstract Sun/Flower shape based on video */}
      <path d="M50 0 L60 30 L90 20 L70 50 L90 80 L60 70 L50 100 L40 70 L10 80 L30 50 L10 20 L40 30 Z" />
      <circle cx="50" cy="50" r="10" className="fill-white" />
    </g>
  </svg>
);