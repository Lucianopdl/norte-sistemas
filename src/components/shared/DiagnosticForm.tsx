'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

const NEEDS = [
  'Una web nueva o renovar la que tengo',
  'Un sistema de gestión (stock, ventas, turnos)',
  'Un bot de WhatsApp con IA',
  'Soporte y mantenimiento',
  'Todavía no sé, quiero que me asesoren',
];

interface DiagnosticFormProps {
  /** Origen de la consulta, para saber desde dónde llega (ej. "Programa Fundadores"). */
  source?: string;
  title?: string;
  subtitle?: string;
}

// Formulario corto: valida en el navegador y abre WhatsApp con el mensaje armado (no guarda datos).
export const DiagnosticForm = ({
  source = 'Web',
  title = 'Pedí tu diagnóstico gratis',
  subtitle = 'Contanos de tu negocio y te respondemos por WhatsApp con qué mejorar primero. Sin compromiso.',
}: DiagnosticFormProps) => {
  const [form, setForm] = useState({ name: '', business: '', need: NEEDS[0], detail: '' });
  const [error, setError] = useState('');
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim(), business = form.business.trim(), detail = form.detail.trim();
    if (name.length < 2 || business.length < 2) { setError('Completá tu nombre y el de tu negocio.'); return; }
    setError('');
    const msg = [
      `¡Hola Norte Sistemas! Quiero pedir un diagnóstico gratis (${source}).`,
      `• Nombre: ${name.slice(0, 80)}`,
      `• Negocio: ${business.slice(0, 120)}`,
      `• Necesito: ${form.need}`,
      detail ? `• Detalle: ${detail.slice(0, 500)}` : '',
    ].filter(Boolean).join('\n');
    window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const field = 'w-full rounded-2xl bg-background border border-outline px-4 py-3.5 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto rounded-[32px] bg-surface border border-outline p-6 md:p-10 elevation-2"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-2xl bg-sistemas-soft text-sistemas flex items-center justify-center"><Search className="w-5 h-5" /></div>
        <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight">{title}</h3>
      </div>
      <p className="text-foreground/60 mb-8">{subtitle}</p>
      <form onSubmit={submit} className="grid gap-4" noValidate>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1.5 text-sm font-medium">Tu nombre
            <input className={field} value={form.name} onChange={set('name')} maxLength={80} placeholder="Ej: Laura" autoComplete="given-name" required />
          </label>
          <label className="grid gap-1.5 text-sm font-medium">Tu negocio y rubro
            <input className={field} value={form.business} onChange={set('business')} maxLength={120} placeholder="Ej: Ferretería en Resistencia" required />
          </label>
        </div>
        <label className="grid gap-1.5 text-sm font-medium">¿Qué necesitás?
          <select className={field} value={form.need} onChange={set('need')}>
            {NEEDS.map(n => <option key={n}>{n}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">Contanos un poco más (opcional)
          <textarea className={`${field} min-h-[110px] resize-y`} value={form.detail} onChange={set('detail')} maxLength={500} placeholder="Ej: hoy tomo los pedidos por WhatsApp y llevo el stock en Excel." />
        </label>
        {error && <p role="alert" className="text-sm text-consultoria font-medium">{error}</p>}
        <button type="submit" className="mt-2 group inline-flex items-center justify-center gap-3 rounded-full bg-primary text-on-primary px-8 py-4 text-lg font-bold hover:brightness-110 active:scale-[.98] transition">
          Enviar por WhatsApp
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-xs text-foreground/50 text-center">Se abre WhatsApp con tu mensaje listo. No guardamos tus datos.</p>
      </form>
    </motion.div>
  );
};
