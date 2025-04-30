'use client'
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { createBooking } from "@/app/actions/actions";

// Mock event data
const mockEvent = {
  id: 1,
  title: "Cape Town Jazz Festival",
  type: "Concerts",
  image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  city: "Cape Town",
  venue: "Cape Town ICC",
  address: "Convention Square, 1 Lower Long St, Cape Town",
  date: "Apr 15 - Apr 17, 2023",
  time: "Gates open at 5:00 PM",
  description: "The Cape Town International Jazz Festival is an annual music festival held in Cape Town, South Africa. It is the largest jazz festival in sub-Saharan Africa. The festival presents live music over 2 days on 5 stages with more than 40 artists performing.",
  parkingMap: "https://images.unsplash.com/photo-1530292943044-4ee424efddde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  parkingZones: [
    {
      id: "A",
      name: "VIP Zone A",
      description: "Premium parking adjacent to main entrance. Direct access to VIP entrance.",
      capacity: 50,
      available: 18,
      price: 750,
      features: ["Covered parking", "Security personnel", "Direct access to VIP entrance", "Car display area"]
    },
    {
      id: "B",
      name: "Premium Zone B",
      description: "Close to main entrance with dedicated security. Short walking distance to venue.",
      capacity: 100,
      available: 32,
      price: 500,
      features: ["Partially covered", "Security patrol", "5 minute walk to entrance", "Well-lit area"]
    },
    {
      id: "C",
      name: "Standard Zone C",
      description: "Standard parking with good access to the venue. Well-lit and patrolled.",
      capacity: 200,
      available: 87,
      price: 250,
      features: ["Open-air parking", "Security patrol", "10 minute walk to entrance", "Well-lit area"]
    },
    {
      id: "D",
      name: "Economy Zone D",
      description: "Budget-friendly parking option. Slightly longer walk to the venue.",
      capacity: 300,
      available: 143,
      price: 150,
      features: ["Open-air parking", "15-20 minute walk to entrance", "Shuttle service available"]
    }
  ]
};

// Mock car makes for dropdown
const carMakes = [
  "Audi", "BMW", "Chevrolet", "Ford", "Honda", "Hyundai", "Jaguar", "Kia", 
  "Land Rover", "Lexus", "Mazda", "Mercedes-Benz", "Nissan", "Porsche", 
  "Renault", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"
];

