import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from './placeholders';

const AiBuilderSection = () => {
  return (
    <section className="py-16 px-6 md:py-24 md:px-8 lg:py-32 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Create your site in minutes with our AI website builder
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Describe what you want and get a unique, business-ready website tailored just for you.
          </p>
          <Link
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <Image
              src={placeholderImages.aiBuilderDemo}
              alt="AI website builder interface"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            
            {/* Interactive overlay elements */}
            <div className="absolute top-1/4 left-1/4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm animate-pulse">
              AI is designing your site
            </div>
            <div className="absolute bottom-1/4 right-1/4 bg-white text-blue-600 px-4 py-2 rounded-full text-sm shadow-md">
              Fully customizable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiBuilderSection; 