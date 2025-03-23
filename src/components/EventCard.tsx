
import React from 'react';
import { Event } from './EventTimeline';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const getEventTypeClass = (type: Event['type']) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-500/10 text-blue-500 border-blue-200';
      case 'workshop':
        return 'bg-purple-500/10 text-purple-500 border-purple-200';
      case 'networking':
        return 'bg-green-500/10 text-green-500 border-green-200';
      case 'keynote':
        return 'bg-amber-500/10 text-amber-500 border-amber-200';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-200';
    }
  };

  return (
    <div 
      className="ml-10 reveal" 
      style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
    >
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
      
      <div className={cn(
        "p-6 rounded-xl border bg-card/50 backdrop-blur-sm relative",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-card"
      )}>
        <span className={cn(
          "inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 border",
          getEventTypeClass(event.type)
        )}>
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
        
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{event.date}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{event.time}</span>
          </div>
          
          {event.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
