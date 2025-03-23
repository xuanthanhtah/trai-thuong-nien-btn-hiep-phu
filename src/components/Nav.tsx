
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Plane } from 'lucide-react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-4 bg-background/80 backdrop-blur-lg shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="font-display text-xl font-bold text-foreground flex items-center gap-2"
          >
            <Plane className="h-5 w-5 text-primary rotate-45" />
            <span>TravelScroll</span>
          </a>
          
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground transition-colors"
            >
              Destinations
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground transition-colors"
            >
              Itinerary
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground transition-colors"
            >
              Gallery
            </a>
            <a
              href="#"
              className="ml-4 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
