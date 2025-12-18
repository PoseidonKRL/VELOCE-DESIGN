
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FloatingIngredients: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Suavização para evitar "pulos" em conexões mobile ou scroll rápido
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // Animação dos letreiros (Marquee)
  const marqueeX = useTransform(smoothProgress, [0, 1], ["10%", "-50%"]);
  const marqueeXReverse = useTransform(smoothProgress, [0, 1], ["-50%", "10%"]);
  
  // CORREÇÃO: Opacidade mais generosa para não sumir no mobile
  // Agora começa a aparecer em 5% do scroll e só some nos últimos 5%
  const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // Efeitos de Parallax
  const textY = useTransform(smoothProgress, [0, 1], [60, -60]);
  const cardY = useTransform(smoothProgress, [0, 1], [-30, 30]);

  // Partículas persistentes
  const particles = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      speed: 150 + Math.random() * 400,
      opacity: 0.1 + Math.random() * 0.2
    }));
  }, []);

  return (
    <motion.div 
      ref={containerRef} 
      style={{ opacity }}
      className="relative py-24 md:py-56 overflow-hidden pointer-events-none select-none z-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/10 to-transparent" />

      {/* Marquee Superior */}
      <motion.div 
        style={{ x: marqueeX }}
        className="flex whitespace-nowrap mb-12 md:mb-20 rotate-[-1deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[15vw] md:text-[9vw] font-display font-black text-transparent stroke-accent opacity-10 uppercase tracking-tighter mr-12 md:mr-24" style={{ WebkitTextStroke: '1px #EA580C' }}>
            {t.common.juiciness} • {t.common.design} • {t.common.conversion} • 
          </span>
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-32">
          
          <motion.div 
            style={{ y: textY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center lg:text-left pointer-events-auto"
          >
            <div className="inline-block px-5 py-2.5 bg-white rounded-2xl shadow-xl border border-orange-50 mb-6 md:mb-10">
               <span className="text-accent font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em]">{t.common.secretSauce}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-foreground leading-[0.95] tracking-tighter">
              {t.floating.titleLine1} <br className="hidden sm:block" />
              <span className="text-accent italic">{t.floating.titleLine2}</span>
            </h2>
          </motion.div>

          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-full sm:max-w-[340px] pointer-events-auto w-full"
          >
            <div className="bg-white overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(234,88,12,0.15)] border border-orange-50/50">
              <div className="bg-accent p-4 md:p-5 flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white">
                  <Info size={18} strokeWidth={2.5} />
                </div>
              </div>
              <div className="p-7 md:p-9 pt-6">
                <h4 className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                  {t.hero.definitionTitle}
                </h4>
                <p className="text-neutral-600 text-[16px] md:text-[18px] leading-relaxed font-semibold italic">
                  {t.hero.definitionText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Inferior */}
      <motion.div 
        style={{ x: marqueeXReverse }}
        className="flex whitespace-nowrap mt-12 md:mt-24 rotate-[1deg]"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-[15vw] md:text-[9vw] font-display font-black text-accent/5 uppercase tracking-tighter mr-12 md:mr-24">
            {t.common.appetiteAppeal} • {t.common.branding} • {t.common.digitalMenu} • 
          </span>
        ))}
      </motion.div>

      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{ 
            y: useTransform(smoothProgress, [0, 1], [0, -p.speed]),
            left: p.left,
            top: p.top,
            opacity: p.opacity
          }}
          className="absolute w-1 h-2 md:w-1.5 md:h-3 bg-orange-300 rounded-full blur-[0.5px]"
        />
      ))}
    </motion.div>
  );
};

export default FloatingIngredients;
