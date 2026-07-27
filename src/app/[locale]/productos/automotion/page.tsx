'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AutoMotionMockup } from '@/components/shared/DashboardMockups';
import {
  ArrowLeft,
  CheckCircle2,
  Car,
  Search,
  Calendar,
  BarChart3,
  Smartphone,
  MessageSquare,
  Shield,
  Zap,
  ArrowRight,
  Star,
  ImageIcon,
  Filter,
} from 'lucide-react';

const features = [
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Catálogo Digital de Vehículos',
    description: 'Mostrá todo tu stock online con fotos, ficha técnica completa, precio y estado. Actualización inmediata.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: 'Filtros Avanzados',
    description: 'Los clientes filtran por marca, modelo, año, precio, combustible y transmisión. Encontrá el auto ideal rápido.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: 'Galería de Fotos Real',
    description: 'Galerías de múltiples imágenes por vehículo. Los compradores ven cada detalle antes de contactarte.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Agenda de Visitas',
    description: 'Sistema de turnos integrado. Los interesados agendan su visita directo desde el catálogo.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Consultas Directas',
    description: 'Botón de contacto directo por vehículo. El cliente escribe con el auto que le interesa, vos respondés.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Panel de Administración',
    description: 'Agregá, editá o archivá vehículos desde un panel simple. Sin conocimientos técnicos requeridos.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10 border-rose-400/20',
  },
];

const benefits = [
  'Tu stock disponible las 24hs, sin que nadie atienda el teléfono',
  'Más alcance: clientes de cualquier ciudad pueden ver tus autos',
  'Fotos reales y ficha completa eliminan consultas básicas repetidas',
  'Actualizá precios y disponibilidad en segundos desde tu celular',
  'Agenda de visitas para organizar mejor tu tiempo',
  'Imagen profesional que genera más confianza que redes sociales',
];

const stats = [
  { value: '100%', label: 'Responsive móvil' },
  { value: '< 1s', label: 'Carga del catálogo' },
  { value: '∞', label: 'Vehículos publicables' },
  { value: '24/7', label: 'Disponible online' },
];

export default function AutoMotionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/6 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/5 blur-[140px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
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
            {/* Left — Copy */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
              >
                <Zap className="w-3 h-3 text-amber-400" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase">
                  E-commerce Automotriz
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-display font-black tracking-tighter leading-none mb-4"
              >
                Auto
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  Motion
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-foreground/60 font-body leading-relaxed mb-8 max-w-lg"
              >
                Tu agencia de vehículos con presencia digital profesional. Catálogo online completo, agenda de visitas y contacto directo. Vendé más, sin aumentar el equipo.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-10"
              >
                {['Catálogo con fotos y ficha técnica', 'Filtros por marca, modelo y precio', 'Agenda de visitas integrada', 'Panel de admin sin código'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/70">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
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

            {/* Right — Screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-[24px] overflow-hidden border border-outline shadow-2xl aspect-[16/10]">
                <AutoMotionMockup className="absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 px-4 py-2.5 rounded-2xl bg-surface border border-outline shadow-xl flex items-center gap-2.5">
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-mono font-bold text-foreground/80">Catálogo Online</span>
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
                <div className="text-4xl font-display font-black text-amber-400 mb-1">{stat.value}</div>
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
              Funcionalidades
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
              Tu agencia abierta las 24 horas
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
                Ventajas competitivas
              </span>
              <h2 className="text-4xl font-display font-black tracking-tight mb-8">
                Tu stock, disponible<br />
                <span className="text-amber-400">en cualquier momento.</span>
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
                  <Star className="w-5 h-5 text-amber-400" />
                  <h3 className="font-display font-bold">¿Para quién es?</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Agencias de venta de autos usados y 0km</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Concesionarias multimarca</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Vendedores de motos y vehículos especiales</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Particulares con stock para venta frecuente</li>
                </ul>
              </div>
              <div className="p-6 rounded-[20px] border border-outline bg-background">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                  <h3 className="font-display font-bold">100% Adaptable</h3>
                </div>
                <p className="text-sm text-foreground/60">
                  Personalizable con los colores y logo de tu agencia. Se adapta a autos, motos, maquinaria agrícola o cualquier tipo de vehículo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-6">
              ¿Querés{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                AutoMotion
              </span>{' '}
              para tu agencia?
            </h2>
            <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
              Contanos cuántos vehículos tenés en stock y te mostramos cómo quedaría tu catálogo.
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
