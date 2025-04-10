
import React, { useState, useEffect } from 'react';
import { Clock, X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  
  useEffect(() => {
    // Show CTA after 5 seconds
    const showTimeout = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000); 
    
    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isDismissed && !showExitIntent) {
        setShowExitIntent(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(showTimeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDismissed, showExitIntent]);
  
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(false);
      setShowExitIntent(false);
    }
  };
  
  const dismiss = () => {
    setIsVisible(false);
    setShowExitIntent(false);
    setIsDismissed(true);
  };
  
  if (!isVisible && !showExitIntent) return null;
  
  return (
    <>
      {/* Semi-transparent overlay when exit intent is shown */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center" onClick={dismiss}>
          <div className="bg-gray-900 border-2 border-zerotrigger-500 rounded-lg p-6 max-w-md mx-4" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-gray-300 hover:text-white"
              onClick={dismiss}
            >
              <X size={20} />
            </button>
            <div className="text-center">
              <Clock className="h-10 w-10 text-amber-400 mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-white mb-2">Wait! Don't Miss This Opportunity</h2>
              <p className="text-gray-300 mb-4">
                Book your free strategy call now and learn how to automate your business and save 15+ hours every week.
              </p>
              <Button 
                className="w-full bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-bold py-4 text-lg"
                onClick={scrollToBooking}
              >
                Yes, I Want My Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <button 
                className="mt-3 text-gray-400 hover:text-gray-300 text-sm"
                onClick={dismiss}
              >
                No thanks, I prefer to work 15+ extra hours each week
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Regular Floating CTA */}
      {isVisible && !showExitIntent && (
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
      )}
    </>
  );
};

export default FloatingCTA;
