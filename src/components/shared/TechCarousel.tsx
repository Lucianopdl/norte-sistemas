"use client"

import { motion } from 'framer-motion';

const techs = [
  { name: 'NEXT.JS', logo: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg' },
  { name: 'TYPESCRIPT', logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg' },
  { name: 'PYTHON', logo: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
  { name: 'RUST', logo: 'https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg' },
  { name: 'GO', logo: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg' },
  { name: 'DOCKER', logo: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg' },
  { name: 'REACT', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
  { name: 'NODE.JS', logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
  { name: 'TAILWIND', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'SUPABASE', logo: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg' }
];

export const TechCarousel = () => {
  return (
    <div className="py-20 relative overflow-hidden bg-background opacity-90 transition-opacity duration-500">
      {/* Gradients to hide edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex gap-20 w-fit whitespace-nowrap items-center px-10"
      >
        {/* Doubling for infinite effect */}
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-6 group cursor-default">
             <div className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
               <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
             </div>
             <span className="font-mono text-lg font-bold text-foreground/60 group-hover:text-primary transition-colors tracking-widest">
               {tech.name}
             </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
