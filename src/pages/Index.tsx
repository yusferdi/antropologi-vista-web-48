
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import QuotesSection from '@/components/QuotesSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import AccreditationSection from '@/components/AccreditationSection';
import EducationSection from '@/components/EducationSection';
import FacultyStaffSection from '@/components/FacultyStaffSection';
import StructureSection from '@/components/StructureSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Scroll to top button visibility
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-to-top');
      if (scrollButton) {
        if (window.scrollY > 300) {
          scrollButton.classList.remove('opacity-0', 'invisible');
          scrollButton.classList.add('opacity-100', 'visible');
        } else {
          scrollButton.classList.remove('opacity-100', 'visible');
          scrollButton.classList.add('opacity-0', 'invisible');
        }
      }
    };

    // Animation on scroll
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          animateOnScroll.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
      animateOnScroll.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      elementsToAnimate.forEach(element => {
        animateOnScroll.unobserve(element);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <QuotesSection />
      <VisionMissionSection />
      <AccreditationSection />
      <EducationSection />
      <FacultyStaffSection />
      <StructureSection />
      <PartnersSection />
      <Footer />
      
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-anthropology-600 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-anthropology-700 focus:outline-none hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Index;
