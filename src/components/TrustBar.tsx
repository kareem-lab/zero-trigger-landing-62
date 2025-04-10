
import React from 'react';
import { Star, Users, Award, Shield, ThumbsUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const TrustBar = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900 backdrop-blur-md border-t border-b border-purple-500/20 py-4 md:py-6">
      <div className="container-custom">
        <div className={`flex flex-col ${isMobile ? 'gap-3' : 'md:flex-row justify-between items-center gap-6'} text-center md:text-left`}>
          <div className="flex items-center justify-center md:justify-start gap-1 md:gap-2 glass-card p-2 md:p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
            <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white text-sm md:text-base font-medium ml-1 md:ml-2">4.9/5 Client Satisfaction</span>
          </div>
          
          <div className="text-white text-sm md:text-base font-medium flex items-center justify-center md:justify-start gap-1 md:gap-2 glass-card p-2 md:p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
            <Shield className="h-4 w-4 md:h-5 md:w-5 text-green-400" />
            <span>30-Day Money Back Guarantee</span>
          </div>
          
          <div className="text-white text-sm md:text-base font-medium flex items-center justify-center md:justify-start gap-1 md:gap-2 glass-card p-2 md:p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
            <Award className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
            <span>We've automated 125+ businesses</span>
          </div>
          
          <div className="text-white text-sm md:text-base font-medium flex md:flex items-center justify-center md:justify-start gap-1 md:gap-2 glass-card p-2 md:p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
            <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
            <span>Trusted by 7-figure business owners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
