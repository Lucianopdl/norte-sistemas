"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const ContactCTA = () => {
  const techStack = ["NEXT.JS", "SUPABASE", "FRAMER MOTION", "TYPESCRIPT", "TAILWIND CSS"];

  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden bg-black">
      
      {/* 🔮 MESH GRADIENT BACKGROUND: Adding Color and Life */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Header Label */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full glass-panel border-white/10"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[0.6rem] font-mono font-bold tracking-[0.4em] text-primary uppercase">Deployment / 03</span>
          </motion.div>

          {/* Title with Gradient Polish */}
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.85]"
            >
              Ready to scale your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-400 animate-gradient">infrastructure?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-foreground/40 text-lg md:text-2xl font-body max-w-2xl mx-auto leading-relaxed"
            >
              Transformamos tu visión en una realidad técnica impecable. <br className="hidden md:block" />
              Hablemos de tu próximo gran proyecto hoy mismo.
            </motion.p>
          </div>

          {/* High-Tech WhatsApp Button Replacement */}
          <div className="pt-8">
            <motion.a
                href="https://wa.me/5493735609095"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col md:flex-row items-center gap-8 p-4 pr-12 rounded-[40px] bg-white/5 backdrop-blur-3xl border border-white/5 hover:border-primary/30 transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
                {/* Brand Icon Container */}
                <div className="relative w-24 h-24 rounded-[32px] bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.2)] shrink-0 z-10 transition-transform group-hover:scale-105">
                    <MessageCircle className="w-12 h-12 text-background" />
                    <div className="absolute inset-0 rounded-[32px] border-2 border-primary/50 animate-[ping_2s_infinite]" />
                </div>
                
                <div className="flex flex-col text-center md:text-left z-10">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-primary font-bold tracking-[0.3em] uppercase">Status: Online</span>
                    </div>
                    <span className="text-4xl md:text-5xl font-display font-black text-white group-hover:text-primary transition-colors flex items-center gap-4">
                        DIRECT_LINE
                        <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all text-primary" />
                    </span>
                    <span className="text-foreground/40 text-sm font-mono tracking-widest mt-1 uppercase">Protocol: Secure_Chat_v2.1</span>
                </div>

                {/* Light Sweep */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </motion.a>
          </div>

          {/* Bottom Tech Banner: Living Labels */}
          <div className="pt-32 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-700">
            {techStack.map((tech, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-[0.65rem] font-mono tracking-[0.5em] font-bold hover:text-primary transition-colors cursor-default select-none"
              >
                {tech}
              </motion.span>
            ))}
          </div>

        </div>
      </div>

      {/* Background Grid Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
