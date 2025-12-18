import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Globe, Utensils } from 'lucide-react';
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

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between px-6 transition-all duration-500 rounded-full border border-orange-100/50 shadow-lg ${
          isScrolled 
            ? 'py-2 bg-white/70 backdrop-blur-xl w-full max-w-4xl' 
            : 'py-3 bg-white/40 backdrop-blur-md w-full max-w-5xl'
        }`}
      >
        {/* Logo Slim */}
        <a href="#" className="flex items-center gap-2 text-lg font-black tracking-tighter text-accent group">
          <Utensils size={18} className="group-hover:rotate-12 transition-transform" />
          <span>VELOCE.</span>
        </a>

        {/* Desktop Nav - Ultra Clean */}
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

          {/* Language Toggle */}
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
            onClick={() => window.location.href = '#contact'}
            className="px-5 py-2.5 h-auto text-[9px] rounded-full"
          >
            {t.nav.letsTalk}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-accent p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl p-6 shadow-2xl border border-orange-100"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-black text-foreground uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label[language]}
                </a>
              ))}
              <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                {t.nav.letsTalk}
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </div>
  );
};

export default Header;