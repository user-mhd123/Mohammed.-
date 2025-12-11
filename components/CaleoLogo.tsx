import React from 'react';

export const CaleoLogo = ({ className = "w-32 h-10", color="#DFFF00" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 200 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="15" stroke={color} strokeWidth="5" fill="none" strokeDasharray="60 30" transform="rotate(45 30 30)" />
    <path d="M30 15 L30 25" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <text x="60" y="40" fontFamily="sans-serif" fontWeight="700" fontSize="30" fill="black">Caleo</text>
    <text x="145" y="38" fontFamily="sans-serif" fontWeight="400" fontSize="15" fill="black">Pay</text>
  </svg>
);