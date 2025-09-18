import { useState } from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">BlueAnchor</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              No one does shipping like us since 1989
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Subscribe Now</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Industry Served */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industry Served</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Frozen Food</li>
              <li>Automobile</li>
              <li>Machineries</li>
              <li>Export Import</li>
              <li>Warehousing</li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Expertise</li>
              <li>Latest News</li>
              <li>Transporters</li>
              <li>Terms & Condition</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+929 333-6413</li>
              <li>info@blueanchorshipping.com</li>
              <li>28 Street, Virginia, United States of America</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Copyright © 2024 BlueAnchor All rights reserved
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Site map</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;