
import React from 'react';
import { Star, Users, Award } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-white border-t border-b border-gray-100 py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-700 font-medium ml-2">4.9/5 Rating</span>
          </div>
          
          <div className="text-gray-700 font-medium flex items-center gap-2">
            <Users className="h-5 w-5 text-zerotrigger-600" />
            <span>Trusted by coaches, agencies & service providers</span>
          </div>
          
          <div className="text-gray-700 font-medium flex items-center gap-2">
            <Award className="h-5 w-5 text-zerotrigger-600" />
            <span>Certified automation experts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
