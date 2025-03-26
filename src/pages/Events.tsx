
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useSearchParams } from "react-router-dom";

// Mock data
const cities = ["All Cities", "Cape Town", "Johannesburg", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein"];

const eventTypes = ["All Events", "Concerts", "Festivals", "Sports", "Nightlife", "Exhibitions", "Conferences"];

const mockEvents = [
  {
    id: 1,
    title: "Cape Town Jazz Festival",
    type: "Concerts",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    city: "Cape Town",
    venue: "Cape Town ICC",
    date: "Apr 15 - Apr 17, 2023",
    parkingZones: 4,
    priceRange: "R250 - R750",
  },
  {
    id: 2,
    title: "Ultra Music Festival",
    type: "Festivals",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    city: "Johannesburg",
    venue: "Supersport Park",
    date: "Mar 5 - Mar 6, 2023",
    parkingZones: 6,
    priceRange: "R300 - R900",
  },
  {
    id: 3,
    title: "Currie Cup Final",
    type: "Sports",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    city: "Pretoria",
    venue: "Loftus Versfeld",
    date: "Jun 18, 2023",
    parkingZones: 5,
    priceRange: "R200 - R650",
  },
  {
    id: 4,
    title: "Durban July",
    type: "Sports",
    image: "https://images.unsplash.com/photo-1551234250-d88208c2ce14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    city: "Durban",
    venue: "Greyville Racecourse",
    date: "Jul 1, 2023",
    parkingZones: 8,
    priceRange: "R400 - R1200",
  },
  {
    id: 5,
    title: "Comic Con Africa",
    type: "Exhibitions",
    image: "https://images.unsplash.com/photo-1642235271085-17a6f2dcce23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    city: "Johannesburg",
    venue: "Johannesburg Expo Centre",
    date: "Sep 22 - Sep 25, 2023",
    parkingZones: 7,
    priceRange: "R250 - R850",
  },
  {
    id: 6,
    title: "Cape Town Electronic Music Festival",
    type: "Festivals",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    city: "Cape Town",
    venue: "Various Venues",
    date: "Feb 10 - Feb 12, 2023",
    parkingZones: 3,
    priceRange: "R200 - R600",
  },
  {
    id: 7,
    title: "Soweto Wine Festival",
    type: "Festivals",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    city: "Johannesburg",
    venue: "Walter Sisulu Square",
    date: "May 20 - May 21, 2023",
    parkingZones: 4,
    priceRange: "R180 - R500",
  },
  {
    id: 8,
    title: "Rage Festival",
    type: "Nightlife",
    image: "https://images.unsplash.com/photo-1541500792866-09d6aa0ec4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    city: "Durban",
    venue: "Various Venues",
    date: "Nov 26 - Dec 3, 2023",
    parkingZones: 5,
    priceRange: "R250 - R750",
  }
];

const Events: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCity = searchParams.get('city') || 'All Cities';
  
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedType, setSelectedType] = useState("All Events");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter events based on selections
  const filteredEvents = mockEvents.filter(event => {
    const matchesCity = selectedCity === "All Cities" || event.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesType = selectedType === "All Events" || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.venue.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCity && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-20 relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Find Events</h1>
              <p className="text-muted-foreground mb-8">
                Discover upcoming events across South Africa and secure your premium parking spot in advance.
              </p>
              
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search events, venues or locations..."
                  className="w-full py-6 pl-12 pr-4 bg-background rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters & Events List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
              <div className="w-full md:w-64 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">City</label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Event Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4 hidden md:block">
                  <Button variant="outline" className="w-full" onClick={() => {
                    setSelectedCity("All Cities");
                    setSelectedType("All Events");
                    setSearchTerm("");
                  }}>
                    Reset Filters
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">
                    {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"} Found
                  </h2>
                  <Button variant="outline" className="md:hidden" onClick={() => {
                    setSelectedCity("All Cities");
                    setSelectedType("All Events");
                    setSearchTerm("");
                  }}>
                    Reset Filters
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <BlurCard
                      key={event.id}
                      className="overflow-hidden hover:border-primary/20"
                      intensity="light"
                      hover
                    >
                      <div className="relative h-48">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-4">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                              <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>{event.venue}, {event.city}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-border flex justify-between items-center">
                          <div>
                            <p className="text-xs text-muted-foreground">Parking Zones: {event.parkingZones}</p>
                            <p className="font-medium text-primary">{event.priceRange}</p>
                          </div>
                          <Button size="sm" asChild>
                            <Link to={`/events/${event.id}`}>Details</Link>
                          </Button>
                        </div>
                      </div>
                    </BlurCard>
                  ))}
                </div>
                
                {filteredEvents.length === 0 && (
                  <div className="text-center py-20">
                    <h3 className="text-xl font-medium mb-2">No events found</h3>
                    <p className="text-muted-foreground mb-6">Try changing your search criteria</p>
                    <Button onClick={() => {
                      setSelectedCity("All Cities");
                      setSelectedType("All Events");
                      setSearchTerm("");
                    }}>
                      View All Events
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
