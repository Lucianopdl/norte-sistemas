'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Gift, MessageCircle, ClipboardList, Rocket, Star, ArrowDown } from 'lucide-react';
import { Norti } from '@/components/shared/Norti';
import { DiagnosticForm } from '@/components/shared/DiagnosticForm';
import { FOUNDERS, whatsappUrl } from '@/lib/contact';

const BENEFITS = [
  { icon: Search, color: 'bg-sistemas-soft text-sistemas', title: 'Diagnóstico gratis', text: 'Analizamos tu negocio —web, procesos y atención— y te decimos qué conviene mejorar primero.' },
  { icon: ShieldCheck, color: 'bg-soporte-soft text-soporte', title: '1 mes de soporte incluido', text: 'Después de la entrega te acompañamos un mes con ajustes y dudas, sin costo extra.' },
  { icon: Gift, color: 'bg-ia-soft text-ia', title: 'Bonus a los 4 meses', text: 'Si seguís con nosotros 4 meses, te regalamos un bot básico de WhatsApp o una web simple.' },
];
const STEPS = [
  { icon: MessageCircle, title: 'Nos escribís', text: 'Por WhatsApp o con el formulario de abajo.' },
  { icon: ClipboardList, title: 'Diagnóstico gratis', text: 'Charlamos y te mostramos qué mejorar y cuánto cuesta.' },
  { icon: Rocket, title: 'Arrancamos', text: 'Construimos por módulos: lo usás desde el primero.' },
  { icon: Star, title: 'Tu reseña', text: 'Al terminar, nos dejás tu opinión y mostramos tu proyecto.' },
];
const FAQ = [
  ['¿Tiene algún costo el diagnóstico?', 'No. El diagnóstico es gratis y sin compromiso: si después no querés avanzar, no pasa nada.'],
  ['¿Qué me piden a cambio?', 'Solo tu reseña al terminar y permiso para mostrar tu proyecto como caso de éxito.'],
  ['¿Cómo funciona el bonus?', 'Si seguís trabajando con nosotros 4 meses (por ejemplo, con soporte o mejoras), te regalamos un bot básico de WhatsApp o una web simple.'],
  ['¿Trabajan solo en Chaco?', 'Estamos en Chaco, pero trabajamos de forma remota con negocios de todo el país.'],
];

export const FundadoresView = () => {
  const left = FOUNDERS.total - FOUNDERS.taken;
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      {/* hero */}
      <section className="relative pt-32 md:pt-40 pb-16 bg-gradient-to-br from-[#5B70FF] via-[#4D63FF] to-[#6A3FD8] text-white overflow-hidden">
        {[[8, 18, '#4BE3A0'], [88, 14, '#FFA94D'], [92, 60, '#4CC9F0'], [50, 10, '#FF7A9A'], [4, 70, '#B794FF'], [70, 85, '#FFC94D']].map(([x, y, c], i) => (
          <span key={i} aria-hidden className="absolute w-3 h-3 md:w-4 md:h-4" style={{ left: `${x}%`, top: `${y}%`, background: c as string, transform: `rotate(${i * 15}deg)` }} />
        ))}
        <div className="container mx-auto px-6 grid md:grid-cols-[1.2fr_.8fr] gap-10 items-center relative">
          <div>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block -rotate-2 rounded-full bg-[#FFC94D] text-[#0B1030] px-5 py-2 text-sm font-mono font-bold tracking-widest">LANZAMIENTO</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.95]">
              ¡Buscamos <span className="text-[#FFC94D]">5 negocios</span> fundadores!
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-6 text-lg md:text-2xl text-white/85 max-w-xl">
              Beneficios exclusivos para los primeros cinco clientes de Norte Sistemas, a cambio de tu reseña y de mostrar tu proyecto.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#diagnostico" className="inline-flex items-center gap-2 rounded-full bg-white text-[#0B1030] px-7 py-4 font-bold text-lg hover:brightness-95 transition">
                Pedí tu diagnóstico gratis <ArrowDown className="w-5 h-5" />
              </a>
              <span className="-rotate-3 rounded-2xl bg-[#FF7A9A] px-5 py-2 text-center leading-tight">
                <span className="block text-[11px] font-mono font-bold tracking-widest">HASTA EL</span>
                <span className="block text-2xl font-display font-black">{FOUNDERS.deadline.slice(0, 5)}</span>
              </span>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2 }} className="relative mx-auto w-56 md:w-80">
            <span className="absolute -top-12 -right-2 md:-right-10 z-10 rotate-3 rounded-2xl bg-white text-[#0B1030] px-4 py-2 font-bold shadow-xl">¡Quedan {left} lugares!</span>
            <Norti className="w-full drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* cupos */}
      <section className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="rounded-[28px] bg-surface border border-outline p-6 md:p-8 elevation-2">
          <div className="flex items-center justify-between mb-4 text-xs font-mono font-bold tracking-[0.25em] text-foreground/60">
            <span>CUPOS</span>
            <span className="flex items-center gap-2 text-foreground"><span className="w-2.5 h-2.5 rounded-full bg-green-500" />{left} DE {FOUNDERS.total} DISPONIBLES</span>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: FOUNDERS.total }, (_, i) => (
              <div key={i} className={`h-16 rounded-xl border-2 flex items-center justify-center font-mono font-bold ${i < FOUNDERS.taken ? 'bg-primary text-on-primary border-primary' : 'border-foreground/80'}`}>
                {i < FOUNDERS.taken ? 'OCUPADO' : `0${i + 1}`}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* beneficios */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-center">Qué incluye</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {BENEFITS.map(({ icon: Icon, color, title, text }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
              className="rounded-[28px] bg-surface border border-outline p-8 elevation-1">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}><Icon className="w-7 h-7" /></div>
              <h3 className="mt-6 text-2xl font-display font-black tracking-tight">{title}</h3>
              <p className="mt-2 text-foreground/65 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* cómo funciona */}
      <section className="bg-surface-low py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-center">Cómo funciona</h2>
          <ol className="mt-12 grid md:grid-cols-4 gap-6">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="rounded-[24px] bg-surface border border-outline p-6">
                <span className="text-sm font-mono font-bold text-primary">0{i + 1}</span>
                <Icon className="mt-3 w-7 h-7 text-primary" />
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-1 text-foreground/65">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* formulario */}
      <section id="diagnostico" className="container mx-auto px-6 py-20 scroll-mt-24">
        <DiagnosticForm source="Programa Fundadores" title="Quiero mi cupo fundador" subtitle="Dejanos tus datos y te escribimos por WhatsApp para coordinar el diagnóstico gratis." />
      </section>

      {/* preguntas */}
      <section className="container mx-auto px-6 pb-28 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-center">Preguntas frecuentes</h2>
        <div className="mt-10 grid gap-3">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-surface border border-outline p-5 open:elevation-1">
              <summary className="cursor-pointer list-none font-bold text-lg flex justify-between items-center gap-4">
                {q}<span className="text-primary text-2xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-foreground/70 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-foreground/60">
          ¿Preferís hablar directo? <a className="text-primary font-semibold underline underline-offset-4" href={whatsappUrl('¡Hola! Quiero saber más del Programa Fundadores.')} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a>.
        </p>
      </section>
    </main>
  );
};
