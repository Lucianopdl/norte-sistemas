import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center group transition-all duration-300 ${className}`}>
      <div className="relative h-12 w-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <img 
          src="/logo.png" 
          alt="Norte Sistemas Logo" 
          className="h-10 w-auto object-contain brightness-110 contrast-125"
        />
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
};
