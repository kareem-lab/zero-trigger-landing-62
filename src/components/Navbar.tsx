
import React, { useState, useEffect } from 'react';
import { Menu, X, Clock } from 'lucide-react';
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
        isScrolled ? "py-2 bg-gray-900/95 shadow-md backdrop-blur-sm" : "py-3 bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-zerotrigger-400">
          ZeroTrigger
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-zerotrigger-400 transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-zerotrigger-400 transition-colors">
            Results
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-zerotrigger-400 transition-colors">
            Client Stories
          </button>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="bg-zerotrigger-600 text-white hover:bg-zerotrigger-700 animated-btn flex items-center gap-1"
          >
            <Clock className="h-4 w-4" />
            Book Call Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm absolute top-full left-0 right-0 p-4 shadow-lg border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-zerotrigger-400 py-2 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-zerotrigger-400 py-2 transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-zerotrigger-400 py-2 transition-colors">
              Client Stories
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="w-full bg-zerotrigger-600 text-white hover:bg-zerotrigger-700 flex items-center justify-center gap-1"
            >
              <Clock className="h-4 w-4" />
              Book Call Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
