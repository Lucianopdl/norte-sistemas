'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

interface WhatsAppButtonProps {
  message?: string;
}

// Botón flotante de WhatsApp, visible en todo el sitio.
export const WhatsAppButton = ({ message = '¡Hola Norte Sistemas! Quiero pedir un diagnóstico gratis para mi negocio.' }: WhatsAppButtonProps) => (
  <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-2 pointer-events-none">
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      className="hidden md:flex px-3.5 py-1.5 rounded-full bg-surface border border-outline text-xs text-foreground/70 font-medium items-center gap-2 elevation-1"
    >
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      Respondemos en el día
    </motion.div>
    <motion.a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="pointer-events-auto flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] font-semibold"
      aria-label="Escribinos por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="text-sm md:text-base">Escribinos</span>
    </motion.a>
  </div>
);
