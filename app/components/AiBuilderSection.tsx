'use client';

import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';
import { motion } from 'framer-motion';
import AnimateOnScroll from './animations/AnimateOnScroll';

const AiBuilderSection = () => {
  return (
    <section className="py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <AnimateOnScroll variant="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Create your site in minutes with our AI website builder
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fadeIn" delay={0.2}>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Describe what you want and get a unique, business-ready website tailored just for you.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fadeIn" delay={0.3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Get Started
              </Link>
            </motion.div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fadeIn" delay={0.5}>
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <Image
                src={placeholderImages.aiBuilderDemo}
                alt="AI website builder interface"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
              
              {/* Interactive overlay elements with animations */}
              <motion.div 
                className="absolute top-1/4 left-1/4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                AI is designing your site
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 right-1/4 bg-white text-blue-600 px-4 py-2 rounded-full text-sm shadow-md"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                Fully customizable
              </motion.div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default AiBuilderSection; 