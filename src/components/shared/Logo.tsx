import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 group transition-all duration-300 ${className}`}>
      <div className="relative h-10 w-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <div className="w-full h-full rounded-xl bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center font-display font-black text-black">
          N
        </div>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      <div className="flex flex-col font-display ml-1">
        <span className="text-xl font-black text-white tracking-wider leading-none">
          NORTE
        </span>
        <span className="label-tech text-[8px] font-black text-[#5e5f5f] tracking-[0.4em] uppercase">
          SISTEMAS
        </span>
      </div>
    </div>
  );
};
