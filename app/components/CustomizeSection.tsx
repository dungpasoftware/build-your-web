'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from './animations/AnimateOnScroll';

const CustomizeSection = () => {
  const [activeTab, setActiveTab] = useState<string>('drag-drop');

  const tabs = [
    {
      id: 'drag-drop',
      title: 'Intuitive drag and drop',
      description: 'Effortlessly add and arrange your text, visuals, buttons and even entire sections.',
      image: placeholderImages.dragDropFeature
    },
    {
      id: 'ai-tools',
      title: 'Built-in AI tools',
      description: 'Generate and edit custom images, text, sections, layouts and more in no time.',
      image: placeholderImages.aiToolsFeature
    },
    {
      id: 'advanced-design',
      title: 'Advanced design features',
      description: 'Make your site stand out with scroll effects, animations and interactions—no code needed.',
      image: placeholderImages.advancedDesignFeature
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customize to make it your own
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-12">
          <AnimateOnScroll variant="slideRight" className="lg:w-1/3">
            {tabs.map((tab) => (
              <motion.div 
                key={tab.id}
                className={`mb-6 p-6 rounded-xl cursor-pointer transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white shadow-md border-l-4 border-blue-600' 
                    : 'hover:bg-white hover:shadow-sm'
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ x: activeTab === tab.id ? 0 : 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-3">{tab.title}</h3>
                <p className="text-gray-600">{tab.description}</p>
                <motion.button 
                  className={`mt-4 px-4 py-2 rounded-full text-sm transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeTab === tab.id ? 'Currently viewing' : 'View feature'}
                </motion.button>
              </motion.div>
            ))}

            <div className="mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeIn" className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={currentTab.image}
                    alt={currentTab.title}
                    width={1037}
                    height={581}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection; 