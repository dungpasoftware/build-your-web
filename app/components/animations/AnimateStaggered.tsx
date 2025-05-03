'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimateStaggeredProps {
  children: ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
}

const AnimateStaggered = ({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className = '',
}: AnimateStaggeredProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  // Get React children as an array
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimateStaggered; 