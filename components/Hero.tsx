
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

  // Função para destacar o termo Appetite Appeal
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
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Texto de Fundo Gigante (Watermark) - Refinado */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-orange-100 text-accent px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm"
            >
              <Star size={12} fill="currentColor" />
              EST. 2024 • Gastronomic Branding
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[6.5rem] font-extrabold tracking-tight text-foreground leading-[0.9] mb-8"
            >
              {t.hero.titleLine1} <br/>
              <span className="text-accent italic font-light font-sans tracking-tighter mr-4 opacity-10">/</span>
              {t.hero.titleLine2} <br/>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600">
                {t.hero.titleSpan}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-500 max-w-xl mb-12 leading-relaxed font-medium"
            >
              {renderDescription(t.hero.description)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button 
                variant="primary" 
                icon={<ArrowDownRight size={22} />}
                onClick={() => {
                  const el = document.getElementById('work');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-20 px-12 text-lg rounded-[2rem]"
              >
                {t.hero.viewProjects}
              </Button>
              <div className="flex items-center gap-5 text-neutral-400 font-bold uppercase tracking-widest text-[10px] border-l-2 border-neutral-200 pl-6 leading-relaxed">
                Explore o menu <br/> de projetos
              </div>
            </motion.div>
          </div>

          {/* Lado Direito: Composição Visual Premium */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative p-12">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0] 
                }}
                transition={{ 
                  opacity: { duration: 1.2 },
                  scale: { duration: 1.2 },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative bg-white p-5 rounded-[4rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.18)] border border-white z-10"
              >
                <div className="overflow-hidden rounded-[3rem]">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop" 
                    alt="Appetite Appeal Hero" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Badges Harmônicos */}
              <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-6 z-30 bg-neutral-900 text-white px-8 py-5 rounded-[1.5rem] flex items-center gap-4 shadow-2xl border border-neutral-800"
              >
                <div className="bg-accent p-2 rounded-xl">
                  <Play size={16} fill="currentColor" className="text-white ml-0.5" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Motion Art</span>
              </motion.div>

              <motion.div 
                animate={{ y: [20, -20, 20], rotate: [0, -3, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 z-30 bg-white px-8 py-5 rounded-[1.5rem] shadow-2xl border border-neutral-50 flex items-center gap-4"
              >
                <div className="bg-orange-50 text-accent p-2 rounded-xl">
                  <Award size={20} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-800">Premium Visuals</span>
              </motion.div>

              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-accent/[0.05] blur-[140px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
