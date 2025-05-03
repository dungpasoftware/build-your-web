'use client';

import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';
import { motion } from 'framer-motion';
import AnimateOnScroll from './animations/AnimateOnScroll';
import AnimateStaggered from './animations/AnimateStaggered';

interface TemplateCardProps {
  image: string;
  title: string;
  category: string;
}

const TemplateCard = ({ image, title, category }: TemplateCardProps) => {
  return (
    <motion.div 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={520}
          height={486}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <motion.button 
            className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium mb-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View
          </motion.button>
          <Link href="#" className="text-white underline font-medium">
            Open template
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Link href="#" className="text-blue-600 hover:underline block text-center">
          {category}
        </Link>
      </div>
    </motion.div>
  );
};

const TemplatesSection = () => {
  const templates = [
    {
      image: placeholderImages.templateEcommerce,
      title: "Website template for a home goods store",
      category: "eCommerce"
    },
    {
      image: placeholderImages.templatePortfolio,
      title: "Website template for a portfolio site",
      category: "Portfolio"
    },
    {
      image: placeholderImages.templateBusiness,
      title: "Website template for a cleaning services site",
      category: "Business"
    },
    {
      image: placeholderImages.templateBlog,
      title: "Website template for a design blog",
      category: "Blog"
    },
    {
      image: placeholderImages.templateRestaurant,
      title: "Web site template for a restaurant",
      category: "Restaurant"
    },
    {
      image: placeholderImages.templateNonprofit,
      title: "Website template for a nonprofit organization",
      category: "Nonprofit"
    }
  ];

  return (
    <section className="py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimateOnScroll variant="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Or start from a designer-made template
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fadeIn" delay={0.2}>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Pick from 900+ free website templates, fully customizable and tailored to any business type.
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

        <AnimateStaggered staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.slice(0, 6).map((template, index) => (
            <TemplateCard
              key={index}
              image={template.image}
              title={template.title}
              category={template.category}
            />
          ))}
        </AnimateStaggered>
      </div>
    </section>
  );
};

export default TemplatesSection; 