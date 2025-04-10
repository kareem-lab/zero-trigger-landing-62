
import React from 'react';
import { Clock, Smartphone, TrendingUp, CheckCircle } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Business Growth Through Automation" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Client <span className="gradient-text">Benefits</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save 10+ Hours Every Week</h3>
                  <p className="text-gray-700">
                    Our automation systems handle repetitive tasks, freeing you and your team to focus on strategy and growth activities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reduce Costly Errors</h3>
                  <p className="text-gray-700">
                    Eliminate human error in data entry, client communications, and delivery processes with reliable automated workflows.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scale Without Hiring</h3>
                  <p className="text-gray-700">
                    Handle more clients and deliver more services without proportionally increasing your team size or operational costs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-zerotrigger-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Work From Anywhere</h3>
                  <p className="text-gray-700">
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
