'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from './animations/AnimateOnScroll';

const BusinessFeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<string>('ecommerce');

  const features = [
    {
      id: 'ecommerce',
      title: 'eCommerce',
      description: 'Sell online and manage orders, shipping and more in one place.',
      learnMoreLink: '#',
      image: placeholderImages.ecommerceFeature
    },
    {
      id: 'scheduling',
      title: 'Scheduling',
      description: 'Offer services, accept bookings, get paid and manage your staff.',
      learnMoreLink: '#',
      image: placeholderImages.schedulingFeature
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Showcase your work and attract new clients with an online portfolio.',
      learnMoreLink: '#',
      image: placeholderImages.portfolioFeature
    },
    {
      id: 'blog',
      title: 'Blog',
      description: 'Create a blog to grow your community and drive more traffic.',
      learnMoreLink: '#',
      image: placeholderImages.blogFeature
    },
    {
      id: 'courses',
      title: 'Online courses',
      description: 'Create, promote and sell courses and coaching programs.',
      learnMoreLink: '#',
      image: placeholderImages.coursesFeature
    },
    {
      id: 'events',
      title: 'Events',
      description: 'Sell tickets, manage RSVPs and promote online or in-person events.',
      learnMoreLink: '#',
      image: placeholderImages.eventsFeature
    }
  ];

  const currentFeature = features.find(feature => feature.id === activeFeature) || features[0];

  return (
    <section className="py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="slideUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Add anything you need for your business as you go
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-12">
          <AnimateOnScroll variant="slideRight" className="lg:w-1/3 grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <motion.div 
                key={feature.id}
                className={`p-5 rounded-xl cursor-pointer transition-all ${
                  activeFeature === feature.id 
                    ? 'bg-white shadow-md border-2 border-blue-600' 
                    : 'hover:bg-white hover:shadow-sm border-2 border-transparent'
                }`}
                onClick={() => setActiveFeature(feature.id)}
                whileHover={{ scale: activeFeature === feature.id ? 1 : 1.03 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <motion.button 
                  className={`px-4 py-1 rounded-full text-xs transition-colors ${
                    activeFeature === feature.id 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open
                </motion.button>
              </motion.div>
            ))}
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeIn" className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">{currentFeature.title}</h3>
                    <p className="text-gray-600 mb-4">{currentFeature.description}</p>
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      <Link href={currentFeature.learnMoreLink} className="text-blue-600 hover:underline font-medium">
                        Learn more
                      </Link>
                    </motion.span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <Image
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      width={1140}
                      height={625}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeaturesSection; 