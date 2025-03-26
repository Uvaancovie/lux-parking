
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Diamond } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Diamond size={24} className="text-primary" />
              <h1 className="text-3xl md:text-4xl font-light tracking-wider">
                <span className="font-light">LUX</span>{" "}
                <span className="font-semibold">PARK</span>{" "}
                <span className="font-light text-primary">CONTACT</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground mb-10">
              Our concierge team is ready to assist you with premium parking reservations at elite events across South Africa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary/40 border border-border/50 p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6 text-primary">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground mb-1">General Inquiries:</p>
                      <a href="mailto:info@luxpark.co.za" className="text-foreground hover:text-primary transition-colors">
                        info@luxpark.co.za
                      </a>
                      <p className="text-muted-foreground mt-3 mb-1">Booking Requests:</p>
                      <a href="mailto:bookings@luxpark.co.za" className="text-foreground hover:text-primary transition-colors">
                        bookings@luxpark.co.za
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Phone</h3>
                      <a href="tel:+27123456789" className="text-foreground hover:text-primary transition-colors">
                        +27 12 345 6789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Head Office</h3>
                      <p className="text-muted-foreground">
                        123 Luxury Avenue<br />
                        Sandton<br />
                        Johannesburg, 2196<br />
                        South Africa
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Operating Hours</h3>
                      <p className="text-muted-foreground">
                        Monday to Friday: 8:00 AM - 6:00 PM<br />
                        Weekends: 9:00 AM - 3:00 PM<br />
                        <span className="italic">(Event days hours may vary)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/40 border border-border/50 p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6 text-primary">Connect With Us</h2>
                
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for the latest updates on upcoming events and exclusive parking opportunities.
                </p>
                
                <div className="flex space-x-6 mb-10">
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
                
                <h3 className="text-foreground font-medium mb-4">Join Our Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Subscribe to receive updates on upcoming events and exclusive parking offers.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
