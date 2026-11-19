"use client"

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Services } from '@/components/shared/Services';
import { Founder } from '@/components/shared/Founder';
import { ContactCTA } from '@/components/shared/ContactCTA';
import { TechCarousel } from '@/components/shared/TechCarousel';
import { Portfolio } from '@/components/shared/Portfolio';
import { ClassicHero } from '@/components/shared/ClassicHero';
import { FundadoresBanner } from '@/components/shared/FundadoresBanner';
import { DiagnosticForm } from '@/components/shared/DiagnosticForm';

export default function Home() {
  const t = useTranslations('Index');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="relative z-10">
        <ClassicHero />
        <FundadoresBanner />

        <section className="relative flex flex-col justify-center container mx-auto px-6 pt-16 pb-12 bg-background">
          <Founder />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full mt-16 pt-16 border-t border-outline/20"
          >
            <div className="text-center mb-4">
              <span className="text-[0.6rem] font-mono tracking-[0.6em] text-foreground/50 font-bold uppercase flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-foreground/10" />
                STACK TECNOLÓGICO
                <span className="w-12 h-[1px] bg-foreground/10" />
              </span>
            </div>
            <TechCarousel />
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
          id="services"
        >
          <Services />
        </motion.section>

        <Portfolio />
        <section id="diagnostico" className="container mx-auto px-6 py-16 scroll-mt-24">
          <DiagnosticForm source="Web · Inicio" />
        </section>
        <ContactCTA />
      </main>
    </div>
  );
}
