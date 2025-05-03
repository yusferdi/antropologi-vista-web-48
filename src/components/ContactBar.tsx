
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const ContactBar = () => {
  // Check if we're in a Router context
  let isInRouterContext = true;
  
  try {
    // This will throw an error if not in Router context
    useLocation();
  } catch (error) {
    isInRouterContext = false;
    console.log("ContactBar is rendering outside Router context");
  }
  
  return (
    <div className="bg-anthropology-600 text-white py-2 px-4">
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
          {isInRouterContext ? (
            <Link to="/cluster/climate" className="text-white hover:text-gray-200 transition-colors text-xs px-2 py-1 bg-white/10 rounded-md">
              Climate Cluster 🌍
            </Link>
          ) : (
            <a href="/cluster/climate" className="text-white hover:text-gray-200 transition-colors text-xs px-2 py-1 bg-white/10 rounded-md">
              Climate Cluster 🌍
            </a>
          )}
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
