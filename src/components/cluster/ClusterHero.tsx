
import React from 'react';
import { motion } from 'framer-motion';

interface ClusterHeroProps {
  cluster: {
    title: string;
    description: string;
    emoji: string;
  };
}

const ClusterHero = ({ cluster }: ClusterHeroProps) => {
  return (
    <div className="relative bg-anthropology-700 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-anthropology-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-anthropology-300 rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block mb-6">
            <span className="text-7xl mb-6 block animate-float filter drop-shadow-lg">{cluster.emoji}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">{cluster.title}</h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">{cluster.description}</p>
        </motion.div>
      </div>
      
      {/* Wave decoration at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ClusterHero;
