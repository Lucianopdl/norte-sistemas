'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Norti } from './Norti';
import { FOUNDERS } from '@/lib/contact';

// Franja de la home que lleva a /fundadores.
export const FundadoresBanner = () => {
  const left = FOUNDERS.total - FOUNDERS.taken;
  return (
    <section className="container mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#5B70FF] via-[#4D63FF] to-[#6A3FD8] text-white px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
      >
        <Norti className="w-28 md:w-36 shrink-0 drop-shadow-xl" />
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block mb-3 rounded-full bg-[#FFC94D] text-[#0B1030] px-4 py-1 text-xs font-mono font-bold tracking-widest">LANZAMIENTO · QUEDAN {left} CUPOS</span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-[1.05]">
            Programa Fundadores: buscamos <span className="text-[#FFC94D]">5 negocios</span> para crecer juntos.
          </h2>
          <p className="mt-3 text-white/80 text-base md:text-lg">Diagnóstico gratis, 1 mes de soporte incluido y un bonus a los 4 meses. Hasta el {FOUNDERS.deadline}.</p>
        </div>
        <Link href="/fundadores" className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-[#0B1030] px-7 py-4 font-bold text-lg hover:brightness-95 transition">
          Quiero mi cupo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
};
