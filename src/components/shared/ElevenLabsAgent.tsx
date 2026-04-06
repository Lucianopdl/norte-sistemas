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
          right: 2rem;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}
