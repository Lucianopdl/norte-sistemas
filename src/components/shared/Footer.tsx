"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const officialLogos = {
    gmail: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-1.356 1.543-2.138 2.618-1.309l9.382 7.036 9.382-7.036c1.075-.829 2.618-.047 2.618 1.309z"/>
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 2.16c3.203 0 3.584.012 4.85.07 3.226.147 4.717 1.671 4.864 4.86.058 1.265.069 1.646.069 4.849 0 3.203-.012 3.584-.07 4.85-.147 3.222-1.67 4.71-4.861 4.857-1.265.058-1.646.07-4.85.07s-3.584-.012-4.849-.07c-3.226-.147-4.718-1.671-4.865-4.86-.058-1.265-.07-1.646-.07-4.849 0-3.203.012-3.584.07-4.85.147-3.227 1.672-4.72 4.865-4.864 1.262-.058 1.644-.069 4.846-.069zm0 3.674c-3.322 0-6.022 2.7-6.022 6.022 0 3.321 2.6 6.022 6.022 6.022 3.32 0 6.022-2.701 6.022-6.022 0-3.322-2.702-6.022-6.022-6.022zm0 9.883c-2.133 0-3.861-1.728-3.861-3.861 0-2.133 1.728-3.86 3.861-3.86 2.133 0 3.86 1.727 3.86 3.86 0 2.133-1.727 3.861-3.86 3.861zm6.262-10.748c0 .767-.622 1.39-1.39 1.39-.767 0-1.389-.623-1.389-1.39 0-.768.622-1.39 1.39-1.39.768 0 1.39.622 1.39 1.39z"/>
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  };

  const socialLinks = [
    { icon: officialLogos.gmail, href: "mailto:nortesistemas@gmail.com", color: "text-[#EA4335]", borderColor: "group-hover:border-[#EA4335]/50" },
    { icon: officialLogos.whatsapp, href: "https://wa.me/5493735609095", color: "text-[#25D366]", borderColor: "group-hover:border-[#25D366]/50" },
    { icon: officialLogos.github, href: "https://github.com/Lucianopdl", color: "text-white", borderColor: "group-hover:border-white/50" },
    { icon: officialLogos.instagram, href: "https://www.instagram.com/nortesistemasarg/", color: "text-[#E4405F]", borderColor: "group-hover:border-[#E4405F]/50" }
  ];

  return (
    <footer className="relative bg-background border-t border-white/5 pt-32 pb-16 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 col-span-1 lg:col-span-2"
          >
            <Logo />
            
            <p className="text-foreground/40 text-lg leading-relaxed max-w-sm font-body">
              Software Agency de nueva generación. Creamos soluciones digitales que impulsan el crecimiento de empresas y startups con ingeniería de grado militar.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, idx) => (
                <Magnetic key={idx}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground/40 transition-all duration-300 ${social.borderColor} hover:bg-white/10 shadow-lg`}
                  >
                    <span className={social.color}>
                      {social.icon}
                    </span>
                  </a>
                </Magnetic>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h4 className="font-mono text-primary text-[0.65rem] font-bold tracking-[0.4em] uppercase">Navigation</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: t('nav.home'), href: '/' },
                { label: t('nav.services'), href: '#services' },
                { label: t('nav.about'), href: '#about' }
              ].map((link, idx) => (
                <Magnetic key={link.label}>
                  <motion.a 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    href={link.href} 
                    className="text-foreground/40 hover:text-white transition-colors flex items-center gap-2 group font-mono text-sm underline-offset-4 hover:underline"
                  >
                    {link.label} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8 text-right hidden lg:block"
          >
            <h4 className="font-mono text-primary text-[0.65rem] font-bold tracking-[0.4em] uppercase">Contact</h4>
            <div className="space-y-6">
              <div>
                <p className="text-white/20 text-[0.6rem] uppercase tracking-widest mb-1">Email</p>
                <a 
                  href="mailto:nortesistemas@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-body hover:text-primary transition-colors italic group flex items-center justify-end gap-2"
                >
                  nortesistemas@gmail.com
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </a>
              </div>
              <div>
                <p className="text-white/20 text-[0.6rem] uppercase tracking-widest mb-1">Local Node</p>
                <p className="text-white font-body italic">Chaco- Argentina</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-foreground/20 text-[0.65rem] font-mono tracking-widest space-x-6">
            <span>© 2026 NORTE_SISTEMAS // ALL_RIGHTS_RESERVED</span>
            <span className="hidden md:inline cursor-pointer hover:text-primary transition-colors">PRIVACY_POLICY</span>
            <span className="hidden md:inline cursor-pointer hover:text-primary transition-colors">TERMS_OF_SERVICE</span>
          </div>

          <Magnetic>
             <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 text-primary font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase group"
            >
              Back to top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </footer>
  );
};
