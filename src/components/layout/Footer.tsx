
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <span className="text-primary font-bold">Park</span>
              <span>Reserve</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The simplest way to book premium parking for events across South Africa.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide uppercase text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Find Events
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide uppercase text-muted-foreground">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/80 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide uppercase text-muted-foreground">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-foreground/80">
                <span>Email:</span>
                <a href="mailto:info@parkreserve.com" className="hover:text-primary transition-colors">
                  info@parkreserve.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/80">
                <span>Phone:</span>
                <a href="tel:+27123456789" className="hover:text-primary transition-colors">
                  +27 12 345 6789
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ParkReserve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
