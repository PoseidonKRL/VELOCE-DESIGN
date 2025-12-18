
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SKILLS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { useRef } from 'react';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Função para destacar o termo Appetite Appeal
  const renderHighlightedText = (text: string) => {
    const term = "Appetite Appeal";
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={i} className="bg-accent text-white px-2 py-0.5 rounded-lg mx-0.5 inline-block font-bold shadow-md transform -rotate-1">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 text-white rounded-[3rem] overflow-hidden relative border border-white/5 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Visual Column */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <motion.img 
                style={{ y: imageY }}
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop" 
                alt="Burger" 
                className="absolute top-[-20%] left-0 w-full h-[140%] object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
            </div>

            {/* Content Column */}
            <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6">{t.common.expertiseLabel}</span>
              <motion.h2 
                className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[0.95]"
              >
                {t.about.titleLine1} <br/>
                <span className="text-accent">{t.about.titleLine2}</span>
              </motion.h2>

              <div className="space-y-6 text-base md:text-lg text-white/60 font-medium leading-relaxed max-w-lg">
                <p>{renderHighlightedText(t.about.p1)}</p>
                <p className="italic text-white/90 border-l-2 border-accent/50 pl-6">{t.about.p2}</p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => (
                    <span 
                      key={skill.name.en}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 rounded-xl text-[10px] font-bold uppercase tracking-widest"
                    >
                      {renderHighlightedText(skill.name[language])}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
