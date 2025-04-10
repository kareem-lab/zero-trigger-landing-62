
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, MessageSquare } from 'lucide-react';

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="section bg-gray-950 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Automate</span> Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Book a free 30-minute strategy call with our automation experts. We'll discuss your current challenges and identify the best automation opportunities for your business.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-zerotrigger-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">30-Minute Strategy Session</h3>
                  <p className="text-gray-300">Get personalized automation recommendations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-zerotrigger-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Flexible Scheduling</h3>
                  <p className="text-gray-300">Book a time that works for your schedule</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="h-6 w-6 text-zerotrigger-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">No Obligation</h3>
                  <p className="text-gray-300">Just valuable insights for your business</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Button 
                className="bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-medium px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  // For mobile responsiveness, we'll scroll to the Calendly widget on mobile
                  const calendlyWidget = document.getElementById('calendly-widget');
                  if (calendlyWidget) calendlyWidget.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div id="calendly-widget" className="glass-card p-1 md:p-4">
            {/* Calendly inline widget with the correct link */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/kareem-zerotrigger/automation" 
              style={{ minWidth: '320px', height: '650px' }}
            ></div>
            
            <div className="md:hidden mt-6">
              <Button 
                className="w-full bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-medium py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyEmbed;
