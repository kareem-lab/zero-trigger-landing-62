
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Shield, ThumbsUp, Users } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const CalendlyEmbed = () => {
  const [countdownTime, setCountdownTime] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Set up countdown timer
    const timer = setInterval(() => {
      setCountdownTime(prevTime => {
        if (prevTime.seconds > 0) {
          return {
            ...prevTime,
            seconds: prevTime.seconds - 1
          };
        } else if (prevTime.minutes > 0) {
          return {
            ...prevTime,
            minutes: prevTime.minutes - 1,
            seconds: 59
          };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59
          };
        }
        return prevTime;
      });
    }, 1000);
    return () => {
      // Clean up
      clearInterval(timer);
      document.body.removeChild(script);
    };
  }, []);
  
  const formatTimeUnit = (unit: number) => {
    return unit < 10 ? `0${unit}` : unit;
  };
  
  const scrollToCalendly = () => {
    const element = document.getElementById('calendly-widget');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      toast({
        title: "Scroll to see available time slots",
        description: "Complete the form to secure your spot!"
      });
    }
  };
  
  return <section id="booking" className="section bg-gray-950 text-white">
      <div className="container-custom">
        <div className="flex justify-center mb-8">
          <div className="bg-zerotrigger-600/20 px-6 py-4 rounded-lg border border-zerotrigger-500/30 flex items-center gap-4">
            <div className="text-white font-bold text-lg">Limited Time Offer Expires In:</div>
            <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-gray-800 rounded-lg text-white">
                <span className="font-mono text-xl">
                  {formatTimeUnit(countdownTime.hours)}
                </span>
                <span className="text-xs font-light">hours</span>
              </div>
              <div className="flex items-center text-lg">:</div>
              <div className="flex flex-col p-2 bg-gray-800 rounded-lg text-white">
                <span className="font-mono text-xl">
                  {formatTimeUnit(countdownTime.minutes)}
                </span>
                <span className="text-xs font-light">min</span>
              </div>
              <div className="flex items-center text-lg">:</div>
              <div className="flex flex-col p-2 bg-gray-800 rounded-lg text-white">
                <span className="font-mono text-xl">
                  {formatTimeUnit(countdownTime.seconds)}
                </span>
                <span className="text-xs font-light">sec</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Book Your <span className="gradient-text">Free Strategy Call</span> Now
            </h2>
            <p className="text-gray-300 text-xl mb-6">
              Join the smart business owners who are saving <span className="font-bold text-white">15+ hours every week</span> with custom automation systems.
            </p>
            
            <div className="bg-gray-800/40 p-5 rounded-lg border border-gray-700 mb-8">
              <h3 className="font-bold text-xl mb-4">What you'll get on this call:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <ThumbsUp className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Custom Automation Plan</h3>
                    <p className="text-gray-300">Get a personalized roadmap to automate your most time-consuming tasks</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Growth Strategy Session</h3>
                    <p className="text-gray-300">Learn how to scale your business without working more hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">No Obligation</h3>
                    <p className="text-gray-300">Zero pressure or hard-selling - just actionable insights</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 p-4 rounded-lg border border-green-500/30 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 rounded-full p-1 mt-1">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-green-400">Limited Availability</div>
                  <p className="text-gray-200">We only have 3 spots left this week. Book now to secure yours.</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Button className="bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all w-full" onClick={scrollToCalendly}>
                Secure Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div id="calendly-widget" className="glass-card p-4 border-2 border-zerotrigger-500/50">
            <div className="bg-zerotrigger-600/20 rounded-t-lg py-3 px-4 text-center mb-2">
              <h3 className="font-bold text-lg">🔥 Book Your Free 30-Minute Strategy Call Now</h3>
            </div>
            
            {/* Calendly inline widget with the correct link */}
            <div className="calendly-inline-widget" data-url="https://calendly.com/kareem-zerotrigger/automation" style={{
            minWidth: '320px',
            height: '630px'
          }}></div>
            
            <div className="md:hidden mt-6">
              <Button className="w-full bg-zerotrigger-600 hover:bg-zerotrigger-700 text-white font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all" onClick={scrollToCalendly}>
                Secure Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default CalendlyEmbed;
