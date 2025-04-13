
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Book, Users, Globe } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-enter');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{
        background: 'linear-gradient(to right, rgba(26, 32, 44, 0.85), rgba(26, 32, 44, 0.75)), url(https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-16 left-10 animate-float-slow">
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-accent/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-16 right-10 animate-float">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-anthropology-300/20 backdrop-blur-sm"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-white animate-fade-in font-medium">
            <span className="mr-2">✨</span> Departemen Antropologi Terakreditasi Unggul
          </div>
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
              className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-md flex items-center gap-2 transition-all shadow-lg hover:translate-y-[-2px]"
            >
              Pelajari Lebih Lanjut
              <ArrowRight size={18} />
            </a>
            <a 
              href="#education" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-md transition-all flex items-center gap-2 hover:translate-y-[-2px]"
            >
              Program Studi
              <Book size={18} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-white opacity-70 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 19V5" />
              <path d="m5 12 7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
