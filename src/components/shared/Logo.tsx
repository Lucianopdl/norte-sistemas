import React from 'react';

/** Path del isotipo de AtlaSys (la "A" aguja de norte), viewBox 0 0 100 100. */
export const ATLASYS_MARK_PATH = "M50 4 L92 96 L70 96 L50 58 L30 96 L8 96 Z";

export const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path d={ATLASYS_MARK_PATH} fill="currentColor" />
  </svg>
);

/**
 * Lockup de AtlaSys: isotipo + wordmark.
 * variant "light" = sobre fondo oscuro fijo (hero); "auto" = sigue el tema.
 */
export const Logo = ({ className = "", variant = "auto" }: { className?: string; variant?: "auto" | "light" }) => {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center gap-2.5 group transition-all duration-300 ${className}`} aria-label="AtlaSys">
      <span className="relative flex h-8 w-8 items-center justify-center transition-transform duration-500 group-hover:-translate-y-0.5">
        <LogoMark className={`h-7 w-7 ${isLight ? 'text-[#22D8F5]' : 'text-primary'}`} />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/25 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
      </span>
      <span className={`font-display text-2xl font-semibold leading-none tracking-[-0.02em] ${isLight ? 'text-[#EEF3F6]' : 'text-foreground'}`}>
        AtlaSys
      </span>
    </div>
  );
};
