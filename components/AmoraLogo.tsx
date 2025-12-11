import React from 'react';

export const AmoraLogo = ({ className = "w-32 h-10", color="#D8FF28" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 200 80" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 10)">
        <path d="M30 0 L0 50 L10 50 L30 15 L50 50 L60 50 L30 0 Z" fill={color} />
        <path d="M20 35 L40 35" stroke={color} strokeWidth="2" />
        <path d="M25 25 L35 25" stroke={color} strokeWidth="2" />
    </g>
    <text x="0" y="75" fontFamily="sans-serif" fontWeight="700" fontSize="20" fill={color} letterSpacing="4">AMORA</text>
  </svg>
);