
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FloatingIngredients: React.FC = () => {
  const { t } = useLanguage();
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

      {/* Marquee 1 - Superior */}
      <motion.div 
        style={{ x: marqueeX, opacity }}
        className="flex whitespace-nowrap mb-12 rotate-[-2deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[10vw] font-display font-black text-transparent stroke-accent opacity-25 uppercase tracking-tighter mr-20" style={{ WebkitTextStroke: '2px #EA580C' }}>
            {t.common.juiciness} • {t.common.design} • {t.common.conversion} • 
          </span>
        ))}
      </motion.div>

      {/* Conteúdo Central e Card Explicativo */}
      <div className="container mx-auto px-6 relative z-10 my-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center lg:text-left pointer-events-auto"
          >
            <div className="inline-block p-4 bg-white rounded-3xl shadow-food border border-orange-50 mb-8 rotate-1">
               <span className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">{t.common.secretSauce}</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-foreground leading-tight tracking-tighter">
              {t.floating.titleLine1} <br/>
              <span className="text-accent italic">{t.floating.titleLine2}</span>
            </h2>
          </motion.div>

          {/* Card Appetite Appeal Re-integrado aqui */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-[280px] pointer-events-auto"
          >
            <div className="bg-white/95 backdrop-blur-3xl border border-orange-100 p-8 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(234,88,12,0.2)] relative">
              <div className="absolute -top-3 -left-3 bg-accent text-white p-2.5 rounded-2xl shadow-lg animate-pulse">
                <div className="flex items-center justify-center w-full h-full">
                   <Info size={18} />
                </div>
              </div>
              <h4 className="text-accent font-black uppercase tracking-[0.25em] text-[10px] mb-3">
                {t.hero.definitionTitle}
              </h4>
              <p className="text-neutral-600 text-[13px] leading-relaxed font-semibold italic">
                {t.hero.definitionText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee 2 - Inferior */}
      <motion.div 
        style={{ x: marqueeXReverse, opacity }}
        className="flex whitespace-nowrap mt-12 rotate-[2deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[10vw] font-display font-black text-accent/15 uppercase tracking-tighter mr-20">
            {t.common.appetiteAppeal} • {t.common.branding} • {t.common.digitalMenu} • 
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
