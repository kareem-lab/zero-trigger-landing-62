
import React from 'react';
import { Phone, Code, Rocket } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Process = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="process" className="section bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Our <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg px-2">
            We follow a proven methodology to deliver custom automation solutions that transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-12">
          <div className="neo-blur p-6 md:p-8 text-center relative transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
            <div className="flex justify-center mb-4 md:mb-6 animate-float">
              <Phone className="h-12 w-12 md:h-16 md:w-16 text-purple-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Discovery Call</h3>
            <p className="text-gray-300 text-sm md:text-base">
              We analyze your current workflows, identify automation opportunities, and create a customized strategy tailored to your business needs.
            </p>
          </div>
          
          <div className="neo-blur p-6 md:p-8 text-center relative transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
            <div className="flex justify-center mb-4 md:mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
              <Code className="h-12 w-12 md:h-16 md:w-16 text-blue-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Design & Build</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Our team creates custom automation workflows using tools like Make, Zapier, n8n, and AI, then thoroughly tests them to ensure reliability.
            </p>
          </div>
          
          <div className="neo-blur p-6 md:p-8 text-center relative transition-all duration-300 border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
            <div className="flex justify-center mb-4 md:mb-6 animate-float" style={{ animationDelay: '0.4s' }}>
              <Rocket className="h-12 w-12 md:h-16 md:w-16 text-indigo-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Launch & Optimize</h3>
            <p className="text-gray-300 text-sm md:text-base">
              We implement your custom automation systems, train your team, and continuously optimize the workflows to improve performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
