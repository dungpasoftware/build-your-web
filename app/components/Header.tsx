'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className="w-full py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between border-b"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-blue-600">Wix</span>
          </Link>
        </motion.div>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <motion.button 
            className="flex items-center space-x-1 hover:text-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Product</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </motion.button>
          <motion.div 
            className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-6 z-50 w-[600px] left-[-200px] grid grid-cols-2 gap-4"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <h3 className="font-semibold mb-2 text-gray-500">CREATION</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-600 block">Website design</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">Website templates</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">AI website builder</Link></li>
              </ul>
              <h3 className="font-semibold mt-4 mb-2 text-gray-500">BUSINESS</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-600 block">eCommerce</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">Scheduling</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">Restaurant</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-500">ESSENTIALS</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-600 block">Domain names</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">Web hosting</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">Website security</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="relative group">
          <motion.button 
            className="flex items-center space-x-1 hover:text-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Solutions</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </motion.button>
          <motion.div 
            className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-6 z-50 w-[600px] left-[-200px] grid grid-cols-2 gap-4"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <h3 className="font-semibold mb-2 text-gray-500">MANAGEMENT</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-600 block">Payment solutions</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">Mobile app</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">All business features</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-500">GROWTH</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-600 block">Email marketing</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">SEO tools</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">All marketing features</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="relative group">
          <motion.button 
            className="flex items-center space-x-1 hover:text-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Resources</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </motion.button>
          <motion.div 
            className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-6 z-50 w-[500px] left-[-200px]"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <h3 className="font-semibold mb-2 text-gray-500">EXPLORE</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-600 block">Wix Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">AI features</Link></li>
                <li><Link href="#" className="hover:text-blue-600 block">Web design inspiration</Link></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#pricing" className="hover:text-blue-600">Pricing</Link>
        </motion.div>
      </nav>

      <div className="flex items-center space-x-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#" className="hidden md:block hover:text-blue-600">
            Enterprise
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href="#" 
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 