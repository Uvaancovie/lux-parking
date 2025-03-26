
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlurCard from "@/components/ui/BlurCard";
import { Diamond } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/30"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-indigo-400/5 rounded-full blur-3xl animate-pulse-soft animation-delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-foreground/80">
                <Diamond className="h-4 w-4 text-primary" /> 
                <span>Exclusive Parking Experience</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-light tracking-tight leading-tight">
                Elevate Your<br />
                <span className="text-gradient font-normal">Event Arrival</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg font-light">
                Reserve premium parking spaces at South Africa's most exclusive events. Arrive with confidence, depart without delay.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none px-8 shadow-md" asChild>
                <Link to="/events">Discover Events</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-none px-8" asChild>
                <Link to="/how-it-works">Our Services</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-background bg-secondary/80 flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-medium text-foreground">5,000+</span> discerning clients
              </p>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <BlurCard 
              className="p-6 md:p-8 w-full max-w-md mx-auto lg:ml-auto animate-blur-in"
              intensity="heavy"
            >
              <div className="absolute -top-3 -right-3 py-2 px-3 bg-primary/90 text-white text-xs uppercase tracking-wider shadow-md">
                Featured
              </div>
              <div className="aspect-[4/3] rounded-md bg-muted/50 mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588611592055-b199e95544e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Exclusive event parking" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-light">Cape Town Jazz Festival</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium">Apr 15 - Apr 17</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">Cape Town ICC</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Parking Zones</p>
                    <p className="font-medium">4 Available</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Starting at</p>
                    <p className="font-medium text-primary">R350/day</p>
                  </div>
                </div>
                <Button className="w-full rounded-none mt-4 shadow-sm" asChild>
                  <Link to="/events/1">Reserve Now</Link>
                </Button>
              </div>
            </BlurCard>
            
            {/* Floating notification */}
            <BlurCard 
              className="absolute -top-6 -left-6 p-4 max-w-[220px] animate-fade-in delay-300"
              intensity="light"
              hover
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="text-sm">
                  <p className="font-medium">VIP Access Confirmed</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
            </BlurCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
