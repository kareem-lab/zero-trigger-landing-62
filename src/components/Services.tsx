
import React from 'react';
import { UserPlus, MessageSquare, FileCheck, Users, Lightbulb, ChartBar, Shield, Sparkles, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

const ServicesData = [
  {
    icon: <UserPlus className="h-10 w-10 p-2 bg-purple-900/30 text-purple-400 rounded-xl" />,
    title: "AI Lead Generation",
    description: "Automate your prospecting and lead qualification process with AI-powered systems that identify, engage, and nurture potential clients."
  },
  {
    icon: <MessageSquare className="h-10 w-10 p-2 bg-blue-900/30 text-blue-400 rounded-xl" />,
    title: "Client Onboarding",
    description: "Create seamless, automated client onboarding experiences that collect necessary information, send documents, and schedule meetings without manual work."
  },
  {
    icon: <FileCheck className="h-10 w-10 p-2 bg-green-900/30 text-green-400 rounded-xl" />,
    title: "Sales Admin Automation",
    description: "Eliminate tedious administrative tasks with automated proposal creation, contract generation, invoicing, and payment processing systems."
  },
  {
    icon: <Users className="h-10 w-10 p-2 bg-orange-900/30 text-orange-400 rounded-xl" />,
    title: "Hiring & Team Management",
    description: "Streamline your recruitment and team management workflows with automated applications, assessments, and project assignment systems."
  },
  {
    icon: <Lightbulb className="h-10 w-10 p-2 bg-yellow-900/30 text-yellow-400 rounded-xl" />,
    title: "Project Management",
    description: "Build custom project management automation that ensures deadlines are met, communication is streamlined, and project delivery is consistent."
  },
  {
    icon: <ChartBar className="h-10 w-10 p-2 bg-red-900/30 text-red-400 rounded-xl" />,
    title: "Business Analytics",
    description: "Implement automated reporting and analytics systems that provide real-time insights into your business performance and client results."
  },
  {
    icon: <Shield className="h-10 w-10 p-2 bg-teal-900/30 text-teal-400 rounded-xl" />,
    title: "Operations Security",
    description: "Secure your business operations with automated backup systems, access controls, and compliance monitoring to protect sensitive data."
  },
  {
    icon: <Sparkles className="h-10 w-10 p-2 bg-indigo-900/30 text-indigo-400 rounded-xl" />,
    title: "AI Integration",
    description: "Incorporate the latest AI technologies into your existing workflows to enhance productivity, creativity, and decision-making processes."
  },
  {
    icon: <Clock className="h-10 w-10 p-2 bg-pink-900/30 text-pink-400 rounded-xl" />,
    title: "Workflow Optimization",
    description: "Analyze and refine your business processes to identify and eliminate bottlenecks, reducing operational costs and increasing efficiency."
  }
];

const Services = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="services" className="section bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            What We <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg px-2">
            We create custom automation systems that free you from repetitive tasks and let you focus on growth and delivering value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {ServicesData.map((service, index) => (
            <Card key={index} className="neo-blur border-purple-500/20 hover:border-purple-500/40 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardHeader className="pb-1 md:pb-2">
                <div className="mb-2 md:mb-3">{service.icon}</div>
                <CardTitle className="text-white text-lg md:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-sm md:text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
