"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/* ─── Floating abstract orbs — smaller, more scattered, better balanced ─── */
const orbs = [
  // Blue — top-left (behind the title area, very subtle)
  {
    style: { width: '38vw', height: '38vw', top: '-10%', left: '-8%' },
    gradient: 'radial-gradient(circle, rgba(91,155,213,0.14) 0%, transparent 70%)',
    animate: { scale: [1, 1.06, 1], x: [0, 12, 0], y: [0, -8, 0] },
    duration: 16,
  },
  // Orange — right-center (tight, not dominant)
  {
    style: { width: '28vw', height: '28vw', top: '20%', right: '8%' },
    gradient: 'radial-gradient(circle, rgba(245,166,35,0.20) 0%, rgba(224,123,57,0.08) 55%, transparent 80%)',
    animate: { scale: [1, 1.10, 1], x: [0, -10, 0], y: [0, 14, 0] },
    duration: 12,
  },
  // Blue — bottom-right (subtle depth)
  {
    style: { width: '32vw', height: '32vw', bottom: '-8%', right: '-4%' },
    gradient: 'radial-gradient(circle, rgba(28,75,130,0.18) 0%, transparent 70%)',
    animate: { scale: [1, 1.08, 1], x: [0, 8, 0], y: [0, -10, 0] },
    duration: 20,
  },
  // Amber accent — center-bottom (very faint connector)
  {
    style: { width: '20vw', height: '20vw', bottom: '10%', left: '35%' },
    gradient: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)',
    animate: { scale: [1, 1.15, 1], x: [0, -6, 0], y: [0, 8, 0] },
    duration: 25,
  },
];

/* ─── Decorative right-side SVG constellation (pure CSS/SVG, no images) ─── */
const ConstellationRight = () => (
  <svg
    viewBox="0 0 500 500"
    className="w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Connection lines */}
    {[
      [250, 120, 370, 210], [370, 210, 320, 340], [320, 340, 170, 380],
      [170, 380, 80, 280], [80, 280, 250, 120], [250, 120, 320, 340],
      [370, 210, 170, 380], [80, 280, 320, 340], [250, 250, 430, 150],
      [430, 150, 450, 310], [450, 310, 320, 340],
    ].map(([x1, y1, x2, y2], i) => (
      <line
        key={i}
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="url(#lineGrad)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    ))}

    {/* Nodes */}
    {[
      [250, 120, 4, '#F5A623'], [370, 210, 3, '#5B9BD5'], [320, 340, 5, '#F5A623'],
      [170, 380, 3, '#5B9BD5'], [80, 280, 4, '#5B9BD5'], [430, 150, 2.5, '#F5A623'],
      [450, 310, 2, '#5B9BD5'], [250, 250, 2, '#ffffff'],
    ].map(([cx, cy, r, fill], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill={fill as string} opacity="0.9" />
    ))}

    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5B9BD5" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#F5A623" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
);

export const ClassicHero = () => {
  const t = useTranslations('Index');
  const tHero = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Abstract dark background ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, #060810 0%, #08080d 60%, #0c0806 100%)' }}
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
              borderColor: 'rgba(245,166,35,0.35)',
              color: '#F5A623',
              background: 'rgba(245,166,35,0.06)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-pulse" />
            Norte Sistemas · Software a medida
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
                background: 'linear-gradient(125deg, #FFBF47 0%, #E07B39 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(245,166,35,0.25))',
              }}
            >
              {t('hero_title_1')}
            </span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(125deg, #7AB8E8 0%, #1C4B82 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(91,155,213,0.25))',
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
              className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-white transition-all hover:scale-105 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, #F5A623, #C96B1A)',
                boxShadow: '0 4px 28px rgba(245,166,35,0.28)',
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
                <span className="text-2xl font-black" style={{ color: '#F5A623' }}>{stat.value}</span>
                <span className="text-[0.7rem] text-white/40 font-mono tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Decorative constellation + floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center relative h-[480px]"
        >
          {/* Constellation SVG */}
          <div className="absolute inset-0">
            <ConstellationRight />
          </div>

          {/* Tech pill badges floating */}
          {[
            { label: 'React / Next.js', x: '5%', y: '12%', color: '#5B9BD5' },
            { label: 'Node.js', x: '62%', y: '5%', color: '#68A063' },
            { label: 'PostgreSQL', x: '72%', y: '55%', color: '#336791' },
            { label: 'Docker', x: '2%', y: '68%', color: '#2496ED' },
            { label: 'TypeScript', x: '48%', y: '80%', color: '#3178C6' },
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              className="absolute px-3 py-1.5 rounded-full text-[0.65rem] font-mono font-bold tracking-wider border text-white/80"
              style={{
                left: badge.x,
                top: badge.y,
                borderColor: `${badge.color}55`,
                background: `${badge.color}14`,
                boxShadow: `0 0 12px ${badge.color}20`,
              }}
              animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              {badge.label}
            </motion.div>
          ))}

          {/* Center glowing ring */}
          <div
            className="w-48 h-48 rounded-full border opacity-20"
            style={{
              borderColor: '#F5A623',
              boxShadow: '0 0 60px rgba(245,166,35,0.15), inset 0 0 40px rgba(245,166,35,0.05)',
            }}
          />
          <div
            className="absolute w-28 h-28 rounded-full border opacity-15"
            style={{ borderColor: '#5B9BD5', boxShadow: '0 0 40px rgba(91,155,213,0.10)' }}
          />
        </motion.div>

      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 h-px w-[45vw] origin-left z-10"
        style={{ background: 'linear-gradient(to right, #F5A623 0%, #5B9BD5 60%, transparent 100%)' }}
      />
    </section>
  );
};
