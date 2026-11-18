"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// three.js solo en el cliente
const Mark3D = dynamic(() => import('./Mark3D').then((m) => m.Mark3D), { ssr: false });

/* ─── Floating abstract orbs — smaller, more scattered, better balanced ─── */
const orbs = [
  // Blue — top-left (behind the title area, very subtle)
  {
    style: { width: '38vw', height: '38vw', top: '-10%', left: '-8%' },
    gradient: 'radial-gradient(circle, rgba(34,216,245,0.12) 0%, transparent 70%)',
    animate: { scale: [1, 1.06, 1], x: [0, 12, 0], y: [0, -8, 0] },
    duration: 16,
  },
  // Cian Atlas — right-center, detrás de la A 3D
  {
    style: { width: '28vw', height: '28vw', top: '20%', right: '8%' },
    gradient: 'radial-gradient(circle, rgba(34,216,245,0.20) 0%, rgba(6,114,140,0.10) 55%, transparent 80%)',
    animate: { scale: [1, 1.10, 1], x: [0, -10, 0], y: [0, 14, 0] },
    duration: 12,
  },
  // Blue — bottom-right (subtle depth)
  {
    style: { width: '32vw', height: '32vw', bottom: '-8%', right: '-4%' },
    gradient: 'radial-gradient(circle, rgba(6,114,140,0.18) 0%, transparent 70%)',
    animate: { scale: [1, 1.08, 1], x: [0, 8, 0], y: [0, -10, 0] },
    duration: 20,
  },
  // Cian tenue — center-bottom
  {
    style: { width: '20vw', height: '20vw', bottom: '10%', left: '35%' },
    gradient: 'radial-gradient(circle, rgba(34,216,245,0.06) 0%, transparent 70%)',
    animate: { scale: [1, 1.15, 1], x: [0, -6, 0], y: [0, 8, 0] },
    duration: 25,
  },
];

export const ClassicHero = () => {
  const t = useTranslations('Index');
  const tHero = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Abstract dark background ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, #07090C 0%, #07090C 60%, #06121A 100%)' }}
      >
        {/* Colour orbs */}
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ ...orb.style, background: orb.gradient, filter: 'blur(55px)' }}
            animate={orb.animate}
            transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Two-column grid ── */}
      <div className="relative z-10 w-full container mx-auto px-6 lg:px-16 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text content */}
        <div className="flex flex-col items-start gap-8">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full border font-mono text-[0.68rem] font-bold tracking-[0.22em] uppercase"
            style={{
              borderColor: 'rgba(34,216,245,0.35)',
              color: '#22D8F5',
              background: 'rgba(34,216,245,0.06)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D8F5] animate-pulse" />
            AtlaSys · Software a medida
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] font-black tracking-tighter leading-[0.85]"
          >
            <span
              className="block"
              style={{
                background: 'linear-gradient(125deg, #EEF3F6 0%, #B7C3CC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(238,243,246,0.10))',
              }}
            >
              {t('hero_title_1')}
            </span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(125deg, #22D8F5 0%, #06728C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(34,216,245,0.25))',
              }}
            >
              {t('hero_title_2')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-[480px]"
          >
            {tHero('arrival_subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-[#04161B] transition-all hover:scale-105 hover:brightness-110"
              style={{
                background: '#22D8F5',
                boxShadow: '0 4px 28px rgba(34,216,245,0.28)',
              }}
            >
              Explorar Servicios
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-white/75 border transition-all hover:scale-105 hover:bg-white/5 hover:text-white"
              style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
            >
              Ver Portafolio
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-8 pt-4 border-t border-white/10 w-full"
          >
            {[
              { value: '10+', label: 'Proyectos entregados' },
              { value: '100%', label: 'Código a medida' },
              { value: '24/7', label: 'Soporte activo' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black" style={{ color: '#22D8F5' }}>{stat.value}</span>
                <span className="text-[0.7rem] text-white/40 font-mono tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: la A de AtlaSys en 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center h-[280px] lg:h-[520px]"
        >
          <div
            className="absolute inset-[12%] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(34,216,245,0.22) 0%, rgba(34,216,245,0.06) 45%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <Mark3D color="#22D8F5" className="relative w-full h-full" />
        </motion.div>

      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 h-px w-[45vw] origin-left z-10"
        style={{ background: 'linear-gradient(to right, #22D8F5 0%, #06728C 60%, transparent 100%)' }}
      />
    </section>
  );
};
