import React from 'react';

export const KrishnaLogo = ({ className = "w-32 h-32", showGrid = false }: { className?: string, showGrid?: boolean }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Grid Lines (Construction) */}
    {showGrid && (
      <g stroke="#ddd" strokeWidth="1" fill="none" strokeDasharray="4 4">
        <circle cx="100" cy="60" r="40" />
        <circle cx="100" cy="140" r="40" />
        <circle cx="60" cy="100" r="30" />
        <line x1="50" y1="20" x2="150" y2="20" />
        <line x1="50" y1="180" x2="150" y2="180" />
        <line x1="100" y1="20" x2="100" y2="180" />
      </g>
    )}

    {/* The Logo Shape (Stylized K) */}
    <g transform="translate(50, 50) scale(1)">
      {/* Left Curve */}
      <path d="M 20 20 Q 0 50 20 80 L 40 80 Q 20 50 40 20 Z" fill="#0A9748" />
      
      {/* Top Right Curve */}
      <path d="M 50 50 Q 80 20 100 20 L 100 40 Q 80 40 60 60 Z" fill="#0A9748" />
      
      {/* Bottom Right Curve */}
      <path d="M 60 60 Q 80 80 100 80 L 100 100 Q 70 100 50 70 Z" fill="#0A9748" />
      
      {/* Central Dot */}
      <circle cx="45" cy="50" r="5" fill="#8AC640" />
    </g>
  </svg>
);