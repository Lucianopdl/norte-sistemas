import React from 'react';
import Image from 'next/image';

export const Logo = ({ className = "", variant = "auto" }: { className?: string; variant?: "auto" | "light" }) => {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center gap-3 group transition-all duration-300 ${className}`}>
      <div className="relative h-10 w-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <Image
          src="/images/logoatlas.png"
          alt="AtlaSys Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain rounded-xl"
        />
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
      <div className="flex flex-col font-display ml-1">
        <span className={`text-xl font-black tracking-wider leading-none ${isLight ? 'text-white' : 'text-foreground'}`}>
          ATLA
        </span>
        <span className={`label-tech text-[8px] font-black tracking-[0.5em] uppercase ${isLight ? 'text-white/60' : 'text-[#5e5f5f]'}`}>
          SYS
        </span>
      </div>
    </div>
  );
};
