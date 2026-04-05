"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const Founder = () => {
  const t = useTranslations('Founder');

  return (
    <section className="py-32 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Frame Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 rounded-[48px] blur-2xl opacity-50" />
            
            <div className="relative group rounded-[40px] overflow-hidden border border-white/10 bg-surface-low aspect-square shadow-2xl">
              <Image 
                src="/images/founder.png"
                alt="Luciano - Founder"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              {/* Tech Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel border-white/10 rounded-2xl flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">Lead Codebase</span>
                  <span className="text-white font-display font-bold">L_PDL_ARCHITECT</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/Lucianopdl" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/nortesistemasarg/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/10 blur-2xl"
            />
          </motion.div>

          {/* CONTENT SIDE */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-primary font-mono text-xs tracking-[0.4em] uppercase font-bold"
              >
                <div className="w-12 h-[1px] bg-primary" />
                {t('title')}
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-display font-black tracking-tighter text-white"
              >
                {t('name')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  {t('role')}
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/50 leading-relaxed font-body font-light max-w-2xl"
              >
                {t('bio')}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-8 pt-4"
            >
              <Magnetic>
                <a 
                  href="https://github.com/Lucianopdl"
                  target="_blank"
                  className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-display font-bold text-lg hover:bg-primary transition-colors group"
                >
                  {t('cta')}
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>
              </Magnetic>
              
              <div className="h-12 w-[1px] bg-white/10" />
              
              <div className="flex gap-6 items-center">
                 <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Verified Expert</span>
                 <svg className="w-6 h-6 text-primary fill-current" viewBox="0 0 24 24">
                   <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.707-6.293l6.414-6.414-1.414-1.414-5 5-2.293-2.293-1.414 1.414 3.707 3.707z" />
                 </svg>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
