
import React from 'react';
import { Clock, Smartphone, TrendingUp, CheckCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Benefits = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="benefits" className="section bg-gray-950 py-16 md:py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Business Growth Through Automation" 
              className="rounded-lg shadow-lg w-full object-cover h-64 md:h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center md:text-left">
              Client <span className="gradient-text">Benefits</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">Save 15+ Hours Every Week</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Our automation systems handle repetitive tasks, freeing you and your team to focus on strategy and growth activities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">Reduce Costly Errors</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Eliminate human error in data entry, client communications, and delivery processes with reliable automated workflows.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">Scale Without Hiring</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Handle more clients and deliver more services without proportionally increasing your team size or operational costs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Smartphone className="h-5 w-5 md:h-6 md:w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">Work From Anywhere</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Access your business systems from any device, anywhere, with cloud-based automation that keeps everything running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
