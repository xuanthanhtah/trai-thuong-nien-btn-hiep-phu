
import React from 'react';
import EventTimeline, { Event } from '@/components/EventTimeline';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const events: Event[] = [
  {
    id: "1",
    title: "Opening Ceremony & Welcome Mixer",
    date: "January 15, 2024",
    time: "6:00 PM - 9:00 PM",
    description: "Join us for the official opening ceremony followed by a networking mixer. Meet fellow attendees and speakers in a relaxed environment.",
    location: "Grand Ballroom, Tech Center",
    type: "networking"
  },
  {
    id: "2",
    title: "Future of Technology Keynote",
    date: "January 16, 2024",
    time: "10:00 AM - 11:30 AM",
    description: "An inspiring keynote presentation by industry leaders discussing emerging technologies and future trends.",
    location: "Main Auditorium",
    type: "keynote"
  },
  {
    id: "3",
    title: "Innovation Workshop: Design Thinking",
    date: "January 16, 2024",
    time: "1:00 PM - 3:30 PM",
    description: "Interactive workshop on applying design thinking principles to solve complex problems. Includes hands-on exercises and group activities.",
    location: "Workshop Room A",
    type: "workshop"
  },
  {
    id: "4",
    title: "Tech Panel: Artificial Intelligence Ethics",
    date: "January 17, 2024",
    time: "11:00 AM - 12:30 PM",
    description: "Distinguished experts discuss the ethical implications of AI development and implementation in various industries.",
    location: "Panel Hall",
    type: "conference"
  },
  {
    id: "5",
    title: "Startup Showcase",
    date: "January 17, 2024",
    time: "2:00 PM - 5:00 PM",
    description: "Discover innovative startups and their groundbreaking solutions. Connect with founders and potential investors.",
    location: "Exhibition Hall",
    type: "networking"
  },
  {
    id: "6",
    title: "Hands-on Coding Workshop",
    date: "January 18, 2024",
    time: "9:00 AM - 12:00 PM",
    description: "Roll up your sleeves for this practical coding session. Learn new skills and techniques from expert developers.",
    location: "Tech Lab",
    type: "workshop"
  },
  {
    id: "7",
    title: "Closing Keynote & Awards Ceremony",
    date: "January 18, 2024",
    time: "4:00 PM - 6:00 PM",
    description: "Celebrate the conclusion of our event with an inspiring keynote and recognition of outstanding contributions.",
    location: "Main Auditorium",
    type: "keynote"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <EventTimeline events={events} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
