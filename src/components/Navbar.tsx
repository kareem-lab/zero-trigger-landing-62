
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 bg-white/95 shadow-md backdrop-blur-sm" : "py-4 bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-zerotrigger-600">
          ZeroTrigger
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-zerotrigger-600 transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-zerotrigger-600 transition-colors">
            Benefits
          </button>
          <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-zerotrigger-600 transition-colors">
            Our Process
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-zerotrigger-600 transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-zerotrigger-600 transition-colors">
            FAQ
          </button>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="bg-zerotrigger-600 text-white hover:bg-zerotrigger-700"
          >
            Book a Call
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-zerotrigger-600 py-2 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-zerotrigger-600 py-2 transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-zerotrigger-600 py-2 transition-colors">
              Our Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-zerotrigger-600 py-2 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-zerotrigger-600 py-2 transition-colors">
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="w-full bg-zerotrigger-600 text-white hover:bg-zerotrigger-700"
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
