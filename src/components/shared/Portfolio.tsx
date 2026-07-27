'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Layout } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AutoMotionMockup, QuoteMasterMockup } from './DashboardMockups';

export const ProjectCard = ({ project, index }: any) => {
  const CtaLink = project.isExternal ? 'a' : Link;
  const ctaLinkProps = project.isExternal
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : { href: project.link };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-surface border border-outline rounded-[28px] overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300 max-w-xl mx-auto"
    >
      {/* Image Container - Más compacto */}
      <div className="relative aspect-[16/8] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
        {project.mockup ? (
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
            {project.mockup}
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}

        {/* Badges - Más pequeños */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <div className="px-2.5 py-1 rounded-full bg-primary-container text-primary flex items-center gap-1.5 border border-outline/10 shadow-sm">
            <Layout className="w-2.5 h-2.5 text-primary" />
            <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider">{project.badge || 'Web'}</span>
          </div>
        </div>
      </div>

      {/* Content - Padding reducido */}
      <div className="p-6 md:p-8 relative z-20">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-display font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <CtaLink
            {...ctaLinkProps}
            className="p-2 rounded-full bg-surface-low hover:bg-surface-high border border-outline text-on-surface/70 hover:text-on-surface transition-all duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </CtaLink>
        </div>

        <p className="text-foreground/60 text-sm leading-relaxed mb-6 font-body line-clamp-2">
          {project.description}
        </p>

        {/* Features Grid - Más denso */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {project.features.map((feature: string, i: number) => (
            <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-low border border-outline text-[10px] text-foreground/80 font-mono font-semibold tracking-tight">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button - Más bajo */}
        <CtaLink
          {...ctaLinkProps}
          className="inline-flex items-center justify-center w-full py-3.5 rounded-full bg-primary text-white font-bold text-xs tracking-wider uppercase transition-all hover:shadow-md hover:brightness-95 active:scale-[0.98]"
        >
          {project.cta}
        </CtaLink>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none group-hover:bg-primary/15 transition-all duration-500" />
    </motion.div>
  );
};

export const Portfolio = () => {
  const t = useTranslations('Portfolio');

  const projects = [
    {
      id: 'sahara',
      title: t('projects.sahara.title'),
      description: t('projects.sahara.description'),
      features: t.raw('projects.sahara.features'),
      cta: t('projects.sahara.cta'),
      image: '/images/projects/sahara.png',
      link: 'https://landing-page-sahara.vercel.app/',
      isExternal: true,
      badge: 'SaaS'
    },
    {
      id: 'ganadero',
      title: t('projects.ganadero.title'),
      description: t('projects.ganadero.description'),
      features: t.raw('projects.ganadero.features'),
      cta: t('projects.ganadero.cta'),
      image: '/images/projects/ganadero-sync.png',
      link: '/productos/ganadero-sync',
      isExternal: false,
      badge: 'Agro SaaS'
    },
    {
      id: 'automotion',
      title: t('projects.automotion.title'),
      description: t('projects.automotion.description'),
      features: t.raw('projects.automotion.features'),
      cta: t('projects.automotion.cta'),
      image: '/images/projects/automotion.png',
      mockup: <AutoMotionMockup className="w-full h-full" />,
      link: '/productos/automotion',
      isExternal: false,
      badge: 'E-commerce'
    },
    {
      id: 'quotemaster',
      title: t('projects.quotemaster.title'),
      description: t('projects.quotemaster.description'),
      features: t.raw('projects.quotemaster.features'),
      cta: t('projects.quotemaster.cta'),
      image: '/images/projects/quotemaster.png',
      mockup: <QuoteMasterMockup className="w-full h-full" />,
      link: '/productos/quotemaster',
      isExternal: false,
      badge: 'Multi-rubro'
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 text-center md:text-left mx-auto md:mx-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-tech text-primary/80 mb-4"
          >
            {t('subtitle')}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground tracking-tighter leading-tight"
          >
            {t('title').split(' ')[0]} <span className="text-primary">{t('title').split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70 max-w-2xl font-body"
          >
            {t('description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
