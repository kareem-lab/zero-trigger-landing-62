
import React from 'react';
import { Phone, Code, Rocket } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-700 text-lg">
            We follow a proven methodology to deliver custom automation solutions that transform your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 text-center relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-zerotrigger-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div className="flex justify-center mb-6">
              <Phone className="h-16 w-16 text-zerotrigger-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Discovery Call</h3>
            <p className="text-gray-700">
              We analyze your current workflows, identify automation opportunities, and create a customized strategy tailored to your business needs.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-zerotrigger-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div className="flex justify-center mb-6">
              <Code className="h-16 w-16 text-zerotrigger-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Design & Build</h3>
            <p className="text-gray-700">
              Our team creates custom automation workflows using tools like Make, Zapier, n8n, and AI, then thoroughly tests them to ensure reliability.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-zerotrigger-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div className="flex justify-center mb-6">
              <Rocket className="h-16 w-16 text-zerotrigger-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Launch & Optimize</h3>
            <p className="text-gray-700">
              We implement your custom automation systems, train your team, and continuously optimize the workflows to improve performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
