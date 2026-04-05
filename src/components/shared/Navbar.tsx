'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
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
    { name: t('about'), href: '#about' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="label-tech text-[11px] font-bold text-[#b9cacb] hover:text-[#00f0ff] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <div className="flex items-center gap-8 border-l border-white/10 pl-8">
            <Link 
              href={pathname} 
              locale={locale === 'es' ? 'en' : 'es'}
              className="label-tech text-[11px] font-bold text-[#b9cacb] hover:text-[#00f0ff] transition-colors"
            >
              <span className={locale === 'en' ? 'text-[#00f0ff]' : ''}>EN</span>
              <span className="mx-2 opacity-20">/</span>
              <span className={locale === 'es' ? 'text-[#00f0ff]' : ''}>ES</span>
            </Link>

            <a 
              href="https://wa.me/5493735609095"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-6 py-3 rounded-2xl glass-panel border border-white/5 hover:border-primary/50 transition-all bg-surface-low/30 backdrop-blur-xl"
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="absolute inset-0 rounded-full border-2 border-green-400/50 animate-ping opacity-0 group-hover:opacity-100" />
              </div>
              <span className="label-tech text-[11px] font-black text-[#00f0ff] group-hover:text-white transition-colors">
                {t('contact').toUpperCase()}_LIVE
              </span>
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <MessageCircle className="w-4 h-4 text-background" />
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
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
            className="fixed inset-0 z-40 bg-[#131313] lg:hidden h-screen overflow-y-auto"
          >
            <div className="flex flex-col h-full p-8">
               <div className="flex justify-between items-center mb-16">
                  <Logo />
                  <button className="text-white" onClick={() => setIsMobileMenuOpen(false)}>
                     <X size={32} />
                  </button>
               </div>
               
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-5xl font-black text-white hover:text-[#00f0ff] tracking-tighter"
                  >
                    {link.name.toUpperCase()}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pb-12 pt-12 border-t border-white/5 space-y-8">
                <Link 
                    href={pathname} 
                    locale={locale === 'es' ? 'en' : 'es'}
                    className="block label-tech text-xl font-black text-[#5e5f5f]"
                  >
                    {locale === 'es' ? 'ENGLISH' : 'ESPAÑOL'}
                </Link>
                <a 
                  href="https://wa.me/5493735609095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-6 py-6 rounded-2xl bg-primary text-background text-lg font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,240,255,0.3)]"
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
