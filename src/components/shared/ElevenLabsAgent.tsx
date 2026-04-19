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
      {/* 
        El agente se configura mediante este tag personalizado. 
        IMPORTANTE: Reemplaza 'agent-id' con el ID de tu agente en ElevenLabs.
      */}
      <elevenlabs-convai 
        agent-id="agent_3701kng3kzz8fweaqjtm8hp0epde"
      ></elevenlabs-convai>
      
      <style jsx global>{`
        elevenlabs-convai {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          z-index: 9999;
          transform: scale(0.75);
          transform-origin: bottom left;
          
          /* EFECTO NORTE: Oscurecer y virar a azul cian */
          filter: 
            invert(0.9) 
            hue-rotate(170deg) 
            brightness(1.2)
            drop-shadow(0 0 15px rgba(0, 240, 255, 0.4));
          
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          border-radius: 50%;
        }

        elevenlabs-convai:hover {
          transform: scale(0.8) translateY(-5px);
          filter: 
            invert(0.9) 
            hue-rotate(170deg) 
            brightness(1.5)
            drop-shadow(0 0 25px rgba(0, 240, 255, 0.6));
        }
      `}</style>
    </div>
  );
}
