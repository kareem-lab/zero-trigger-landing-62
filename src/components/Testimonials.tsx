
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "After implementing ZeroTrigger's automation, my client onboarding now takes 15 minutes instead of 5 hours. I've been able to take on 3X more clients without hiring anyone else.",
    name: "Sarah Johnson",
    position: "Marketing Agency Owner",
    stars: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "I was working 70+ hour weeks before ZeroTrigger. Now my business runs on autopilot while I sleep. I've increased revenue by 42% and actually have time to spend with my family.",
    name: "Michael Rodriguez",
    position: "Business Coach",
    stars: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "The ROI is incredible. For every $1 I spent on their automation systems, I've made back $27 in new client revenue. It's like having a full-time team working 24/7.",
    name: "Jennifer Patel",
    position: "SaaS Company Founder",
    stars: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "What impressed me most was how quickly they understood my business. The automation systems were custom-fit to my exact workflow, not some generic template.",
    name: "Thomas Wright",
    position: "E-commerce Consultant",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "I was skeptical at first, but their strategy call opened my eyes to automation possibilities I hadn't considered. Just that one call saved me countless hours of research.",
    name: "Rebecca Chen",
    position: "Financial Advisor",
    stars: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from Real Business Owners
          </h2>
          <p className="text-white/90 text-lg">
            Don't just take our word for it. See how automation has transformed businesses just like yours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-2 relative">
                <div className="flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="absolute top-4 right-4 h-10 w-10 text-purple-400/20" />
              </CardHeader>
              <CardContent className="pb-2">
                <p className="italic text-lg">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="pt-4 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-white/80 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <Card key={index + 3} className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-2 relative">
                <div className="flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="absolute top-4 right-4 h-10 w-10 text-purple-400/20" />
              </CardHeader>
              <CardContent className="pb-2">
                <p className="italic text-lg">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="pt-4 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-white/80 text-sm">{testimonial.position}</p>
                  </div>
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
