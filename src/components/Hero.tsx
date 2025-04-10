
import React from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center pt-8">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Urgent Limited Time Offer Banner */}
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-red-500/90 border border-red-400 text-white text-sm font-medium animate-pulse flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Limited Time: Free Strategy Call (Worth $497)</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
              Stop Wasting <span className="gradient-text">Hours</span> on Tasks AI Can Do in Minutes
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-xl">
              Join successful service business owners who <span className="font-semibold text-white underline decoration-zerotrigger-400">save 15+ hours weekly</span> with our custom automation systems.
            </p>
            
            <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700 mb-6">
              <div className="font-medium text-white mb-2">Businesses we've helped automate:</div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700/60 text-white text-xs font-medium px-2.5 py-0.5 rounded">Coaches</span>
                <span className="bg-gray-700/60 text-white text-xs font-medium px-2.5 py-0.5 rounded">Marketing Agencies</span>
                <span className="bg-gray-700/60 text-white text-xs font-medium px-2.5 py-0.5 rounded">Consultants</span>
                <span className="bg-gray-700/60 text-white text-xs font-medium px-2.5 py-0.5 rounded">Service Providers</span>
                <span className="bg-gray-700/60 text-white text-xs font-medium px-2.5 py-0.5 rounded">Course Creators</span>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-100 font-medium">Reclaim 10-15 hours every week</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-100 font-medium">Serve 2x more clients without adding staff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-100 font-medium">30-day implementation guarantee</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToBooking}
                className="bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-bold px-8 py-7 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <span className="absolute w-full h-full top-0 left-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                Book Your Free Strategy Call Now <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </Button>
              <div className="text-sm text-gray-400 mt-2 sm:mt-0 sm:self-end">
                <span className="line-through">$497 Value</span> <span className="text-white font-bold">FREE</span> (Limited Spots)
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zerotrigger-600 to-purple-600 rounded-lg blur opacity-75 animate-float"></div>
              <div className="relative glass-card p-6 rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&q=80&w=2070"
                  alt="Automation Workflow"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute -bottom-6 left-4 right-4 neo-blur p-4 rounded-lg flex items-start gap-3">
                  <div className="min-w-10 h-10 rounded-full flex items-center justify-center bg-green-500 text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-green-400">Client Success Story</div>
                    <div className="text-xl font-bold text-white">87% time reduction in client onboarding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="hidden md:block absolute top-1/4 -left-12 w-64 h-64 bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="hidden md:block absolute bottom-8 right-12 w-96 h-96 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Hero;
