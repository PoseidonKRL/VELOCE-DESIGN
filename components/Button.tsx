import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  icon
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black transition-all duration-300 text-[11px] tracking-[0.15em] uppercase relative overflow-hidden group";
  
  const variants = {
    primary: "bg-accent text-white shadow-[0_10px_25px_-5px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(234,88,12,0.5)]",
    secondary: "bg-white text-accent border border-orange-100",
    outline: "border-2 border-neutral-200 text-neutral-500 hover:border-accent hover:text-accent"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">{icon}</span>}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </motion.button>
  );
};

export default Button;