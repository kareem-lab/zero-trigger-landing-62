
import React from 'react';
import { Star, Users, Award } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-md border-t border-b border-gray-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2 bg-gray-800/80 p-3 rounded-lg border border-gray-700">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-300 font-medium ml-2">4.9/5 Rating</span>
          </div>
          
          <div className="text-gray-300 font-medium flex items-center gap-2 bg-gray-800/80 p-3 rounded-lg border border-gray-700">
            <Users className="h-5 w-5 text-zerotrigger-400" />
            <span>Trusted by coaches, agencies & service providers</span>
          </div>
          
          <div className="text-gray-300 font-medium flex items-center gap-2 bg-gray-800/80 p-3 rounded-lg border border-gray-700">
            <Award className="h-5 w-5 text-zerotrigger-400" />
            <span>Certified automation experts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
