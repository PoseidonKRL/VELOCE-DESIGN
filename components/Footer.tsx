import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-accent text-white py-24 rounded-t-[3rem] mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12 leading-[0.9]">
            {t.footer.ctaLine1} <br/>
            {t.footer.ctaLine2}
          </h2>
          <a 
            href="mailto:chef@veloce.design"
            className="group inline-flex items-center gap-4 text-2xl md:text-4xl border-b-2 border-white/20 pb-2 hover:border-white transition-all font-black tracking-tight"
          >
            chef@veloce.design
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-24 pt-12 border-t border-white/10">
          <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Veloce Design • {t.footer.copyright}</p>
          </div>

          <div className="flex gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                className="text-[10px] font-black uppercase tracking-widest hover:text-orange-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;