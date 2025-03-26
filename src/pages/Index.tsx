
import React from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import BlurCard from "@/components/ui/BlurCard";
import { Link } from "react-router-dom";
import { Diamond } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Attendee",
    quote: "Lux Park has completely transformed my event experience. No more searching for parking - I arrive directly to my reserved spot in complete luxury.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Michael Davis",
    role: "Car Enthusiast",
    quote: "As someone who takes pride in my vehicle, I appreciate the premium zones. The presentation and security of my car is paramount, and Lux Park delivers.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Emma Calitz",
    role: "Festival Organizer",
    quote: "The integration with our event management system is seamless. Our VIP guests constantly praise the convenience and exclusivity of the service.",
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
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(40deg,#6e6cd8,#4b4dbb,#3d3ddb)]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Diamond className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-primary font-medium">Exclusive Locations</span>
              </div>
              <h2 className="text-3xl font-light tracking-tight mb-4">Premium Parking in Elite Cities</h2>
              <p className="text-muted-foreground">
                Discover curated events in South Africa's most prestigious locations
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
                      <h3 className="text-xl font-light mb-2">{city.name}</h3>
                      <p className="text-white/90 text-sm">{city.eventCount} exclusive events</p>
                    </div>
                  </BlurCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-24 bg-secondary/30 relative">
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Diamond className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-widest text-primary font-medium">Client Experiences</span>
              </div>
              <h2 className="text-3xl font-light tracking-tight mb-4">Exceptional Service Testimonials</h2>
              <p className="text-muted-foreground">
                Hear from our discerning clientele about their premium parking experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <BlurCard 
                  key={index} 
                  className="p-8 hover:border-primary/20"
                  intensity="medium"
                  hover
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/50"
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
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </BlurCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <Diamond className="h-5 w-5 text-primary" />
                <span className="text-sm uppercase tracking-widest text-primary font-medium">Elevate Your Experience</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                Reserve Your Premium Parking Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our discerning clientele who value convenience, security, and prestige. 
                Reserve your spot now and experience the Lux Park difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="rounded-none px-8 shadow-md" asChild>
                  <Link to="/events">Browse Events</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-none px-8" asChild>
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
