
import React, { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  useEffect(() => {
    const showTimeout = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000); // Show after 5 seconds
    
    return () => {
      clearTimeout(showTimeout);
    };
  }, [isDismissed]);
  
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false);
    }
  };
  
  const dismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50 max-w-sm bg-gray-900 border-2 border-zerotrigger-500 rounded-lg shadow-lg transition-all duration-300",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    )}>
      <button 
        className="absolute -top-2 -right-2 bg-gray-800 rounded-full p-1 text-gray-300 hover:text-white"
        onClick={dismiss}
      >
        <X size={16} />
      </button>
      <div className="p-4">
        <div className="flex items-center gap-2 text-amber-400 mb-2">
          <Clock className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-medium">Limited-time offer</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">
          Free Strategy Session Closing Soon
        </h3>
        <p className="text-sm text-gray-300 mb-4">
          Discover how to save 15+ hours per week with custom automation. Only 3 spots left this week!
        </p>
        <Button 
          className="w-full bg-zerotrigger-600 hover:bg-zerotrigger-700"
          onClick={scrollToBooking}
        >
          Secure Your Free Call Now
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
