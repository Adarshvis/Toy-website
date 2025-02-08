import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative min-h-[500px] md:min-h-[400px]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-10">
        <img
          src="/static/footer.png"
          alt="Footer background"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex justify-end">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Quick Links */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 max-w-[200px] mx-auto md:ml-auto md:mr-0">
                  {['About Us', 'Products', 'Categories', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-white text-sm md:text-base transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                <div className="space-y-3 max-w-[250px] mx-auto md:ml-auto md:mr-0">
                  <div className="flex items-center justify-center md:justify-end text-gray-300">
                    <span className="text-sm md:text-base">info@toyb.com</span>
                    <Mail className="w-4 h-4 ml-2" />
                  </div>
                  <div className="flex items-center justify-center md:justify-end text-gray-300">
                    <span className="text-sm md:text-base">+1 234 567 8900</span>
                    <Phone className="w-4 h-4 ml-2" />
                  </div>
                  <div className="flex items-center justify-center md:justify-end text-gray-300">
                    <span className="text-sm md:text-base">123 Toy Street, NY</span>
                    <MapPin className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex justify-center md:justify-end space-x-4 max-w-[200px] mx-auto md:ml-auto md:mr-0">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-2">
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                </div>
                <p className="text-gray-400 text-sm text-center md:text-right">
                  © 2024 ToyB Store. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;