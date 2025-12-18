
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingIngredients: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax para o letreiro e elementos
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const marqueeXReverse = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative py-40 overflow-hidden pointer-events-none select-none">
      
      {/* Background Glow (O calor da chapa) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/30 to-transparent" />

      {/* Marquee 1 - Superior (Opacidade aumentada de 10 para 25) */}
      <motion.div 
        style={{ x: marqueeX, opacity }}
        className="flex whitespace-nowrap mb-12 rotate-[-2deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[10vw] font-display font-black text-transparent stroke-accent opacity-25 uppercase tracking-tighter mr-20" style={{ WebkitTextStroke: '2px #EA580C' }}>
            Suculência • Design • Conversão • 
          </span>
        ))}
      </motion.div>

      {/* Card Central de Valor (Conteúdo no Gap) */}
      <div className="container mx-auto px-6 relative z-10 my-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-block p-4 bg-white rounded-3xl shadow-food border border-orange-50 mb-8 rotate-1">
             <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">The Secret Sauce</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground leading-tight tracking-tighter">
            Não vendemos apenas artes, <br/>
            <span className="text-accent italic">vendemos fome à primeira vista.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee 2 - Inferior (Substituído Food Porn por Appetite Appeal) */}
      <motion.div 
        style={{ x: marqueeXReverse, opacity }}
        className="flex whitespace-nowrap mt-12 rotate-[2deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[10vw] font-display font-black text-accent/15 uppercase tracking-tighter mr-20">
            Appetite Appeal • Branding • Digital Menu • 
          </span>
        ))}
      </motion.div>

      {/* Partículas de Gergelim (Sutis) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -(100 + Math.random() * 400)]),
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: Math.random() * 360
          }}
          className="absolute w-1.5 h-3 bg-orange-200 rounded-full opacity-40 blur-[0.5px]"
        />
      ))}

    </div>
  );
};

export default FloatingIngredients;
