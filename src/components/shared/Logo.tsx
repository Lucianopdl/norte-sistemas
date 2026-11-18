import React from 'react';

/** Isotipo de Norte Sistemas: una N cuyo trazo derecho termina en flecha al norte. viewBox 0 0 100 100. */
export const NORTE_MARK_PATH = "M6 96 L6 34 L24 34 L70 80 L70 28 L62 28 L79 2 L96 28 L88 28 L88 96 L70 96 L24 50 L24 96 Z";

export const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <path d={NORTE_MARK_PATH} fill="currentColor" />
  </svg>
);

/**
 * Lockup de Norte Sistemas: isotipo + wordmark "norte sistemas" (minúscula, dos pesos).
 * variant "light" = sobre fondo noche fijo (hero); "auto" = sigue el tema.
 */
export const Logo = ({ className = "", variant = "auto" }: { className?: string; variant?: "auto" | "light" }) => {
  const isLight = variant === "light";
  return (
    <div className={`flex shrink-0 items-center gap-2.5 pr-6 group transition-all duration-300 ${className}`} aria-label="Norte Sistemas">
      <span className="relative flex h-8 w-8 items-center justify-center transition-transform duration-500 group-hover:-translate-y-0.5">
        <LogoMark className={`h-7 w-7 ${isLight ? 'text-[#4D63FF]' : 'text-primary'}`} />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/25 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
      </span>
      <span className="font-display text-[1.3rem] leading-none tracking-[-0.03em] whitespace-nowrap">
        <span className={`font-bold ${isLight ? 'text-[#EEF1F8]' : 'text-foreground'}`}>norte</span>{' '}
        <span className={`font-normal ${isLight ? 'text-[#95A0B8]' : 'text-foreground/60'}`}>sistemas</span>
      </span>
    </div>
  );
};
