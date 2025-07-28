import * as React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
  magneticStrength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'default',
  magneticStrength = 0.3,
  onClick,
  href,
  target,
  rel,
  ...props 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 100; // Maximum distance for magnetic effect
    
    if (distance < maxDistance) {
      setPosition({
        x: deltaX * magneticStrength,
        y: deltaY * magneticStrength
      });
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const buttonContent = (
    <motion.div
      className="relative z-10 flex items-center justify-center gap-2"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );

  const buttonElement = (
    <Button
      ref={buttonRef}
      variant={variant}
      size={size}
      className={`relative overflow-hidden group transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {/* Magnetic glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-md opacity-0"
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1.05 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      
      {/* Ripple effect on hover */}
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-md opacity-0"
        animate={{
          opacity: isHovering ? [0, 0.3, 0] : 0,
          scale: isHovering ? [0.8, 1.2] : 0.8,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />
      
      {buttonContent}
    </Button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
}