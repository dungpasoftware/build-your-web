import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Create a website without limits
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-10">
            Bring your vision to life with the website builder that gives you the tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Get Started
            </Link>
            <p className="text-sm mt-2 text-gray-600">
              Start for free. No credit card required.
            </p>
          </div>
        </div>

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
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 opacity-50 rounded-full hidden md:block"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-100 opacity-50 rounded-full hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 