
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll functionality
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Scroll to hash on page load
    if (window.location.hash) {
      const targetElement = document.getElementById(window.location.hash.substring(1));
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Services />
        <Benefits />
        <Process />
        <Testimonials />
        <FAQ />
        <CalendlyEmbed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
