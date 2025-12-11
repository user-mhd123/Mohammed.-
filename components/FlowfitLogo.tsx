import React from 'react';

export const FlowfitLogo = ({ className = "w-32 h-10", color="#7CFC00" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 200 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="skewX(-10)">
      <path d="M10 10 L50 10 L45 25 L25 25 L20 40 L40 40 L35 55 L15 55 L10 70 L-5 70 L10 10 Z" fill={color} />
      <path d="M55 10 L90 10 L85 25 L65 25 L65 30 L55 10 Z" fill={color} />
    </g>
    <text x="70" y="45" fontFamily="sans-serif" fontWeight="900" fontSize="35" fill="white" letterSpacing="1">FLOWFIT</text>
  </svg>
);