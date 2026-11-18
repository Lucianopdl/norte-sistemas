'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial theme detection
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

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
        isScrolled ? 'bg-surface/90 backdrop-blur-md border-b border-outline elevation-1 py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Brand Logo Link */}
        <Link href="/" className="z-50">
          <Logo variant={isScrolled ? 'auto' : 'light'} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`label-tech text-[11px] font-bold transition-colors relative group ${isScrolled ? 'text-foreground/70 hover:text-primary' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}

          {/* Theme Toggle Switcher (Desktop) */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all border flex items-center justify-center active:scale-95 cursor-pointer ${isScrolled ? 'hover:bg-foreground/5 text-foreground/75 hover:text-foreground border-outline/10' : 'hover:bg-white/10 text-white/80 hover:text-white border-white/15'}`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-[18px] h-[18px] text-yellow-500 fill-yellow-500/20" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-primary fill-primary/20" />
            )}
          </button>
          
          <div className="flex items-center gap-8 border-l border-foreground/10 pl-8">
            <a 
              href="https://wa.me/5493735609095"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container hover:shadow-md hover:brightness-95 transition-all duration-300 border border-outline"
            >
              <div className="relative shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              <span className="font-mono text-[11px] font-black tracking-wider text-primary">
                {t('contact').toUpperCase()}_EN_VIVO
              </span>
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                <MessageCircle className="w-3.5 h-3.5 text-on-primary" />
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Actions: Theme Switcher & Toggle */}
        <div className="lg:hidden flex items-center gap-2 absolute right-6 z-50">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full flex items-center justify-center border active:scale-95 cursor-pointer ${isScrolled || isMobileMenuOpen ? 'hover:bg-foreground/5 text-foreground/75 border-outline/10' : 'hover:bg-white/10 text-white/80 border-white/15'}`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-[18px] h-[18px] text-yellow-500 fill-yellow-500/20" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-primary fill-primary/20" />
            )}
          </button>
          <button
            className={isScrolled || isMobileMenuOpen ? 'p-2 text-foreground' : 'p-2 text-white'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
               <div className="flex justify-between items-center mb-16">
                  <Logo />
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
                  className="w-full flex items-center justify-center gap-6 py-6 rounded-2xl bg-primary text-on-primary text-lg font-black uppercase tracking-widest shadow-[0_0_30px_rgba(34,216,245,0.3)]"
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
