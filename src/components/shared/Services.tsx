import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket, ShoppingBag, Layout, Layers, ShieldCheck, Settings2, X, CheckCircle2 } from 'lucide-react';
import { Magnetic } from './Magnetic';

/* Un color por rama de servicio (design system AtlaSys, tokens en globals.css) */
const colorMap = {
  web: {
    text: 'text-web',
    bg: 'bg-web-soft',
    border: 'border-web/25',
    hoverBorder: 'group-hover:border-web/55',
    hoverBg: 'group-hover:bg-web-soft',
    containerBg: 'bg-web-soft',
    onContainerText: 'text-web',
    chipBg: 'bg-web/10 border-web/20',
    chipText: 'text-foreground',
    inkBg: 'bg-web/5',
    cardBg: 'bg-web-soft/50'
  },
  sistemas: {
    text: 'text-sistemas',
    bg: 'bg-sistemas-soft',
    border: 'border-sistemas/25',
    hoverBorder: 'group-hover:border-sistemas/55',
    hoverBg: 'group-hover:bg-sistemas-soft',
    containerBg: 'bg-sistemas-soft',
    onContainerText: 'text-sistemas',
    chipBg: 'bg-sistemas/10 border-sistemas/20',
    chipText: 'text-foreground',
    inkBg: 'bg-sistemas/5',
    cardBg: 'bg-sistemas-soft/50'
  },
  ia: {
    text: 'text-ia',
    bg: 'bg-ia-soft',
    border: 'border-ia/25',
    hoverBorder: 'group-hover:border-ia/55',
    hoverBg: 'group-hover:bg-ia-soft',
    containerBg: 'bg-ia-soft',
    onContainerText: 'text-ia',
    chipBg: 'bg-ia/10 border-ia/20',
    chipText: 'text-foreground',
    inkBg: 'bg-ia/5',
    cardBg: 'bg-ia-soft/50'
  },
  soporte: {
    text: 'text-soporte',
    bg: 'bg-soporte-soft',
    border: 'border-soporte/25',
    hoverBorder: 'group-hover:border-soporte/55',
    hoverBg: 'group-hover:bg-soporte-soft',
    containerBg: 'bg-soporte-soft',
    onContainerText: 'text-soporte',
    chipBg: 'bg-soporte/10 border-soporte/20',
    chipText: 'text-foreground',
    inkBg: 'bg-soporte/5',
    cardBg: 'bg-soporte-soft/50'
  },
  consultoria: {
    text: 'text-consultoria',
    bg: 'bg-consultoria-soft',
    border: 'border-consultoria/25',
    hoverBorder: 'group-hover:border-consultoria/55',
    hoverBg: 'group-hover:bg-consultoria-soft',
    containerBg: 'bg-consultoria-soft',
    onContainerText: 'text-consultoria',
    chipBg: 'bg-consultoria/10 border-consultoria/20',
    chipText: 'text-foreground',
    inkBg: 'bg-consultoria/5',
    cardBg: 'bg-consultoria-soft/50'
  }
};

