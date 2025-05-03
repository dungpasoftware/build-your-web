import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-6">
              <span className="text-blue-500">Wix</span>
            </div>
            <p className="mb-6 max-w-md">
              The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">About</Link>
              <Link href="#" className="hover:text-white">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Website Templates</Link></li>
              <li><Link href="#" className="hover:text-white">Website Builder</Link></li>
              <li><Link href="#" className="hover:text-white">Website Design</Link></li>
              <li><Link href="#" className="hover:text-white">Wix Features</Link></li>
              <li><Link href="#" className="hover:text-white">App Market</Link></li>
              <li><Link href="#" className="hover:text-white">Domain Names</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Online Store</Link></li>
              <li><Link href="#" className="hover:text-white">Online Booking</Link></li>
              <li><Link href="#" className="hover:text-white">Restaurant Website</Link></li>
              <li><Link href="#" className="hover:text-white">Blog Website</Link></li>
              <li><Link href="#" className="hover:text-white">Portfolio Website</Link></li>
              <li><Link href="#" className="hover:text-white">Wix Studio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white">Hire a Professional</Link></li>
              <li><Link href="#" className="hover:text-white">Report Abuse</Link></li>
              <li><Link href="#" className="hover:text-white">System Status</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <ul className="flex flex-wrap gap-4">
                <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="text-sm">
              © 2006-{new Date().getFullYear()} Wix.com, Inc
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 