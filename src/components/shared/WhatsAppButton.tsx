'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Zap } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton = ({ phoneNumber, message = "Hola Norte Sistemas! Me gustaría recibir información sobre sus servicios." }: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Mini Tooltip / Action Label */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="px-4 py-2 rounded-full glass-panel border-white/10 bg-surface-low/80 backdrop-blur-3xl shadow-2xl flex items-center gap-3"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] font-mono text-white/50 tracking-[0.2em] uppercase font-bold">Protocol: Secure_Chat</span>
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, borderColor: "rgba(0, 240, 255, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto flex items-center gap-6 p-2 pr-8 rounded-[40px] bg-surface-low/30 backdrop-blur-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] group relative overflow-hidden"
        aria-label="Contactar por WhatsApp"
      >
        {/* Animated Background Progress */}
        <div className="absolute inset-y-0 left-0 bg-primary/5 w-0 group-hover:w-full transition-all duration-700 ease-out" />
        
        {/* Brand Icon Container */}
        <div className="relative w-14 h-14 rounded-[32px] bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)] shrink-0 z-10">
          <MessageCircle className="w-7 h-7 text-background" />
          
          {/* Internal Pulse */}
          <div className="absolute inset-0 rounded-[32px] border-2 border-primary/50 animate-[ping_2s_infinite]" />
        </div>
        
        <div className="flex flex-col z-10">
          <span className="text-[10px] font-mono text-primary font-bold tracking-[0.1em] uppercase mb-0.5">Direct Line</span>
          <span className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
             Chat with Support
             <Zap className="w-4 h-4" />
          </span>
        </div>

        {/* Dynamic Light Sweep */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
      </motion.a>
    </div>
  );
};
