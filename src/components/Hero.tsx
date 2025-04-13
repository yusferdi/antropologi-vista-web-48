
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(to right, rgba(26, 32, 44, 0.95), rgba(26, 32, 44, 0.8)), url(https://images.unsplash.com/photo-1529668347442-11dc08640bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold leading-tight mb-6 animate-fade-in">
            Departemen Antropologi
            <span className="block text-2xl md:text-3xl mt-2 font-medium text-gray-300">
              Universitas Indonesia
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Memahami manusia dan budayanya dalam berbagai dimensi — masa lalu, kini, dan yang akan datang.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#about" 
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-md flex items-center gap-2 transition-all shadow-lg"
            >
              Pelajari Lebih Lanjut
              <ArrowRight size={18} />
            </a>
            <a 
              href="#education" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-md transition-all"
            >
              Program Studi
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
