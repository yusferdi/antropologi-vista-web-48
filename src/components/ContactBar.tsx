
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-[#5C4033] text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 text-sm">
          <a href="mailto:departemen_antropologi@ui.ac.id" className="flex items-center hover:text-gray-200 transition-colors">
            <Mail size={14} className="mr-2" />
            <span>departemen_antropologi@ui.ac.id</span>
          </a>
          <div className="h-4 border-l border-white/30"></div>
          <a href="tel:+622178849022" className="flex items-center hover:text-gray-200 transition-colors">
            <Phone size={14} className="mr-2" />
            <span>+62 21 7884 9022</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="Facebook">
            <Facebook size={14} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="Twitter">
            <Twitter size={14} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="Instagram">
            <Instagram size={14} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="Youtube">
            <Youtube size={14} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="LinkedIn">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
