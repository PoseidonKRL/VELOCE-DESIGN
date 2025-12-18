
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import Footer from './components/Footer';
import FloatingIngredients from './components/FloatingIngredients';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground font-sans selection:bg-accent/20 selection:text-accent">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent origin-left z-[70]"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Nova Transição Narrativa Tipográfica */}
        <FloatingIngredients />
        
        <div className="relative z-20">
           <BentoGrid />
        </div>
        
        <About />
      </main>

      <Footer />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-100/20 blur-[130px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
      </div>
    </div>
  );
};

export default App;
