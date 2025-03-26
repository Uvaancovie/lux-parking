
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Find Your Event",
    description: "Search for upcoming events in your city. Browse through our comprehensive list of concerts, festivals, sports events, and nightlife.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    number: "02",
    title: "Select Parking Zone",
    description: "View the venue map and choose your preferred parking zone. Each zone offers different benefits and pricing based on proximity and exclusivity.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    number: "03",
    title: "Enter Vehicle Details",
    description: "Provide your vehicle information including license plate, make, and color. This ensures seamless entry to the event parking area.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    number: "04",
    title: "Secure Your Spot",
    description: "Complete payment and receive instant confirmation. Your booking is automatically shared with event management for a smooth arrival experience.",
    image: "https://images.unsplash.com/photo-1519458246479-6acae7536988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Book your premium parking spot in four simple steps
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Step {step.number}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground max-w-lg">
                  {step.description}
                </p>
                
                {index === steps.length - 1 && (
                  <Button className="mt-4" asChild>
                    <Link to="/events">Find Events Now</Link>
                  </Button>
                )}
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-lg transform translate-x-4 translate-y-4"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
