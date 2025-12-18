
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const BentoCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { language } = useLanguage();
  
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-2 row-span-1",
    large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
    tall: "col-span-1 row-span-1 md:row-span-2",
  };

  const category = project.category[language];
  const isAppetiteAppeal = category.toLowerCase().includes("appetite appeal");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-[1.8rem] md:rounded-[2rem] bg-neutral-900 border border-neutral-800 shadow-xl ${sizeClasses[project.size]} transition-all duration-500 min-h-[260px] md:min-h-[280px] active:scale-[0.98] md:active:scale-100`}
    >
      <div className="relative h-full w-full overflow-hidden">
        {project.badge && (
          <div className="absolute top-4 left-4 md:top-5 md:left-5 z-30">
            <div className="bg-accent text-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-lg">
              {project.badge[language]}
            </div>
          </div>
        )}

        <motion.img
          whileHover={{ scale: 1.05 }}
          src={project.image}
          alt={project.title[language]}
          className="h-full w-full object-cover opacity-85 group-hover:opacity-100 transition-all"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />
        
        <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end z-20">
          <div className="flex justify-between items-end gap-3">
            <div className="flex-1 min-w-0">
              <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mb-1.5 md:mb-2 inline-block border ${
                isAppetiteAppeal 
                  ? 'bg-accent text-white border-accent' 
                  : 'bg-white/10 text-white border-white/10 backdrop-blur-md'
              }`}>
                {category}
              </span>
              <h3 className="text-white font-display text-xl md:text-2xl font-bold tracking-tight">
                {project.title[language]}
              </h3>
            </div>
            
            <div className="shrink-0 bg-white text-neutral-900 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all shadow-xl">
              <ArrowUpRight size={20} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="pb-16 md:pb-24 pt-8 md:pt-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-12 md:mb-16 relative z-30">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-3 md:mb-4"
          >
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-black uppercase tracking-[0.3em] text-[8px] md:text-[9px]">
              {t.work.sectionLabel}
            </span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-foreground leading-none">
            {t.work.title}
          </h2>
          <p className="text-neutral-500 text-base md:text-lg font-medium max-w-md">
            {t.work.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[320px] gap-5 md:gap-6 relative z-30">
          {PROJECTS.map((project, index) => (
            <BentoCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
