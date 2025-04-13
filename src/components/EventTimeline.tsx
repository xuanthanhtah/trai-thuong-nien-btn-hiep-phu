import React, { useEffect, useRef } from "react";
import EventCard from "./EventCard";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  description: string;
  location?: string;
  type: "radio" | "minigame" | "content";
  imageUrl?: string;
  videoUrl?: string;
  link?: string;
}

interface EventTimelineProps {
  events: Event[];
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only set up observers if we're in a browser environment
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Observe all elements with reveal class
    const timelineItems = document.querySelectorAll(".reveal");
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    // Only observe timeline connectors if not on mobile
    if (!isMobile) {
      const timelineConnectors = document.querySelectorAll(
        ".timeline-connector"
      );
      timelineConnectors.forEach((item) => {
        observer.observe(item);
      });
    }

    // Cleanup observer on unmount
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });

      if (!isMobile) {
        const timelineConnectors = document.querySelectorAll(
          ".timeline-connector"
        );
        timelineConnectors.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, [isMobile]);

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <div className="min-h-screen flex flex-col justify-center items-center px-4 relative bg-gradient-to-b from-background to-secondary/20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="px-3 py-1 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/10">
              TRẠI THƯỜNG NIÊN BAN THANH NIÊN HIỆP PHÚ 2025
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-primary">UNBOX</span>
            <span className="md:inline block md:ml-1 mt-2">
              {isMobile ? "MỞ LÒNG" : "- MỞ LÒNG"}
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Vì, ấy chính Ngài là sự hòa hiệp của chúng ta; Ngài đã hiệp cả hai
            lại làm một, phá đổ bức tường ngăn cách. Ê-phê-sô 2:14
          </p>
          <button
            onClick={scrollToTimeline}
            className="animate-fade-in scroll-indicator group inline-flex items-center justify-center"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="sr-only">Scroll down</span>
            <ChevronDown className="h-10 w-10 text-primary transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      <div ref={timelineRef} className="py-20 px-4 md:px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hành trình đi trại của chúng ta
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bạn đã sẵn sàng mở lòng và khám phá những điều tuyệt vời chưa?
              Trại thường niên 2025 của Ban Thanh Niên Hiệp Phú với chủ đề
              "UNBOX – MỞ LÒNG" sẽ mang đến cho bạn cơ hội kết nối, chữa lành và
              trải nghiệm tình yêu thương trong Chúa.
            </p>
          </div>

          <div className="relative">
            {/* Center timeline - hidden on mobile */}
            {!isMobile && (
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            )}

            {events.map((event, index) => (
              <div
                key={event.id}
                className={cn(
                  "relative mb-16 md:mb-24 last:mb-0 items-center",
                  // Grid layout different for mobile vs desktop
                  isMobile ? "grid grid-cols-1" : "grid grid-cols-2 gap-8",
                  // Only apply timeline-connector class on desktop
                  !isMobile ? "timeline-connector" : ""
                )}
              >
                {!isMobile ? (
                  // Desktop view - alternating sides
                  index % 2 === 0 ? (
                    <>
                      <div className="md:text-right col-span-1 reveal">
                        <EventCard event={event} index={index} />
                      </div>
                      <div className="col-span-1 hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-1 hidden md:block"></div>
                      <div className="col-span-1 reveal">
                        <EventCard event={event} index={index} />
                      </div>
                    </>
                  )
                ) : (
                  // Mobile view - single column layout
                  <div className="col-span-1 reveal">
                    <EventCard event={event} index={index} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
