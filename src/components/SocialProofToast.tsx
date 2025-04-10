
import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const notifications = [
  {
    name: "Michael R.",
    location: "New York",
    action: "just booked a free strategy call",
    time: "2 minutes ago"
  },
  {
    name: "Sarah J.",
    location: "Los Angeles",
    action: "booked a free strategy call",
    time: "5 minutes ago"
  },
  {
    name: "David K.",
    location: "Chicago",
    action: "just booked a free strategy call",
    time: "8 minutes ago"
  },
  {
    name: "Emma P.",
    location: "Miami",
    action: "booked a free strategy call",
    time: "12 minutes ago"
  }
];

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
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
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
    <div className={cn(
      "fixed bottom-24 left-4 z-50 max-w-sm bg-gray-900 border border-green-500/30 rounded-lg shadow-lg transition-all duration-300",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
    )}>
      <button 
        className="absolute -top-2 -right-2 bg-gray-800 rounded-full p-1 text-gray-300 hover:text-white"
        onClick={dismiss}
      >
        <X size={16} />
      </button>
      
      <div className="flex items-start gap-3 p-4">
        <div className="bg-green-500/20 rounded-full p-2 flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-green-400" />
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-white font-medium">
            {notifications[currentNotification].name} from {notifications[currentNotification].location}
          </p>
          <p className="text-xs text-gray-400">
            {notifications[currentNotification].action}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {notifications[currentNotification].time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
