import React from 'react';
import { motion, MotionProps } from 'framer-motion';

type CardVariant = 'glass' | 'solid' | 'gradient';

type CardProps = {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  animate?: boolean;
} & MotionProps;

export function Card({
  children,
  variant = 'glass',
  className = '',
  animate = false,
  ...motionProps
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variantStyles = {
    glass: 'bg-dark-800/30 backdrop-blur-md border border-dark-700/50',
    solid: 'bg-dark-800 border border-dark-700',
    gradient: 'bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700/50',
  };
  
  const Component = animate ? motion.div : 'div';
  
  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...(animate ? motionProps : {})}
    >
      {children}
    </Component>
  );
}