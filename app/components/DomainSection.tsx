'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from './animations/AnimateOnScroll';

const DomainSection = () => {
  const [domainName, setDomainName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Domain search logic would go here
    console.log('Searching for domain:', domainName);
  };

  return (
    <section className="py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll variant="slideUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make your website official with your own domain name
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="flex-grow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Enter your domain name"
                  className="w-full px-4 py-3 rounded-l-full rounded-r-full sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full sm:rounded-l-none sm:rounded-r-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </motion.button>
            </motion.form>
          </div>
          
          <motion.p 
            className="text-gray-600 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get a custom domain free for one year with the initial purchase of an annual Premium plan.
          </motion.p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default DomainSection; 