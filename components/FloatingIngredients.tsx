
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

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const marqueeXReverse = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative py-24 md:py-40 overflow-hidden pointer-events-none select-none">
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/20 to-transparent" />

      {/* Marquee 1 - Superior */}
      <motion.div 
        style={{ x: marqueeX, opacity }}
        className="flex whitespace-nowrap mb-8 md:mb-12 rotate-[-2deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[15vw] md:text-[10vw] font-display font-black text-transparent stroke-accent opacity-20 uppercase tracking-tighter mr-10 md:mr-20" style={{ WebkitTextStroke: '1px #EA580C' }}>
            {t.common.juiciness} • {t.common.design} • {t.common.conversion} • 
          </span>
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 my-12 md:my-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center lg:text-left pointer-events-auto"
          >
            <div className="inline-block px-4 py-2 md:p-4 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-orange-50 mb-6 md:mb-8 md:rotate-1">
               <span className="text-accent font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em]">{t.common.secretSauce}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.1] tracking-tighter">
              {t.floating.titleLine1} <br className="hidden sm:block" />
              <span className="text-accent italic">{t.floating.titleLine2}</span>
            </h2>
          </motion.div>

          {/* Card Appetite Appeal - Fiel ao Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-full sm:max-w-[340px] pointer-events-auto w-full group"
          >
            <div className="bg-white overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(234,88,12,0.15)] border border-orange-50/50">
              {/* Header Laranja Sólido do Card */}
              <div className="bg-accent p-4 flex items-center">
                <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center text-white">
                  <Info size={18} strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Conteúdo do Card */}
              <div className="p-8 pt-6">
                <h4 className="text-accent font-black uppercase tracking-[0.25em] text-[10px] mb-4">
                  {t.hero.definitionTitle}
                </h4>
                <p className="text-neutral-600 text-[15px] md:text-[16px] leading-relaxed font-semibold italic">
                  {t.hero.definitionText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee 2 - Inferior */}
      <motion.div 
        style={{ x: marqueeXReverse, opacity }}
        className="flex whitespace-nowrap mt-8 md:mt-12 rotate-[2deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[15vw] md:text-[10vw] font-display font-black text-accent/10 uppercase tracking-tighter mr-10 md:mr-20">
            {t.common.appetiteAppeal} • {t.common.branding} • {t.common.digitalMenu} • 
          </span>
        ))}
      </motion.div>

      {/* Partículas Decorativas Otimizadas */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -(150 + Math.random() * 300)]),
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: Math.random() * 360
          }}
          className="absolute w-1 h-2 md:w-1.5 md:h-3 bg-orange-200 rounded-full opacity-30 md:opacity-40 blur-[0.5px]"
        />
      ))}
    </div>
  );
};

export default FloatingIngredients;
