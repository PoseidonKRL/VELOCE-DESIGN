
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Instagram, MessageCircle, Utensils } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, toggleLanguage, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center justify-between px-5 md:px-6 transition-all duration-500 rounded-full border border-orange-100/50 shadow-lg pointer-events-auto ${
            isScrolled 
              ? 'py-2 bg-white/80 backdrop-blur-xl w-full max-w-4xl' 
              : 'py-3 bg-white/40 backdrop-blur-md w-full max-w-5xl'
          }`}
        >
          {/* Logo - Identidade original mantida */}
          <a href="#" className="flex items-center gap-2 text-lg font-black tracking-tighter text-accent group">
            <Utensils size={18} className="group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">VELOCE.</span>
            <span className="sm:hidden">V.</span>
          </a>

          {/* Desktop Navigation - Exatamente como no PC perfeito */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[10px] font-bold text-neutral-500 hover:text-accent transition-colors uppercase tracking-[0.2em]"
                >
                  {item.label[language]}
                </a>
              ))}
            </div>
            
            <div className="h-3 w-px bg-neutral-200" />

            {/* Seletor de Idioma Desktop */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 hover:text-accent transition-colors tracking-widest"
            >
              <span className={language === 'pt' ? 'text-accent' : ''}>PT</span>
              <span className="opacity-30">/</span>
              <span className={language === 'en' ? 'text-accent' : ''}>EN</span>
            </button>

            <Button 
              variant="primary" 
              onClick={() => {
                 const el = document.getElementById('contact');
                 el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 h-auto text-[9px] rounded-full"
            >
              {t.nav.letsTalk}
            </Button>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              className="text-accent p-2 bg-white/50 rounded-full border border-orange-50"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.header>
      </div>

      {/* Overlay do Menu Mobile - Movido para fora para evitar bugs de clipping */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-[100] flex flex-col md:hidden"
          >
            {/* Background animado mobile sutil */}
            <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="flex justify-between items-center p-8 relative z-10">
              <div className="flex items-center gap-2 text-xl font-black text-accent">
                 <Utensils size={24} />
                 <span>VELOCE.</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-white rounded-2xl shadow-lg text-accent border border-orange-50"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 gap-10 relative z-10">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  key={item.href}
                  href={item.href}
                  className="text-5xl font-display font-extrabold text-foreground tracking-tighter"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label[language]}
                </motion.a>
              ))}
            </div>

            <div className="p-10 border-t border-orange-100 bg-white/40 backdrop-blur-md relative z-10">
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-6">
                  <a href="#" className="p-3 bg-white rounded-xl shadow-sm border border-orange-50 text-accent">
                    <Instagram size={22} />
                  </a>
                  <a href="#" className="p-3 bg-white rounded-xl shadow-sm border border-orange-50 text-accent">
                    <MessageCircle size={22} />
                  </a>
                </div>
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-orange-100 text-[11px] font-black uppercase tracking-widest text-neutral-400"
                >
                  <span className={language === 'pt' ? 'text-accent' : ''}>PT</span>
                  <span className="opacity-30">/</span>
                  <span className={language === 'en' ? 'text-accent' : ''}>EN</span>
                </button>
              </div>
              <Button 
                className="w-full h-16 text-xs rounded-2xl shadow-xl" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t.nav.letsTalk}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
