
import React from 'react';
import { Phone, Code, Rocket } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="section bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We follow a proven methodology to deliver custom automation solutions that transform your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="neo-blur p-8 text-center relative transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/5">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
            <div className="flex justify-center mb-6 animate-float">
              <Phone className="h-16 w-16 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Discovery Call</h3>
            <p className="text-gray-300">
              We analyze your current workflows, identify automation opportunities, and create a customized strategy tailored to your business needs.
            </p>
          </div>
          
          <div className="neo-blur p-8 text-center relative transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
            <div className="flex justify-center mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
              <Code className="h-16 w-16 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Design & Build</h3>
            <p className="text-gray-300">
              Our team creates custom automation workflows using tools like Make, Zapier, n8n, and AI, then thoroughly tests them to ensure reliability.
            </p>
          </div>
          
          <div className="neo-blur p-8 text-center relative transition-all duration-300 border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
            <div className="flex justify-center mb-6 animate-float" style={{ animationDelay: '0.4s' }}>
              <Rocket className="h-16 w-16 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Launch & Optimize</h3>
            <p className="text-gray-300">
              We implement your custom automation systems, train your team, and continuously optimize the workflows to improve performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
