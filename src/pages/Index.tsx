
import React from 'react';
import EventTimeline, { Event } from '@/components/EventTimeline';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const events: Event[] = [
  {
    id: "1",
    title: "Departure & Welcome Dinner",
    date: "June 15, 2024",
    time: "6:00 PM - 9:00 PM",
    description: "Meet your fellow travelers at our welcome dinner. Get to know your guides and receive a detailed overview of your upcoming adventure.",
    location: "Grand Plaza Hotel",
    type: "networking"
  },
  {
    id: "2",
    title: "Historic City Tour",
    date: "June 16, 2024",
    time: "9:00 AM - 1:00 PM",
    description: "Explore the ancient streets and monuments with our expert local guide. Learn about the rich cultural heritage of this magnificent city.",
    location: "City Center",
    type: "keynote"
  },
  {
    id: "3",
    title: "Culinary Workshop: Local Cuisine",
    date: "June 16, 2024",
    time: "3:00 PM - 6:30 PM",
    description: "Join our master chef for an interactive cooking class and learn how to prepare authentic local specialties using traditional methods.",
    location: "Culinary Institute",
    type: "workshop"
  },
  {
    id: "4",
    title: "Mountain Excursion",
    date: "June 17, 2024",
    time: "8:00 AM - 4:30 PM",
    description: "Embark on a breathtaking journey through the mountain range. Witness stunning vistas and stop at picturesque villages along the way.",
    location: "Mountain Range",
    type: "conference"
  },
  {
    id: "5",
    title: "Local Market & Craft Shopping",
    date: "June 18, 2024",
    time: "10:00 AM - 2:00 PM",
    description: "Immerse yourself in the vibrant local market. Meet artisans, sample regional delicacies, and find unique souvenirs to bring home.",
    location: "Central Market",
    type: "networking"
  },
  {
    id: "6",
    title: "Traditional Dance Workshop",
    date: "June 19, 2024",
    time: "2:00 PM - 4:00 PM",
    description: "Learn the basics of traditional folk dances from professional performers in this fun and engaging activity for all skill levels.",
    location: "Cultural Center",
    type: "workshop"
  },
  {
    id: "7",
    title: "Farewell Sunset Cruise",
    date: "June 20, 2024",
    time: "5:00 PM - 8:00 PM",
    description: "Conclude your journey with a magical sunset cruise. Enjoy a gourmet dinner, live music, and toast to new friendships and experiences.",
    location: "Harbor Marina",
    type: "keynote"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pattern-worldmap">
      <Nav />
      <main>
        <EventTimeline events={events} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
