'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { QuoteMasterMockup } from '@/components/shared/DashboardMockups';
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  History,
  Users,
  Calendar,
  Zap,
  ArrowRight,
  Star,
  Sliders,
  DollarSign,
  Shield,
  Layers,
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Creador de Presupuestos',
    description: 'Generación acelerada de cotizaciones detalladas con items, cantidades, descuentos y desglose total.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: <History className="w-6 h-6" />,
    title: 'Historial & Versiones',
    description: 'Consulta, edita, duplica o exporta presupuestos enviados previamente. Nunca pierdas el registro de un cliente.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Base de Clientes (CRM)',
    description: 'Agenda centralizada con datos de contacto, historial de compras y preferencias de cada cliente.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Calendario de Eventos / Fechas',
    description: 'Vista mensual para evitar solapamientos y visualizar servicios o eventos confirmados.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: 'Adaptable a Cualquier Rubro',
    description: 'Configura tus propios productos, servicios, impuestos y plantillas en cuestión de minutos.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Exportación Profesional',
    description: 'Envía presupuestos limpios en PDF con el logo y branding de tu empresa.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10 border-rose-500/20',
  },
];

const benefits = [
  'Genera cotizaciones profesionales en segundos en lugar de horas',
  'Totalmente personalizable: cambia categorías, precios e ítems fácilmente',
  'Centraliza la información de tus clientes y estados de presupuestos (Aprobado/Pendiente)',
  'Evita errores de cálculo y falta de stock o fechas superpuestas',
  'Exportación limpia lista para enviar por WhatsApp o Email',
  'Acceso 100% online desde cualquier navegador',
];

const stats = [
  { value: '10x', label: 'Más rápido en cotizar' },
  { value: '100%', label: 'Personalizable' },
  { value: 'PDF', label: 'Exportación en 1-click' },
  { value: '24/7', label: 'Disponibilidad Cloud' },
];

export default function QuoteMasterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/6 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[140px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono text-foreground/50 hover:text-primary transition-colors tracking-wider uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al portfolio
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
              >
                <Zap className="w-3 h-3 text-purple-400" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 uppercase">
                  Software Multi-Rubro
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-display font-black tracking-tighter leading-none mb-4"
              >
                Quote
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Master
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-foreground/60 font-body leading-relaxed mb-8 max-w-lg"
              >
                El sistema de cotizaciones y presupuestos profesional. Pensado originalmente para organizadores de eventos y adaptable a cualquier rubro o empresa de servicios.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-10"
              >
                {['Presupuestos en PDF rápidos y elegantes', 'Historial completo de cotizaciones', 'CRM básico de clientes incluido', 'Calendario de eventos / servicios'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/70">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold text-sm tracking-wider uppercase hover:brightness-95 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 active:scale-[0.98]"
                >
                  Consultar por este sistema
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-[24px] overflow-hidden border border-outline shadow-2xl aspect-[16/10]">
                <QuoteMasterMockup className="absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 px-4 py-2.5 rounded-2xl bg-surface border border-outline shadow-xl flex items-center gap-2.5">
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-mono font-bold text-foreground/80">Cotizaciones Ágiles</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y border-outline/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-black text-purple-400 mb-1">{stat.value}</div>
                <div className="text-xs font-mono text-foreground/50 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono tracking-[0.4em] text-primary font-bold uppercase block mb-4">
              Módulos Clave
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
              Diseñado para simplificar tu gestión comercial
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-[20px] border bg-surface ${feat.bg} transition-all hover:scale-[1.02] duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${feat.bg} ${feat.color}`}>
                  {feat.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-primary font-bold uppercase block mb-4">
                Versatilidad total
              </span>
              <h2 className="text-4xl font-display font-black tracking-tight mb-8">
                Crea propuestas profesionales<br />
                <span className="text-purple-400">en cuestión de minutos.</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-[20px] border border-outline bg-background">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-purple-400" />
                  <h3 className="font-display font-bold">¿Para quién es?</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Organizadores de eventos, salones y catering</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Agencias de diseño, publicidad y desarrollo</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Empresas de construcción, reformas y servicios</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Profesionales independientes y freelancers</li>
                </ul>
              </div>
              <div className="p-6 rounded-[20px] border border-outline bg-background">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-display font-bold">Adaptable</h3>
                </div>
                <p className="text-sm text-foreground/60">
                  Adaptamos la estructura de los campos y las plantillas PDF según la identidad y necesidades específicas de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-6">
              ¿Querés{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                QuoteMaster
              </span>{' '}
              para tu negocio?
            </h2>
            <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
              Contanos sobre tu rubro y te mostramos cómo optimizar tu proceso de presupuestación.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-white font-bold text-sm tracking-wider uppercase hover:brightness-95 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 active:scale-[0.98]"
            >
              Quiero este sistema
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
