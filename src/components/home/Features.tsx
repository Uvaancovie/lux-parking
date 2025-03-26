
import React from "react";
import BlurCard from "@/components/ui/BlurCard";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
        <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
        <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
        <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
        <rect width="10" height="10" x="7" y="7" rx="1"></rect>
      </svg>
    ),
    title: "Secure Reservations",
    description:
      "Book your parking spot in advance with confidence. Guaranteed space, guaranteed convenience.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "Clear pricing for all parking zones with no hidden fees. Pay once and enjoy your event without worry.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.8 11.3 2 22l10.7-3.79"></path>
        <path d="M4 3h.01"></path>
        <path d="M22 8h.01"></path>
        <path d="M15 2h.01"></path>
        <path d="M22 20h.01"></path>
        <path d="m22 2-2.24.75a8 8 0 0 0-5.56 6.32L13 13l4.68 7.26a8 8 0 0 0 3.5 3.38L22 22"></path>
      </svg>
    ),
    title: "Premium Locations",
    description:
      "Access exclusive parking zones closer to venue entrances. Showcase your car at premium spots.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 6 4-4 4 4"></path>
        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L3 22"></path>
        <path d="m15 8 5 5"></path>
        <path d="m9 14 2 2"></path>
      </svg>
    ),
    title: "Event Management",
    description:
      "We collaborate with event managers to provide real-time bookings and confirmations through our platform.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
    title: "Loyalty Program",
    description:
      "Earn rewards with every booking. Our loyalty program offers exclusive perks and priority access to new events.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    title: "Smart Reminders",
    description:
      "Get timely notifications about your upcoming bookings, event schedule changes, and special promotions.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Service</h2>
          <p className="text-muted-foreground">
            We've reimagined event parking to create a seamless experience from booking to arrival.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <BlurCard
              key={index}
              className="p-6 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              intensity="light"
            >
              <div className="mb-4 text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </BlurCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
