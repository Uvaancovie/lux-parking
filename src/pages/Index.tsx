
import React from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import BlurCard from "@/components/ui/BlurCard";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Attendee",
    quote: "ParkReserve has completely transformed my event experience. No more circling around for parking - I book in advance and drive straight to my spot.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Michael Davis",
    role: "Car Enthusiast",
    quote: "As someone who loves showing off my ride, I appreciate the premium zones. Worth every cent for the convenience and visibility.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Emma Calitz",
    role: "Festival Organizer",
    quote: "The integration with our event management system is seamless. Our attendees love the convenience, and it's reduced our parking headaches significantly.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const cities = [
  {
    name: "Cape Town",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    eventCount: 12
  },
  {
    name: "Johannesburg",
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    eventCount: 18
  },
  {
    name: "Durban",
    image: "https://images.unsplash.com/photo-1562512046-7f1de60d61ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    eventCount: 9
  },
  {
    name: "Pretoria",
    image: "https://images.unsplash.com/photo-1552553302-9211bf7f7290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    eventCount: 7
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        
        {/* Popular Cities Section */}
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Popular Cities</h2>
              <p className="text-muted-foreground">
                Discover events in major cities across South Africa
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <Link to={`/events?city=${city.name.toLowerCase()}`} key={index}>
                  <BlurCard 
                    className="group relative overflow-hidden h-[250px] hover:border-primary/20"
                    intensity="light"
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={city.image} 
                        alt={city.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
                      <p className="text-white/80 text-sm">{city.eventCount} upcoming events</p>
                    </div>
                  </BlurCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-24 bg-secondary/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-muted-foreground">
                Don't just take our word for it - hear from our community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <BlurCard 
                  key={index} 
                  className="p-6 hover:border-primary/20"
                  intensity="medium"
                  hover
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="mr-1">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </BlurCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Event Experience?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of event-goers who've already transformed their parking experience. 
                Book your spot now and focus on enjoying the event, not finding parking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/events">Browse Events</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                  <Link to="/signup">Create Account</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
