"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Zap, Globe, Cpu, Database, Activity } from 'lucide-react';

const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      const suffix = value.replace(/[0-9.]/g, '');
      
      const controls = animate(0, numericValue, {
        duration,
        onUpdate(value) {
          setDisplayValue(value.toFixed(value % 1 === 0 ? 0 : 1) + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={nodeRef}>{displayValue}</span>;
};

export const About = () => {
  const t = useTranslations('About');

  const stats = [
    { label: "UPTIME", value: "99.9%", icon: <Zap className="w-4 h-4 text-primary" /> },
    { label: "REPOS", value: "150+", icon: <Database className="w-4 h-4 text-cyan-400" /> },
    { label: "SYSTEMS", value: "24/7", icon: <Globe className="w-4 h-4 text-blue-400" /> }
  ];

  return (
    <section id="about" className="py-48 relative px-6 overflow-hidden bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: THE INTERACTIVE TECH CORE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden border border-white/10 bg-black shadow-[0_0_80px_rgba(0,240,255,0.05)] cursor-none"
          >
            {/* Visual 1: The Core Energy Video */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 saturate-150 scale-105 group-hover:scale-100 transition-transform duration-1000"
            >
              <source src="https://player.vimeo.com/external/459389133.sd.mp4?s=d0092147395e55e090be4badc476722ea541e240&profile_id=164" type="video/mp4" />
            </video>

            {/* Visual 2: Scanning Overlay Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,240,255,0.1)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
            
            {/* Visual 3: Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />

            <div className="absolute inset-0 flex flex-col justify-between p-12 lg:p-16">
              {/* TOP UI */}
              <div className="flex justify-between items-start z-20">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-2xl border border-primary/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                >
                  <Activity className="text-primary w-8 h-8" />
                </motion.div>
                
                <div className="text-right space-y-1">
                  <div className="text-[0.65rem] font-mono text-primary tracking-[0.3em] uppercase font-bold">Node Area 02</div>
                  <div className="flex items-center gap-2 justify-end">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ring-4 ring-green-500/20" />
                    <span className="text-xs font-mono text-green-400 font-bold tracking-tight">ACTIVE_DEVELOPMENT</span>
                  </div>
                </div>
              </div>

              {/* CENTER: NORTE ILLUMINATION ON HOVER */}
              <div className="flex-1 flex items-center justify-center pointer-events-none z-10">
                 <div className="text-center">
                    <motion.div 
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      className="text-white/10 group-hover:text-primary font-mono text-[9rem] font-black select-none leading-none opacity-20 group-hover:opacity-100 group-hover:drop-shadow-[0_0_50px_rgba(0,240,255,0.8)] transition-all duration-700 tracking-tighter"
                    >
                      NORTE
                    </motion.div>
                    <motion.div 
                      className="text-[0.6rem] font-mono text-white/20 group-hover:text-primary/60 tracking-[1em] uppercase font-bold transition-all duration-700"
                    >
                      Engineering Protocol
                    </motion.div>
                 </div>
              </div>

              {/* BOTTOM UI: Interactive Stats */}
              <div className="grid grid-cols-3 gap-6 z-20">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5, borderColor: "rgba(0,240,255,0.4)" }}
                    className="p-6 rounded-3xl bg-black/60 backdrop-blur-3xl border border-white/10 group/stat transition-all duration-300"
                  >
                    <div className="mb-4">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-display font-black text-white mb-1 group-hover/stat:text-primary transition-colors">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-[0.6rem] font-mono text-white/40 tracking-[0.2em] font-bold uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Custom Mouse Follower inside the panel */}
            <div className="absolute inset-0 pointer-events-none group-hover:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,240,255,0.1)_0%,transparent_50%)] transition-opacity" 
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
            />
          </motion.div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-16">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-primary font-mono text-xs tracking-[0.4em] uppercase font-bold"
              >
                <div className="w-12 h-[1px] bg-primary" />
                Origins / 02
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter"
              >
                Building the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">core of startups.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/40 leading-relaxed max-w-xl font-body font-light"
              >
                En Norte Sistemas, no solo escribimos código; diseñamos el motor del éxito de nuestros clientes. Fusionamos precisión técnica con visión de negocio.
              </motion.p>
            </div>

            <div className="space-y-8 text-foreground/60">
              {[
                { label: "High Performance Architecture", desc: "Sistemas optimizados para carga masiva.", icon: <Cpu className="w-6 h-6 text-primary" /> },
                { label: "Scalable Operations", desc: "Infraestructura que crece con tu negocio.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
                { label: "Direct Communication", desc: "Sin intermediarios, de ingeniero a cliente.", icon: <Zap className="w-6 h-6 text-primary" /> }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex gap-8 group cursor-default"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-primary">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">{item.label}</h4>
                    <p className="font-body text-base group-hover:text-white/60 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
