import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-left': '-translate-x-10 opacity-0',
    'fade-right': 'translate-x-10 opacity-0',
    'zoom-in': 'scale-95 opacity-0',
    'fade': 'opacity-0',
  };

  return (
    <div
      ref={ref as any}
      className={`transform transition-all duration-1000 ease-out ${className} ${
        isInView ? 'motion-safe:animate-in' : animations[animation]
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}