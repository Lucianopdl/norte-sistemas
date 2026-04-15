'use client';

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load para evitar SSR issues — Spline requiere WebGL (browser only)
const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_URL = 'https://prod.spline.design/uDkJ-dciMWalD5D7/scene.splinecode';

const SplineLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      <span className="text-[0.6rem] font-mono text-primary/50 tracking-[0.4em] uppercase">
        Loading_Scene...
      </span>
    </div>
  </div>
);

export const SplineScene: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background" aria-hidden="true">
      {/* Label decorativo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <span className="text-[0.55rem] font-mono text-primary/40 tracking-[0.5em] uppercase">
          Interactive_3D // WebGL
        </span>
      </div>

      {/* Fade superior — funde con la sección anterior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* Fade inferior — funde con el footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Canvas Spline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        className="w-full h-[500px] md:h-[600px]"
      >
        <Suspense fallback={<SplineLoader />}>
          <Spline
            scene={SPLINE_URL}
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </motion.div>
    </section>
  );
};
