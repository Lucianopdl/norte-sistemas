"use client"

import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { Services } from '@/components/shared/Services';
import { About } from '@/components/shared/About';
import { Founder } from '@/components/shared/Founder';
import { ContactCTA } from '@/components/shared/ContactCTA';
import { TechCarousel } from '@/components/shared/TechCarousel';
import CyberneticGridShader from '@/components/ui/cybernetic-grid-shader';
import { SplineScene } from '@/components/ui/spline-scene';

export default function Home() {
  const t = useTranslations('Index');
  
  // Innovación: Scroll Progress Bar y Efectos de Inercia
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      {/* 🚀 INNOVACIÓN: BARRA DE PROGRESO LÁSER SUPERIOR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-500 to-purple-500 z-[100] origin-left shadow-[0_0_15px_rgba(0,240,255,0.5)]"
        style={{ scaleX }}
      />

      {/* 🔮 BACKGROUND: CYBERNETIC SHADER + HYPER-PARALLAX VIDEO */}
      <CyberneticGridShader />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute inset-0"
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10 contrast-125 saturate-0 scale-110"
          >
            <source src="https://player.vimeo.com/external/370337605.sd.mp4?s=55d55b05a3f6285491295503410549cf05303960&profile_id=164" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      <main className="relative z-10">
        
        {/* HERO SECTION: THE MASTER VIEW (MINIMALIST) */}
        <section className="relative min-h-screen flex flex-col items-center container mx-auto px-6 overflow-hidden pt-32 pb-12">
          
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 px-5 py-2 rounded-full glass-panel border-white/5 mb-8"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="label-tech text-primary/80 font-bold uppercase">NORTE_SISTEMA // STABLE_BUILD.24</span>
            </motion.div>

            {/* Main Title (Protagonist) */}
            <div className="flex flex-col items-center text-center mb-0 cursor-default">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-tight max-w-7xl"
              >
                <span className="block text-foreground/90">
                  {t('hero_title_1')}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#9db2ff] to-blue-400">
                  {t('hero_title_2')}
                </span>
              </motion.h1>
            </div>
          </div>

          {/* TECH CAROUSEL ANCHORED AT BOTTOM (FLOW BASED) */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="w-screen mt-auto pt-16"
          >
            <div className="text-center mb-4">
              <span className="text-[0.6rem] font-mono tracking-[0.6em] text-primary font-bold uppercase flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-primary/20" />
                Industry standard STACK
                <span className="w-12 h-[1px] bg-primary/20" />
              </span>
            </div>
            <TechCarousel />
          </motion.div>
        </section>

        {/* MODULAR SECTIONS WITH SCROLL REVEAL */}
        <motion.section 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          id="services"
        >
          <Services />
        </motion.section>
        
        <About />
        <Founder />
        <ContactCTA />
        <SplineScene />
        
      </main>
    </div>
  );
}
