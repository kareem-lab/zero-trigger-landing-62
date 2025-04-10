
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Turn Repetitive Work Into <span className="gradient-text">Revenue</span> with Smart Automation
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              We help coaches, agencies, and service businesses save time, reduce manual work, and scale faster using tools like Make, Zapier, n8n, and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToBooking}
                className="bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-medium px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-zerotrigger-600 text-zerotrigger-600 hover:bg-zerotrigger-50"
              >
                See What We Offer
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-zerotrigger-600 to-purple-600 rounded-lg blur opacity-75 animate-float"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&q=80&w=2070"
                  alt="Automation Workflow"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="hidden md:block absolute top-1/4 -left-12 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="hidden md:block absolute bottom-8 right-12 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Hero;
