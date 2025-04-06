import React from "react";
import { Event } from "./EventTimeline";
import {
  Calendar,
  Clock,
  MapPin,
  RadioReceiver,
  ExternalLink,
  NotepadTextDashed,
  Gamepad,
  Church,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const isMobile = useIsMobile();

  const getEventTypeClass = (type: Event["type"]) => {
    switch (type) {
      case "content":
        return "bg-amber-500/10 text-amber-700 border-amber-200";
      case "radio":
        return "bg-purple-500/10 text-purple-600 border-purple-200";
      case "minigame":
        return "bg-green-500/10 text-green-600 border-green-200";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-200";
    }
  };

  const getEventTypeIcon = (type: Event["type"]) => {
    switch (type) {
      case "content":
        return <NotepadTextDashed className="h-4 w-4" />;
      case "radio":
        return <RadioReceiver className="h-4 w-4" />;
      case "minigame":
        return <Gamepad className="h-4 w-4" />;
      default:
        return <Church className="h-4 w-4" />;
    }
  };

  return (
    <div className="reveal" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
      {/* Only show the circle node on desktop */}
      {!isMobile && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>
      )}

      <div
        className={cn(
          "rounded-xl border bg-card/50 backdrop-blur-sm relative travel-card overflow-hidden",
          "transition-all duration-300 max-w-xl mx-auto"
        )}
      >
        {/* Image display for content and minigame type */}
        {event.imageUrl && (
          <div className="w-full h-48 overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
          </div>
        )}

        {/* Video display for radio type */}
        {event.videoUrl && (
          <div className="w-full h-auto overflow-hidden">
            <iframe
              src={event.videoUrl}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="p-6">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3 border",
              getEventTypeClass(event.type)
            )}
          >
            {getEventTypeIcon(event.type)}
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>

          <h3 className="text-xl font-bold mb-2">{event.title}</h3>

          <div className="flex items-center gap-1.5 mb-3 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{event.date}</span>
          </div>

          {/* Display time if available */}
          {event.time && (
            <div className="flex items-center gap-1.5 mb-3 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{event.time}</span>
            </div>
          )}

          {/* Display location if available */}
          {event.location && (
            <div className="flex items-center gap-1.5 mb-3 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}

          <p className="text-muted-foreground mb-4 line-clamp-3 text-justify">
            {event.description}
          </p>

          {event.link && (
            <Button
              variant="outline"
              className="mt-2 border-primary/20 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/20"
              asChild
            >
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Xem thông tin chi tiết
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