const ServiceCard = ({ service, index, onClick }: any) => {
  const colors = colorMap[service.color as keyof typeof colorMap] || colorMap.sistemas;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`elevation-1 hover:elevation-3 ${colors.cardBg} border ${colors.border} ${colors.hoverBorder} p-8 rounded-[4px] relative overflow-hidden flex flex-col h-full cursor-pointer active:scale-[0.98] transition-all duration-300 hover:-translate-y-1 group`}
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative z-10 flex flex-col h-full items-start"
      >
        {/* 3D Volumetric Animated Icon Container */}
        <div 
          style={{ transformStyle: "preserve-3d" }}
          className="mb-6 relative h-16 w-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
        >
          {/* 3D Glow overlay */}
          <div className={`absolute -inset-1.5 rounded-[8px] ${colors.containerBg} blur-md opacity-30 group-hover:opacity-85 transition-opacity duration-300`} />
          
          {/* Volumetric base sheet */}
          <div 
            style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
            className={`absolute inset-0 rounded-[8px] bg-surface border ${colors.border} shadow-[0_6px_12px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300`}
          >
            {/* The icon floating/pulsing above base */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: index * 0.2 }}
              style={{ transform: "translateZ(40px)" }}
              className="transition-transform duration-300"
            >
              {React.cloneElement(service.icon, { className: `w-9 h-9 ${colors.text}` })}
            </motion.div>
          </div>
        </div>
        
        <h3 className={`text-2xl font-display font-black mb-3 ${colors.text} tracking-tight`}>
          {service.title}
        </h3>
        
        <p className="text-foreground/75 text-sm leading-relaxed mb-10 flex-grow font-body font-medium">
          {service.desc}
        </p>

        <Magnetic>
          <div className={`flex items-center gap-2 text-[10px] font-mono font-bold ${colors.text} transition-all tracking-[0.2em] w-fit`}>
            <span>VER_MÁS</span>
            <Rocket className="w-3.5 h-3.5 translate-y-[1px]" />
          </div>
        </Magnetic>
      </div>

      {/* Ink hover overlay effect */}
      <div className={`absolute inset-0 pointer-events-none ${colors.inkBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
};

export const Services = () => {
  const t = useTranslations('Services');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const services = [
    {
      id: 'software',
      icon: <Code2 />,
      title: t('software.title'),
      desc: t('software.description'),
      full_desc: t('software.full_description'),
      features: t.raw('software.features'),
      color: 'sistemas'
    },
    {
      id: 'ai',
      icon: <Cpu />,
      title: t('ai.title'),
      desc: t('ai.description'),
      full_desc: t('ai.full_description'),
      features: t.raw('ai.features'),
      color: 'ia'
    },
    {
      id: 'web',
      icon: <Globe />,
      title: t('web.title'),
      desc: t('web.description'),
      full_desc: t('web.full_description'),
      features: t.raw('web.features'),
      color: 'web'
    },
    {
      id: 'ecommerce',
      icon: <ShoppingBag />,
      title: t('ecommerce.title'),
      desc: t('ecommerce.description'),
      full_desc: t('ecommerce.full_description'),
      features: t.raw('ecommerce.features'),
      color: 'web'
    },
    {
      id: 'landing',
      icon: <Layout />,
      title: t('landing.title'),
      desc: t('landing.description'),
      full_desc: t('landing.full_description'),
      features: t.raw('landing.features'),
      color: 'web'
    },
    {
      id: 'software_crm',
      icon: <Layers />,
      title: t('software_crm.title'),
      desc: t('software_crm.description'),
      full_desc: t('software_crm.full_description'),
      features: t.raw('software_crm.features'),
      color: 'sistemas'
    },
    {
      id: 'cyber',
      icon: <ShieldCheck />,
      title: t('cyber.title'),
      desc: t('cyber.description'),
      full_desc: t('cyber.full_description'),
      features: t.raw('cyber.features'),
      color: 'soporte'
    },
    {
      id: 'support',
      icon: <Settings2 />,
      title: t('support.title'),
      desc: t('support.description'),
      full_desc: t('support.full_description'),
      features: t.raw('support.features'),
      color: 'soporte'
    }
  ];

  const selectedService = services.find(s => s.id === selectedId);
  const selectedColors = selectedService ? (colorMap[selectedService.color as keyof typeof colorMap] || colorMap.sistemas) : colorMap.sistemas;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20 text-center md:text-left mx-auto md:mx-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-tech text-primary/80 mb-4"
          >
            Portafolio de Ingeniería / 01
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground tracking-tighter leading-tight"
          >
            Capacidades para infraestructura de <span className="text-primary">alta demanda</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              onClick={() => setSelectedId(service.id)}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedId && selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-surface border border-outline rounded-[4px] overflow-hidden shadow-2xl p-8 md:p-12"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className={`absolute top-8 right-8 p-2.5 rounded-full bg-surface-low hover:${selectedColors.containerBg} text-foreground/60 hover:${selectedColors.text} dark:text-foreground/80 transition-all z-10 border border-outline`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  {/* Square icon container inside modal */}
                  <div 
                    style={{ transformStyle: "preserve-3d" }}
                    className={`p-4 rounded-[8px] bg-surface border ${selectedColors.border} shadow-sm`}
                  >
                    {React.cloneElement(selectedService.icon, { className: `w-8 h-8 ${selectedColors.text}` })}
                  </div>
                  <div>
                    <h4 className={`font-mono text-xs font-bold tracking-[0.3em] uppercase mb-1 ${selectedColors.text}`}>Detalle del Servicio</h4>
                    <h3 className="text-3xl md:text-4xl font-display font-black text-foreground">{selectedService.title}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-foreground/75 text-lg leading-relaxed font-body font-medium">
                    {selectedService.full_desc}
                  </p>

                  <div className="pt-6 border-t border-outline">
                    <h5 className="text-foreground font-display font-bold mb-6 flex items-center gap-2">
                       <Layers className={`w-4 h-4 ${selectedColors.text}`} /> Características Clave
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature: string, i: number) => (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          key={i} 
                          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full ${selectedColors.chipBg} border text-foreground/80 hover:bg-opacity-80 transition-colors duration-200`}
                        >
                          <CheckCircle2 className={`w-4 h-4 ${selectedColors.text} shrink-0`} />
                          <span className={`text-xs font-semibold tracking-wide font-mono ${selectedColors.chipText}`}>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className={`w-full py-3.5 rounded-full ${selectedColors.containerBg} ${selectedColors.onContainerText} font-bold text-xs tracking-wider uppercase hover:shadow-md transition-all active:scale-[0.98]`}
                  >
                    Cerrar Información
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
