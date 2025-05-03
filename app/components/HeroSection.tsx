'use client';

import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-10 right-[5%] md:right-[10%] w-[160px] h-[220px] pointer-events-none z-0 hidden md:block opacity-70"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src={placeholderImages.decorBlue}
          alt="Decorative element"
          fill
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-[5%] md:left-[10%] w-[180px] h-[160px] pointer-events-none z-0 hidden md:block opacity-70"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Image
          src={placeholderImages.decorYellow}
          alt="Decorative element"
          fill
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 left-[3%] w-[40px] h-[40px] pointer-events-none z-0 hidden md:block opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <Image
          src={placeholderImages.decorGreen}
          alt="Decorative element"
          fill
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Create a website without limits
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl max-w-2xl mb-10">
              Bring your vision to life with the website builder that gives you the tools you need to succeed.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors block text-center w-full sm:w-auto"
              >
                Get Started
              </Link>
            </motion.div>
            <p className="text-sm text-gray-600 mt-2 sm:mt-0">
              Start for free. No credit card required.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="relative mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={placeholderImages.websiteBuilderDemo}
              alt="A homepage built by a website builder"
              width={1200}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Floating animation elements for more dynamic feel */}
          <motion.div 
            className="absolute -top-6 right-1/4 w-6 h-6 bg-blue-500 opacity-20 rounded-full hidden md:block"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-10 right-10 w-8 h-8 bg-yellow-400 opacity-20 rounded-full hidden md:block"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse", 
              delay: 1 
            }}
          />
          
          <motion.div 
            className="absolute top-1/3 left-10 w-4 h-4 bg-green-400 opacity-20 rounded-full hidden md:block"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 