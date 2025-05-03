'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxScrollProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: number;
  className?: string;
}

const ParallaxScroll = ({
  children,
  direction = 'up',
  intensity = 0.2,
  className = '',
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Create transform values based on direction
  const xValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' 
      ? ['0%', `${-100 * intensity}%`] 
      : direction === 'right'
        ? ['0%', `${100 * intensity}%`]
        : ['0%', '0%']
  );

  const yValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' 
      ? ['0%', `${-100 * intensity}%`] 
      : direction === 'down'
        ? ['0%', `${100 * intensity}%`]
        : ['0%', '0%']
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ x: xValue, y: yValue }}>{children}</motion.div>
    </div>
  );
};

export default ParallaxScroll; 