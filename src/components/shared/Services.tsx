import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket, ShoppingBag, Layout, Layers, ShieldCheck, Settings2, X, CheckCircle2 } from 'lucide-react';
import { Magnetic } from './Magnetic';

const ServiceCard = ({ service, index, onClick }: any) => {
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
      className="glass-card group p-8 rounded-[32px] relative overflow-hidden flex flex-col h-full border-outline bg-surface-low/30 cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative z-10 flex flex-col h-full"
      >
        <div className="mb-6 p-3 w-fit rounded-xl bg-surface-bright/20 border border-outline group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
          {service.icon}
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-3 text-foreground tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-foreground/60 text-sm leading-relaxed mb-10 flex-grow font-body">
          {service.desc}
        </p>

        <Magnetic>
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-primary/60 group-hover:text-primary transition-all tracking-[0.2em] w-fit">
            <span>VER_MÁS</span>
            <Rocket className="w-3 h-3 translate-y-[1px]" />
          </div>
        </Magnetic>
      </div>

      {/* Dynamic Inner Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export const Services = () => {
  const t = useTranslations('Services');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const services = [
    {
      id: 'software',
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: t('software.title'),
      desc: t('software.description'),
      full_desc: t('software.full_description'),
      features: t.raw('software.features')
    },
    {
      id: 'ai',
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      title: t('ai.title'),
      desc: t('ai.description'),
      full_desc: t('ai.full_description'),
      features: t.raw('ai.features')
    },
    {
      id: 'web',
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: t('web.title'),
      desc: t('web.description'),
      full_desc: t('web.full_description'),
      features: t.raw('web.features')
    },
    {
      id: 'ecommerce',
      icon: <ShoppingBag className="w-8 h-8 text-yellow-600" />,
      title: t('ecommerce.title'),
      desc: t('ecommerce.description'),
      full_desc: t('ecommerce.full_description'),
      features: t.raw('ecommerce.features')
    },
    {
      id: 'landing',
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      title: t('landing.title'),
      desc: t('landing.description'),
      full_desc: t('landing.full_description'),
      features: t.raw('landing.features')
    },
    {
      id: 'software_crm',
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      title: t('software_crm.title'),
      desc: t('software_crm.description'),
      full_desc: t('software_crm.full_description'),
      features: t.raw('software_crm.features')
    },
    {
      id: 'cyber',
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: t('cyber.title'),
      desc: t('cyber.description'),
      full_desc: t('cyber.full_description'),
      features: t.raw('cyber.features')
    },
    {
      id: 'support',
      icon: <Settings2 className="w-8 h-8 text-orange-600" />,
      title: t('support.title'),
      desc: t('support.description'),
      full_desc: t('support.full_description'),
      features: t.raw('support.features')
    }
  ];

  const selectedService = services.find(s => s.id === selectedId);

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
              className="relative w-full max-w-2xl bg-surface border border-outline rounded-[40px] overflow-hidden shadow-2xl p-8 md:p-12"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-surface-low border border-outline">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h4 className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-1">Detalle del Servicio</h4>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">{selectedService.title}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-foreground/70 text-lg leading-relaxed font-body">
                    {selectedService.full_desc}
                  </p>

                  <div className="pt-6 border-t border-outline">
                    <h5 className="text-foreground font-display font-bold mb-6 flex items-center gap-2">
                       <Layers className="w-4 h-4 text-primary" /> Características Clave
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.features.map((feature: string, i: number) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          key={i} 
                          className="flex items-center gap-3 p-4 rounded-2xl bg-surface-low border border-outline hover:border-primary/20 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-foreground/80 text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-sm tracking-[0.1em] uppercase hover:bg-primary/90 transition-all active:scale-[0.98]"
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
