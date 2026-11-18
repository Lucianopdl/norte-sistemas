"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const Founder = ({ className = "" }: { className?: string }) => {
  const t = useTranslations('Founder');

  return (
    <div className={`grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center ${className}`}>
      
      {/* IMAGE SIDE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="md:col-span-5 relative w-full aspect-square max-w-[280px] md:max-w-none mx-auto"
      >
        {/* Frame Decoration */}
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary-variant/20 rounded-[48px] blur-2xl opacity-50" />
        
        <div className="relative group rounded-[40px] overflow-hidden border border-outline bg-surface-low aspect-square shadow-2xl">
          <Image 
            src="/images/founder.png"
            alt="Luciano - Fundador"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
          
          {/* Tech Badge */}
          <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel border-outline rounded-2xl flex justify-between items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">Arquitecto Principal</span>
              <span className="text-foreground font-display font-bold">L_PDL_ARCHITECT</span>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/Lucianopdl" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-primary hover:text-on-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/atlasysoficial/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-foreground/5 hover:bg-primary hover:text-on-primary transition-colors">
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
      <div className="md:col-span-7 space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
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
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-foreground leading-tight"
          >
            {t('name')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-variant">
              {t('role')}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-foreground/70 leading-relaxed font-body font-light max-w-xl"
          >
            {t('bio')}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-6 md:gap-8 pt-2"
        >
          <Magnetic>
            <a 
              href="https://wa.me/5493735609095"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-on-primary hover:bg-primary-variant hover:shadow-md transition-all duration-300 px-6 py-3 rounded-full font-display font-bold text-sm group active:scale-[0.98]"
            >
              {t('cta')}
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
          </Magnetic>
          
          <div className="hidden sm:block h-10 w-[1px] bg-foreground/10" />
          
          <div className="flex gap-4 items-center">
             <span className="text-[9px] font-mono text-foreground/50 tracking-widest uppercase">Experto Verificado</span>
             <svg className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
               <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.707-6.293l6.414-6.414-1.414-1.414-5 5-2.293-2.293-1.414 1.414 3.707 3.707z" />
             </svg>
          </div>
        </motion.div>
      </div>

    </div>
  );
};
