'use client';

import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';
import { motion } from 'framer-motion';
import AnimateOnScroll from './animations/AnimateOnScroll';
import ParallaxScroll from './animations/ParallaxScroll';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimateOnScroll variant="slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Create a website without limits
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fadeIn" delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mb-10">
              Bring your vision to life with the website builder that gives you the tools you need to succeed.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fadeIn" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
              <p className="text-sm mt-2 text-gray-600">
                Start for free. No credit card required.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="scale" delay={0.6}>
          <div className="relative mt-16">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={placeholderImages.websiteBuilderDemo}
                alt="A homepage built by a website builder"
                width={1000}
                height={600}
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements with parallax effect */}
            <ParallaxScroll direction="up" intensity={0.3} className="absolute -top-10 -right-10 z-10">
              <motion.div 
                className="w-32 h-32 bg-blue-100 opacity-50 rounded-full hidden md:block"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              ></motion.div>
            </ParallaxScroll>
            
            <ParallaxScroll direction="down" intensity={0.2} className="absolute -bottom-8 -left-8 z-10">
              <motion.div 
                className="w-24 h-24 bg-yellow-100 opacity-50 rounded-full hidden md:block"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse", 
                  delay: 1 
                }}
              ></motion.div>
            </ParallaxScroll>
            
            <ParallaxScroll direction="right" intensity={0.15} className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
              <motion.div
                className="w-16 h-16 bg-green-100 opacity-50 rounded-full hidden md:block"
                animate={{
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
              ></motion.div>
            </ParallaxScroll>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HeroSection; 