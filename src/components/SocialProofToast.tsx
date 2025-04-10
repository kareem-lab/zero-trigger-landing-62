
import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const notifications = [{
  name: "Michael R.",
  location: "New York",
  action: "just booked a free strategy call",
  time: "2 minutes ago"
}, {
  name: "Sarah J.",
  location: "Los Angeles",
  action: "booked a free strategy call",
  time: "5 minutes ago"
}, {
  name: "David K.",
  location: "Chicago",
  action: "just booked a free strategy call",
  time: "8 minutes ago"
}, {
  name: "Emma P.",
  location: "Miami",
  action: "booked a free strategy call",
  time: "12 minutes ago"
}];

const SocialProofToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    // Show the first notification after 5 seconds
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Cycle through notifications
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification(prev => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, []);

  const dismiss = () => setIsVisible(false);

  return (
    <div className={cn("fixed bottom-24 left-4 z-50 max-w-sm bg-gray-900 border border-green-500/30 rounded-lg shadow-lg transition-all duration-300", 
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
    )}>
      <div className="p-4 flex items-start">
        <div className="flex-shrink-0 mr-3">
          <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        </div>
        <div className="flex-grow pr-8">
          <p className="text-green-400 text-sm font-medium">
            {notifications[currentNotification].name} from {notifications[currentNotification].location}
          </p>
          <p className="text-white font-medium">
            {notifications[currentNotification].action}
          </p>
          <p className="text-gray-400 text-xs">
            {notifications[currentNotification].time}
          </p>
        </div>
        <button onClick={dismiss} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofToast;
