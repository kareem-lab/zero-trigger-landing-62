
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ZeroTrigger transformed our client onboarding process. We now save 15 hours per week and our clients are impressed with how smoothly everything runs.",
    name: "Sarah Johnson",
    position: "Marketing Agency Owner",
    stars: 5
  },
  {
    quote: "The automation systems they built for my coaching business have been game-changing. I can handle 3x more clients without any additional admin staff.",
    name: "Michael Rodriguez",
    position: "Business Coach",
    stars: 5
  },
  {
    quote: "Their expertise with Make and AI integration helped us create a lead generation system that works 24/7. Our sales team only talks to qualified prospects now.",
    name: "Jennifer Patel",
    position: "SaaS Company Founder",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/90 text-lg">
            We've helped businesses of all sizes transform their operations with powerful automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="pt-4 border-t border-white/20">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
