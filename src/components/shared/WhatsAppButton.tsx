'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Zap } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton = ({ phoneNumber, message = "Hola AtlaSys! Me gustaría recibir información sobre sus servicios." }: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Mini Tooltip / Action Label */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="px-3.5 py-1.5 rounded-full bg-surface border border-outline text-[9px] font-mono text-foreground/60 tracking-wider uppercase font-bold flex items-center gap-2 elevation-1"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>Protocol: Secure_Chat</span>
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="pointer-events-auto flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary-container text-primary border border-outline/10 elevation-3 hover:elevation-4 group relative overflow-hidden transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 shrink-0 z-10 text-primary" />
        <span className="text-sm font-semibold tracking-wide font-body z-10 flex items-center gap-1.5">
           Chat with Support
           <Zap className="w-3.5 h-3.5 text-primary" />
        </span>
        {/* Ink hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.a>
    </div>
  );
};
