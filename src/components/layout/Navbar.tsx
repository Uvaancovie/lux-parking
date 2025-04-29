
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Diamond } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={cn(
          "relative px-3 py-2 text-sm font-light tracking-wide transition-colors",
          isActive 
            ? "text-primary" 
            : "text-foreground/80 hover:text-foreground"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
        )}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl tracking-widest flex items-center gap-2"
          >
            <Diamond size={24} className="text-primary" />
            <span className="font-light">LUX <span className="font-semibold">PARK</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
           
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="px-5 rounded-none" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" className="px-5 rounded-none shadow-sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground rounded-full transition-transform duration-300",
                  menuOpen ? "top-2 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground rounded-full transition-opacity duration-300",
                  menuOpen ? "opacity-0" : "opacity-100 top-2"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-foreground rounded-full transition-transform duration-300",
                  menuOpen ? "top-2 -rotate-45" : "top-4"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            menuOpen ? "max-h-screen py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-3 pt-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" size="sm" asChild className="justify-center">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" className="justify-center" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
