'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateOnScroll from './animations/AnimateOnScroll';
import AnimateStaggered from './animations/AnimateStaggered';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant="slideUp">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <motion.div 
                className="text-2xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-blue-500">Wix</span>
              </motion.div>
              <p className="mb-6 max-w-md">
                The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#" className="hover:text-white">About</Link>
                </motion.div>
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#" className="hover:text-white">Contact Us</Link>
                </motion.div>
              </div>
            </div>

            <AnimateStaggered>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Website Templates</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Website Builder</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Website Design</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Wix Features</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">App Market</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Domain Names</Link></motion.div></li>
                </ul>
              </div>
            </AnimateStaggered>

            <AnimateStaggered>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Solutions</h3>
                <ul className="space-y-3">
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Online Store</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Online Booking</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Restaurant Website</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Blog Website</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Portfolio Website</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Wix Studio</Link></motion.div></li>
                </ul>
              </div>
            </AnimateStaggered>

            <AnimateStaggered>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Help Center</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Hire a Professional</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Report Abuse</Link></motion.div></li>
                  <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">System Status</Link></motion.div></li>
                </ul>
              </div>
            </AnimateStaggered>
          </div>
        </AnimateOnScroll>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <ul className="flex flex-wrap gap-4">
                <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Terms of Use</Link></motion.div></li>
                <li><motion.div whileHover={{ x: 3 }}><Link href="#" className="hover:text-white">Privacy Policy</Link></motion.div></li>
              </ul>
            </div>
            <motion.div
              className="text-sm"
              whileHover={{ scale: 1.05 }}
            >
              © 2006-{new Date().getFullYear()} Wix.com, Inc
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 