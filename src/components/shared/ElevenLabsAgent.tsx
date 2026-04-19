'use client';

import { useEffect } from 'react';

/**
 * ElevenLabsAgent - Norte Sistemas
 * Componente que integra el agente de ventas conversacional de ElevenLabs.
 * El agente se muestra como una burbuja flotante personalizable.
 */
export default function ElevenLabsAgent() {
  useEffect(() => {
    // Evitar duplicación si el script ya existe
    if (document.getElementById('elevenlabs-widget-script')) return;

    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.id = 'elevenlabs-widget-script';
    script.className = 'elevenlabs-widget-script';
    
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elevenlabs-wrapper">
      {/* Etiqueta flotante para el asistente */}
      <div className="ai-assistant-label">
        <span className="dot"></span>
        ASISTENTE IA // CONSULTAS
      </div>

      <elevenlabs-convai 
        agent-id="agent_3701kng3kzz8fweaqjtm8hp0epde"
      ></elevenlabs-convai>
      
      <style jsx global>{`
        .ai-assistant-label {
          position: fixed;
          bottom: 7.5rem;
          right: 2rem;
          z-index: 10000;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 240, 255, 0.3);
          padding: 8px 16px;
          border-radius: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: #00f0ff;
          letter-spacing: 0.15em;
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
          animation: floatLabel 4s ease-in-out infinite;
          white-space: nowrap;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #00f0ff;
          border-radius: 50%;
          box-shadow: 0 0 15px #00f0ff;
          animation: pulseDot 2s infinite;
        }

        elevenlabs-convai {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          transform: scale(0.8);
          transform-origin: bottom right;
          
          filter: 
            invert(0.9) 
            hue-rotate(170deg) 
            brightness(1.2)
            drop-shadow(0 0 20px rgba(0, 240, 255, 0.3));
          
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes floatLabel {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-8px) translateX(-2px); }
        }

        @keyframes pulseDot {
          0% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
