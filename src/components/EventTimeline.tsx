
import React, { useEffect, useRef } from 'react';
import EventCard from './EventCard';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location?: string;
  type: 'conference' | 'workshop' | 'networking' | 'keynote';
  imageUrl?: string;
  videoUrl?: string;
  link?: string;
}

interface EventTimelineProps {
  events: Event[];
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const timelineItems = document.querySelectorAll('.reveal');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    const timelineConnectors = document.querySelectorAll('.timeline-connector');
    timelineConnectors.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
      timelineConnectors.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="min-h-screen flex flex-col justify-center items-center px-4 relative bg-gradient-to-b from-background to-secondary/20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="px-3 py-1 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/10">
              UNFORGETTABLE JOURNEYS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Experience Our <span className="text-primary">Travel</span> Timeline
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join us for an extraordinary adventure across breathtaking landscapes, vibrant cultures, and unforgettable experiences.
          </p>
          <button
            onClick={scrollToTimeline}
            className="animate-fade-in scroll-indicator group inline-flex items-center justify-center"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="sr-only">Scroll down</span>
            <ChevronDown className="h-10 w-10 text-primary transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      <div ref={timelineRef} className="py-20 px-4 md:px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey Awaits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow our carefully crafted itinerary designed to provide the perfect blend of adventure, culture, and relaxation.
            </p>
          </div>

          <div className="relative">
            {/* Center timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {events.map((event, index) => (
              <div key={event.id} className={cn(
                "timeline-connector relative mb-16 md:mb-24 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
              )}>
                {/* Timeline node */}
                <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                </div>
                
                {/* Event card - alternating sides */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:text-right col-span-1 reveal" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                      <EventCard event={event} index={index} />
                    </div>
                    <div className="col-span-1 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="col-span-1 hidden md:block"></div>
                    <div className="col-span-1 reveal" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                      <EventCard event={event} index={index} />
                    </div>
                  </>
                )}
                
                {/* Mobile view - shows all events in a single column */}
                <div className="md:hidden col-span-1 reveal" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                  {index % 2 === 1 && <EventCard event={event} index={index} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
