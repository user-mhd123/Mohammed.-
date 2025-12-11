import React from 'react';

export const ChargeLogo = ({ className = "w-32 h-10", color="#CCFF00" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 200 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M40 10 C 20 10, 10 25, 10 30 C 10 45, 25 50, 35 50 L 35 35 L 45 35 L 35 50 L 50 30 L 40 30 L 45 15 L 40 10" fill={color} />
    <text x="60" y="40" fontFamily="sans-serif" fontWeight="800" fontSize="35" fill="black" letterSpacing="-1">Charge</text>
    <circle cx="185" cy="15" r="2" fill="black" />
  </svg>
);