
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-college-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">SRE PU College</h3>
            <p className="text-gray-300">
              Providing quality education and fostering academic excellence since 1985.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-college-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-college-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-college-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#campus" className="text-gray-300 hover:text-white transition-colors">Campus</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Science Stream</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commerce Stream</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Arts Stream</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vocational Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Extra Curricular</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 College Road, Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-gray-300">info@srepucollege.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SRE PU College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