// Mock car colors for dropdown
const carColors = [
  "Black", "White", "Silver", "Gray", "Red", "Blue", "Green", "Yellow",
  "Orange", "Purple", "Brown", "Gold", "Beige", "Bronze", "Burgundy"
];

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // In a real app, we would fetch the event data based on the ID
  // For this example, we'll use the mock data
  const event = mockEvent;
  
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [carDetails, setCarDetails] = useState({
    licensePlate: "",
    make: "",
    color: ""
  });
  
  const [activeTab, setActiveTab] = useState("info");
  const [bookingStep, setBookingStep] = useState(1);
  
  const handleZoneSelect = (zoneId: string) => {
    setSelectedZone(zoneId);
    setActiveTab("booking");
    setBookingStep(1);
  };
  
  const handleCarDetailsChange = (field: string, value: string) => {
    setCarDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const validateCarDetails = () => {
    return (
      carDetails.licensePlate.trim() !== "" &&
      carDetails.make !== "" &&
      carDetails.color !== ""
    );
  };
  
  const handleNextStep = () => {
    if (bookingStep === 1) {
      if (validateCarDetails()) {
        setBookingStep(2);
      } else {
        toast({
          title: "Missing information",
          description: "Please fill in all vehicle details.",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleBooking = async () => {
    const result = await createBooking({
      eventId: 1,
      zoneId: "A",
      licensePlate: "XYZ123",
      carMake: "Toyota",
      carColor: "Blue",
      userEmail: "user@example.com",
    });
  
    if (result.success) {
      // Show success toast
    } else {
      // Show error toast
    }
  };
  
  const selectedZoneData = selectedZone 
    ? event.parkingZones.find(zone => zone.id === selectedZone) 
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  {event.type}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{event.venue}, {event.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="info">Event Info</TabsTrigger>
                <TabsTrigger value="parking">Parking Map</TabsTrigger>
                <TabsTrigger value="booking">Book Now</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <BlurCard className="p-6" intensity="light">
                      <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
                      <p className="text-muted-foreground mb-6">{event.description}</p>
                      
                      <h3 className="text-lg font-semibold mb-3">Venue Details</h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <div>
                            <p className="font-medium">{event.venue}</p>
                            <p className="text-muted-foreground">{event.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                            <line x1="16" x2="16" y1="2" y2="6"></line>
                            <line x1="8" x2="8" y1="2" y2="6"></line>
                            <line x1="3" x2="21" y1="10" y2="10"></line>
                          </svg>
                          <div>
                            <p className="font-medium">Date & Time</p>
                            <p className="text-muted-foreground">{event.date}</p>
                            <p className="text-muted-foreground">{event.time}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <Button className="w-full sm:w-auto" onClick={() => setActiveTab("parking")}>
                          View Parking Options
                        </Button>
                      </div>
                    </BlurCard>
                  </div>
                  
                  <div>
                    <BlurCard className="p-6" intensity="light">
                      <h2 className="text-xl font-semibold mb-4">Parking Information</h2>
                      <div className="space-y-4">
                        {event.parkingZones.map((zone) => (
                          <div key={zone.id} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                            <div>
                              <h3 className="font-medium">{zone.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {zone.available} spots left
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-primary">R{zone.price}</p>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="mt-1"
                                onClick={() => handleZoneSelect(zone.id)}
                              >
                                Select
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-border">
                        <h3 className="font-medium mb-3">Need Help?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          If you have questions about parking for this event, contact our support team.
                        </p>
                        <Button variant="outline" className="w-full" asChild>
                          <Link to="/contact">Contact Support</Link>
                        </Button>
                      </div>
                    </BlurCard>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="parking" className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <BlurCard className="p-6" intensity="light">
                      <h2 className="text-2xl font-semibold mb-4">Parking Map</h2>
                      <div className="mb-6 rounded-lg overflow-hidden border border-border">
                        <img
                          src={event.parkingMap}
                          alt="Parking Map"
                          className="w-full h-auto"
                        />
                      </div>
                      <p className="text-muted-foreground mb-8">
                        The map above shows the different parking zones available for this event.
                        Each zone offers different benefits and pricing. Select a zone from the right
                        to see more details and book your spot.
                      </p>
                      
                      <h3 className="text-lg font-semibold mb-3">Parking Instructions</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                          <p>Arrive at least 90 minutes before the event to avoid traffic congestion.</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                          <p>Have your booking confirmation ready on your phone to show at the entrance.</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                          <p>Follow the signs and attendant instructions to your designated zone.</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                          <p>Park only in your designated zone. Vehicles in incorrect zones may be relocated.</p>
                        </li>
                      </ul>
                    </BlurCard>
                  </div>
                  
                  <div>
                    <BlurCard className="p-6 sticky top-24" intensity="light">
                      <h2 className="text-xl font-semibold mb-4">Parking Zones</h2>
                      <div className="space-y-6">
                        {event.parkingZones.map((zone) => (
                          <div key={zone.id} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">
                                Zone {zone.id}: {zone.name}
                              </h3>
                              <span className="font-semibold text-primary">R{zone.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{zone.description}</p>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Features:</h4>
                              <ul className="text-sm space-y-1">
                                {zone.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="pt-2">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Availability:</span>
                                <span className="font-medium">{zone.available}/{zone.capacity}</span>
                              </div>
                              <div className="w-full bg-secondary rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{ width: `${(zone.available / zone.capacity) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            <Button 
                              className="w-full mt-2" 
                              onClick={() => handleZoneSelect(zone.id)}
                            >
                              Book This Zone
                            </Button>
                          </div>
                        ))}
                      </div>
                    </BlurCard>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="booking" className="animate-fade-in">
                {!selectedZone ? (
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-semibold mb-4">Select a Parking Zone</h2>
                    <p className="text-muted-foreground mb-6">
                      Please select a parking zone first to proceed with your booking.
                    </p>
                    <Button onClick={() => setActiveTab("parking")}>
                      View Parking Options
                    </Button>
                  </div>
                ) : (
                  <div className="max-w-3xl mx-auto">
                    <BlurCard className="p-6" intensity="medium">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold">Booking Details</h2>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          Step {bookingStep} of 2
                        </span>
                      </div>
                      
                      {bookingStep === 1 && (
                        <div className="space-y-6 animate-fade-in">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Vehicle Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="license-plate">License Plate</Label>
                                <Input
                                  id="license-plate"
                                  placeholder="e.g., ABC 123 GP"
                                  value={carDetails.licensePlate}
                                  onChange={(e) => handleCarDetailsChange("licensePlate", e.target.value)}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="car-make">Car Make</Label>
                                <Select
                                  value={carDetails.make}
                                  onValueChange={(value) => handleCarDetailsChange("make", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select car make" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {carMakes.map((make) => (
                                      <SelectItem key={make} value={make}>
                                        {make}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="car-color">Car Color</Label>
                                <Select
                                  value={carDetails.color}
                                  onValueChange={(value) => handleCarDetailsChange("color", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select car color" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {carColors.map((color) => (
                                      <SelectItem key={color} value={color}>
                                        {color}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-4">Selected Parking</h3>
                            <div className="bg-secondary/50 p-4 rounded-lg">
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-medium">
                                    {selectedZoneData?.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {selectedZoneData?.description}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm text-muted-foreground">Price</p>
                                  <p className="font-semibold text-primary">
                                    R{selectedZoneData?.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-4 flex justify-between">
                            <Button variant="outline" onClick={() => setActiveTab("parking")}>
                              Back to Map
                            </Button>
                            <Button onClick={handleNextStep}>
                              Continue to Payment
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {bookingStep === 2 && (
                        <div className="space-y-6 animate-fade-in">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="card-number">Card Number</Label>
                                <Input
                                  id="card-number"
                                  placeholder="•••• •••• •••• ••••"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="name-on-card">Name on Card</Label>
                                <Input
                                  id="name-on-card"
                                  placeholder="e.g., John Smith"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="expiry-date">Expiry Date</Label>
                                <Input
                                  id="expiry-date"
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input
                                  id="cvv"
                                  placeholder="123"
                                  type="password"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="border-t border-border pt-6">
                            <h3 className="text-lg font-medium mb-4">Booking Summary</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <p>Event</p>
                                <p className="font-medium">{event.title}</p>
                              </div>
                              <div className="flex justify-between">
                                <p>Date</p>
                                <p className="font-medium">{event.date}</p>
                              </div>
                              <div className="flex justify-between">
                                <p>Parking Zone</p>
                                <p className="font-medium">{selectedZoneData?.name}</p>
                              </div>
                              <div className="flex justify-between">
                                <p>Vehicle</p>
                                <p className="font-medium">
                                  {carDetails.color} {carDetails.make} ({carDetails.licensePlate})
                                </p>
                              </div>
                              <div className="flex justify-between pt-2 border-t border-border">
                                <p className="font-medium">Total Amount</p>
                                <p className="font-semibold text-primary">
                                  R{selectedZoneData?.price}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-4 flex justify-between">
                            <Button variant="outline" onClick={() => setBookingStep(1)}>
                              Back
                            </Button>
                            <Button onClick={handleBooking}>
                              Complete Booking
                            </Button>
                          </div>
                          
                          <div className="pt-4 text-center text-sm text-muted-foreground">
                            <p>
                              By completing this booking, you agree to our{" "}
                              <Link to="/terms" className="text-primary hover:underline">
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link to="/privacy" className="text-primary hover:underline">
                                Privacy Policy
                              </Link>
                              .
                            </p>
                          </div>
                        </div>
                      )}
                    </BlurCard>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
