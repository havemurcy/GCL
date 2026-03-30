import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <span className="text-2xl font-bold tracking-tight mb-4 block">
              GCL <span className="text-secondary-light font-medium">Landscaping</span>
            </span>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Professional residential and light commercial landscaping services. We take pride in transforming outdoor spaces into beautiful, functional environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors text-sm">Customer Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Lawn Maintenance</li>
              <li className="text-gray-300 text-sm">Landscape Design</li>
              <li className="text-gray-300 text-sm">Hardscaping</li>
              <li className="text-gray-300 text-sm">Mulching & Planting</li>
              <li className="text-gray-300 text-sm">Seasonal Cleanup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Call for a free estimate</p>
                  <a href="tel:+15551234567" className="text-white font-medium hover:text-secondary-light transition-colors">(555) 123-4567</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email us</p>
                  <a href="mailto:info@gcllandscaping.com" className="text-white font-medium hover:text-secondary-light transition-colors">info@gcllandscaping.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-light mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Service Area</p>
                  <p className="text-white font-medium">[CITY], [STATE] & Surrounding Areas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gooch & Childers Landscaping. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
