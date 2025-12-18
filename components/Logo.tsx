
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Ícone de chamas (V) - SVG de alta definição com as cores originais */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-8 md:h-9 w-auto drop-shadow-sm transition-transform hover:scale-110"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chama da Esquerda - Vermelho Vibrante (#FE0031) */}
        <path 
          d="M22,25 C24,45 38,82 50,88 C40,93 25,88 14,68 C4,48 20,25 22,25 Z" 
          fill="#FE0031"
        />
        <path 
          d="M28,42 C30,58 38,78 48,84 C40,86 30,82 22,62 C16,45 26,42 28,42 Z" 
          fill="#FE0031" 
          opacity="0.5"
        />
        
        {/* Chama da Direita - Laranja Energético (#FF5700) */}
        <path 
          d="M78,25 C76,45 62,82 50,88 C60,93 75,88 86,68 C96,48 80,25 78,25 Z" 
          fill="#FF5700"
        />
        <path 
          d="M72,42 C70,58 62,78 52,84 C60,86 70,82 78,62 C84,45 74,42 72,42 Z" 
          fill="#FF5700" 
          opacity="0.8"
        />
      </svg>
      
      {/* Texto VELOCE. seguindo a identidade visual */}
      <div className="flex items-center select-none pt-0.5">
        <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-foreground uppercase">
          Veloce
        </span>
        <span className="text-[#FF5700] font-black text-xl md:text-2xl leading-none">.</span>
      </div>
    </div>
  );
};

export default Logo;
