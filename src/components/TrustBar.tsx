
import React from 'react';
import { Star, Users, Award, Shield, ThumbsUp } from 'lucide-react';

const TrustBar = () => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-md border-t border-b border-gray-800 py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-2 bg-gray-800/80 p-3 rounded-lg border border-gray-700">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium ml-2">4.9/5 Client Satisfaction</span>
          </div>
          
          <div className="text-white font-medium flex items-center gap-2 bg-gray-800/80 p-3 rounded-lg border border-gray-700">
            <Shield className="h-5 w-5 text-green-400" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          
          <div className="text-white font-medium flex items-center gap-2 bg-gray-800/80 p-3 rounded-lg border border-gray-700">
            <Award className="h-5 w-5 text-zerotrigger-400" />
            <span>We've automated 125+ businesses</span>
          </div>
          
          <div className="hidden md:flex text-white font-medium items-center gap-2 bg-gray-800/80 p-3 rounded-lg border border-gray-700">
            <ThumbsUp className="h-5 w-5 text-blue-400" />
            <span>Trusted by 7-figure business owners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
