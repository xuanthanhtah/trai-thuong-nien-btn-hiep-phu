
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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
            className="font-display text-xl font-bold text-foreground"
          >
            EventScroll
          </a>
          
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="ml-4 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
