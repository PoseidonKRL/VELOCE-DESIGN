
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Star, Award, Play } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const yWatermark = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityWatermark = useTransform(scrollY, [0, 400], [0.04, 0]);

  const renderDescription = (text: string) => {
    const term = "Appetite Appeal";
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={i} className="bg-accent text-white px-2 py-0.5 rounded-lg mx-0.5 inline-block font-bold shadow-sm transform -rotate-1">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <section className="relative min-h-[700px] md:h-screen md:min-h-[800px] flex items-center overflow-hidden pt-32 pb-12 md:py-0">
      {/* Texto de Fundo Gigante (Watermark) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <motion.span 
          style={{ y: yWatermark, opacity: opacityWatermark }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.04 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[38vw] leading-none text-accent uppercase tracking-tighter"
        >
          VELOCE
        </motion.span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-12 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-orange-100 text-accent px-4 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Star size={10} fill="currentColor" />
              {t.common.est}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-extrabold tracking-tight text-foreground leading-[0.95] mb-6 md:mb-8"
            >
              {t.hero.titleLine1} <br className="hidden md:block" />
              <span className="text-accent italic font-light font-sans tracking-tighter mr-2 opacity-20 md:opacity-10">/</span>
              {t.hero.titleLine2} <br className="hidden md:block" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600">
                {t.hero.titleSpan}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-neutral-500 max-w-xl mb-8 md:mb-12 leading-relaxed font-medium mx-auto lg:mx-0"
            >
              {renderDescription(t.hero.description)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Button 
                variant="primary" 
                icon={<ArrowDownRight size={22} />}
                onClick={() => {
                  const el = document.getElementById('work');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto h-16 md:h-20 px-10 md:px-12 text-base md:text-lg rounded-2xl md:rounded-[2rem]"
              >
                {t.hero.viewProjects}
              </Button>
              <div className="flex items-center gap-4 text-neutral-400 font-bold uppercase tracking-widest text-[9px] sm:border-l-2 border-neutral-200 pl-0 sm:pl-6 leading-relaxed">
                {t.common.exploreMenu}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative p-6 md:p-12">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-white p-3 md:p-5 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-white z-10"
              >
                <div className="overflow-hidden rounded-[2rem] md:rounded-[3rem]">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop" 
                    alt="Appetite Appeal" 
                    className="w-full h-64 sm:h-80 md:h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Badges - Posicionamento mobile corrigido para evitar clipping */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 md:-top-4 md:-right-6 z-30 bg-neutral-900 text-white px-4 py-3 md:px-8 md:py-5 rounded-xl md:rounded-[1.5rem] flex items-center gap-2 md:gap-4 shadow-xl"
              >
                <div className="bg-accent p-1.5 md:p-2 rounded-lg">
                  <Play size={12} fill="currentColor" className="text-white ml-0.5" />
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest md:tracking-[0.3em]">{t.common.motionArt}</span>
              </motion.div>

              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 md:-bottom-6 md:-left-10 z-30 bg-white px-4 py-3 md:px-8 md:py-5 rounded-xl md:rounded-[1.5rem] shadow-xl border border-orange-50 flex items-center gap-2 md:gap-4"
              >
                <div className="bg-orange-50 text-accent p-1.5 md:p-2 rounded-lg">
                  <Award className="w-3.5 h-3.5 md:w-5 md:h-5" />
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase tracking-widest md:tracking-[0.3em] text-neutral-800">{t.common.premiumVisuals}</span>
              </motion.div>

              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/[0.04] blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
