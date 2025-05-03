'use client';

import { useState } from 'react';

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make your website official with your own domain name
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Enter your domain name"
                  className="w-full px-4 py-3 rounded-l-full rounded-r-full sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full sm:rounded-l-none sm:rounded-r-full transition-colors"
              >
                Search
              </button>
            </form>
          </div>
          
          <p className="text-gray-600 mt-6">
            Get a custom domain free for one year with the initial purchase of an annual Premium plan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomainSection; 