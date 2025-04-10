
import React from 'react';
import { Phone, Code, Rocket } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="section bg-gray-950 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We follow a proven methodology to deliver custom automation solutions that transform your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center relative hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">1</div>
            <div className="flex justify-center mb-6 animate-float">
              <Phone className="h-16 w-16 text-zerotrigger-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Discovery Call</h3>
            <p className="text-gray-300">
              We analyze your current workflows, identify automation opportunities, and create a customized strategy tailored to your business needs.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center relative hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">2</div>
            <div className="flex justify-center mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
              <Code className="h-16 w-16 text-zerotrigger-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Design & Build</h3>
            <p className="text-gray-300">
              Our team creates custom automation workflows using tools like Make, Zapier, n8n, and AI, then thoroughly tests them to ensure reliability.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center relative hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">3</div>
            <div className="flex justify-center mb-6 animate-float" style={{ animationDelay: '0.4s' }}>
              <Rocket className="h-16 w-16 text-zerotrigger-400" />
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
