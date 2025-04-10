
import React from 'react';
import { UserPlus, MessageSquare, FileCheck, Users, Lightbulb, ChartBar, Shield, Sparkles, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesData = [
  {
    icon: <UserPlus className="h-12 w-12 p-2 bg-blue-50 text-zerotrigger-600 rounded-xl" />,
    title: "AI Lead Generation",
    description: "Automate your prospecting and lead qualification process with AI-powered systems that identify, engage, and nurture potential clients."
  },
  {
    icon: <MessageSquare className="h-12 w-12 p-2 bg-purple-50 text-zerotrigger-600 rounded-xl" />,
    title: "Client Onboarding",
    description: "Create seamless, automated client onboarding experiences that collect necessary information, send documents, and schedule meetings without manual work."
  },
  {
    icon: <FileCheck className="h-12 w-12 p-2 bg-green-50 text-zerotrigger-600 rounded-xl" />,
    title: "Sales Admin Automation",
    description: "Eliminate tedious administrative tasks with automated proposal creation, contract generation, invoicing, and payment processing systems."
  },
  {
    icon: <Users className="h-12 w-12 p-2 bg-orange-50 text-zerotrigger-600 rounded-xl" />,
    title: "Hiring & Team Management",
    description: "Streamline your recruitment and team management workflows with automated applications, assessments, and project assignment systems."
  },
  {
    icon: <Lightbulb className="h-12 w-12 p-2 bg-yellow-50 text-zerotrigger-600 rounded-xl" />,
    title: "Project Management",
    description: "Build custom project management automation that ensures deadlines are met, communication is streamlined, and project delivery is consistent."
  },
  {
    icon: <ChartBar className="h-12 w-12 p-2 bg-red-50 text-zerotrigger-600 rounded-xl" />,
    title: "Business Analytics",
    description: "Implement automated reporting and analytics systems that provide real-time insights into your business performance and client results."
  },
  {
    icon: <Shield className="h-12 w-12 p-2 bg-teal-50 text-zerotrigger-600 rounded-xl" />,
    title: "Operations Security",
    description: "Secure your business operations with automated backup systems, access controls, and compliance monitoring to protect sensitive data."
  },
  {
    icon: <Sparkles className="h-12 w-12 p-2 bg-indigo-50 text-zerotrigger-600 rounded-xl" />,
    title: "AI Integration",
    description: "Incorporate the latest AI technologies into your existing workflows to enhance productivity, creativity, and decision-making processes."
  },
  {
    icon: <Clock className="h-12 w-12 p-2 bg-pink-50 text-zerotrigger-600 rounded-xl" />,
    title: "Workflow Optimization",
    description: "Analyze and refine your business processes to identify and eliminate bottlenecks, reducing operational costs and increasing efficiency."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-700 text-lg">
            We create custom automation systems that free you from repetitive tasks and let you focus on growth and delivering value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-3">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
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
