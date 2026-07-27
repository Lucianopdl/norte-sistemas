'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Activity,
  Stethoscope,
  BarChart3,
  Smartphone,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Inventario de Hacienda',
    description: 'Registrá cada animal con su ID, raza, peso, categoría y estado sanitario. Actualización en tiempo real.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: 'Módulo Veterinario',
    description: 'Historial clínico completo por animal. Vacunaciones, tratamientos y alertas sanitarias programadas.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Feedlot & Alimentación',
    description: 'Control de dietas, consumo diario y conversión de alimento. Maximizá la eficiencia de engorde.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Reportes y Análisis',
    description: 'Dashboards con KPIs clave: GDP, conversión, mortalidad, proyección de kilos. Decisiones basadas en datos.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10 border-purple-400/20',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Multi-Rol',
    description: 'Acceso diferenciado para Productor y Veterinario. Cada usuario ve lo que necesita.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10 border-cyan-400/20',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Seguridad & SSL',
    description: 'Conexión segura encriptada. Tus datos del establecimiento protegidos 24/7.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10 border-rose-400/20',
  },
];

const benefits = [
  'Reducí el tiempo de registro de hacienda en un 80%',
  'Eliminá las planillas de Excel y errores manuales',
  'Accedé desde cualquier dispositivo, en el campo o la oficina',
  'Historial completo de cada animal desde el ingreso',
  'Alertas automáticas de vencimientos de tratamientos',
  'Exportación de reportes en PDF o Excel',
];

const stats = [
  { value: '2.800+', label: 'Cabezas gestionadas' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '< 2s', label: 'Tiempo de carga' },
  { value: '24/7', label: 'Soporte técnico' },
];

export default function GanaderoSyncPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/8 blur-[180px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/6 blur-[140px] rounded-full" />
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
              >
                <Zap className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                  SaaS Agropecuario
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-display font-black tracking-tighter leading-none mb-4"
              >
                Ganadero
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Sync
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-foreground/60 font-body leading-relaxed mb-8 max-w-lg"
              >
                El sistema de gestión integral diseñado para productores ganaderos que quieren tener control total de su feedlot, hacienda y sanidad desde un solo lugar.
              </motion.p>

              {/* Quick wins */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-10"
              >
                {['Inventario de hacienda en tiempo real', 'Módulo veterinario integrado', 'Reportes y KPIs de feedlot', 'Acceso web y móvil'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/70">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
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
              <div className="relative rounded-[24px] overflow-hidden border border-outline shadow-2xl">
                <Image
                  src="/images/projects/ganadero-sync.png"
                  alt="Ganadero Sync Dashboard"
                  width={720}
                  height={450}
                  className="w-full object-cover"
                  priority
                />
                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 px-4 py-2.5 rounded-2xl bg-surface border border-outline shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-foreground/80">Sistema En Línea</span>
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
                <div className="text-4xl font-display font-black text-primary mb-1">{stat.value}</div>
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
              Módulos del Sistema
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
              Todo lo que tu establecimiento necesita
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
                ¿Por qué Ganadero Sync?
              </span>
              <h2 className="text-4xl font-display font-black tracking-tight mb-8">
                Dejá atrás las planillas.<br />
                <span className="text-primary">Tomá el control real.</span>
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

            {/* Target audience */}
            <div className="space-y-4">
              <div className="p-6 rounded-[20px] border border-outline bg-background">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-amber-400" />
                  <h3 className="font-display font-bold">¿Para quién es?</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Productores ganaderos con feedlot propio</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Establecimientos con plantel de veterinario</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Cooperativas y consignatarios</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />Inversores en invernada que necesitan trazabilidad</li>
                </ul>
              </div>

              <div className="p-6 rounded-[20px] border border-outline bg-background">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                  <h3 className="font-display font-bold">Multiplataforma</h3>
                </div>
                <p className="text-sm text-foreground/60">
                  Accedé desde tu navegador en la PC de la oficina, la tablet del campo o el celular. Sin instalaciones, siempre actualizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-6">
              ¿Interesado en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Ganadero Sync?
              </span>
            </h2>
            <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
              Contanos sobre tu establecimiento y te mostramos cómo implementarlo. Sin compromiso.
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
