'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export const Navbar = () => {
  const t = useTranslations('Navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '#services' },
    { name: t('portfolio'), href: '#portfolio' },
    { name: t('about'), href: '#about' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel border-b border-outline py-4' : 'bg-transparent py-8'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-center relative">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="label-tech text-[11px] font-bold text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <div className="flex items-center gap-8 border-l border-foreground/10 pl-8">
            <a 
              href="https://wa.me/5493735609095"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-6 py-3 rounded-2xl glass-panel border border-outline hover:border-primary/50 transition-all bg-surface-low/30 backdrop-blur-xl"
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-2 border-green-500/50 animate-ping opacity-0 group-hover:opacity-100" />
              </div>
              <span className="label-tech text-[11px] font-black text-primary group-hover:text-foreground transition-colors">
                {t('contact').toUpperCase()}_EN_VIVO
              </span>
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,86,224,0.3)]">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground absolute right-6"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background lg:hidden h-screen overflow-y-auto"
          >
            <div className="flex flex-col h-full p-8">
               <div className="flex justify-end items-center mb-16">
                  <button className="text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                     <X size={32} />
                  </button>
               </div>
               
              <div className="flex flex-col gap-8 items-center text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-5xl font-black text-foreground hover:text-primary tracking-tighter"
                  >
                    {link.name.toUpperCase()}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pb-12 pt-12 border-t border-outline space-y-8">
                <a 
                  href="https://wa.me/5493735609095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-6 py-6 rounded-2xl bg-primary text-white text-lg font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,86,224,0.3)]"
                >
                  <MessageCircle className="w-6 h-6" />
                  {t('contact')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
