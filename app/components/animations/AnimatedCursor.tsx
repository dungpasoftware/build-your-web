'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Add event listeners only on the client side
    const mouseMoveHandler = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const mouseDownHandler = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    const mouseLinkHoverHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      setLinkHovered(
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const mouseOutHandler = () => {
      setHidden(true);
    };

    const mouseEnterHandler = () => {
      setHidden(false);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseover', mouseLinkHoverHandler as EventListener);
    document.addEventListener('mouseout', mouseOutHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mouseover', mouseLinkHoverHandler as EventListener);
      document.removeEventListener('mouseout', mouseOutHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: hidden ? 0 : 1
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 0.8,
      opacity: hidden ? 0 : 1
    },
    hovered: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 1.5,
      opacity: hidden ? 0 : 0.6
    }
  };

  const springTransition = {
    type: 'spring',
    damping: 25,
    stiffness: 300
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-blue-600 rounded-full pointer-events-none mix-blend-difference z-50"
      variants={variants}
      animate={clicked ? 'clicked' : linkHovered ? 'hovered' : 'default'}
      transition={springTransition}
    />
  );
};

export default AnimatedCursor; 