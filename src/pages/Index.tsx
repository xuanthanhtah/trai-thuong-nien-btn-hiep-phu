
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
    type: "networking",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://example.com/welcome-dinner"
  },
  {
    id: "2",
    title: "Historic City Tour",
    date: "June 16, 2024",
    time: "9:00 AM - 1:00 PM",
    description: "Explore the ancient streets and monuments with our expert local guide. Learn about the rich cultural heritage of this magnificent city.",
    location: "City Center",
    type: "keynote",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    link: "https://example.com/city-tour"
  },
  {
    id: "3",
    title: "Culinary Workshop: Local Cuisine",
    date: "June 16, 2024",
    time: "3:00 PM - 6:30 PM",
    description: "Join our master chef for an interactive cooking class and learn how to prepare authentic local specialties using traditional methods.",
    location: "Culinary Institute",
    type: "workshop",
    videoUrl: "https://player.vimeo.com/external/409539003.sd.mp4?s=46da7683168e4d3a9df69c8c5e535279f2b7a214&profile_id=164&oauth2_token_id=57447761",
    link: "https://example.com/cooking-class"
  },
  {
    id: "4",
    title: "Mountain Excursion",
    date: "June 17, 2024",
    time: "8:00 AM - 4:30 PM",
    description: "Embark on a breathtaking journey through the mountain range. Witness stunning vistas and stop at picturesque villages along the way.",
    location: "Mountain Range",
    type: "conference",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://example.com/mountain-excursion"
  },
  {
    id: "5",
    title: "Local Market & Craft Shopping",
    date: "June 18, 2024",
    time: "10:00 AM - 2:00 PM",
    description: "Immerse yourself in the vibrant local market. Meet artisans, sample regional delicacies, and find unique souvenirs to bring home.",
    location: "Central Market",
    type: "networking",
    imageUrl: "https://images.unsplash.com/photo-1519248200454-8f2590ed22b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    link: "https://example.com/local-market"
  },
  {
    id: "6",
    title: "Traditional Dance Workshop",
    date: "June 19, 2024",
    time: "2:00 PM - 4:00 PM",
    description: "Learn the basics of traditional folk dances from professional performers in this fun and engaging activity for all skill levels.",
    location: "Cultural Center",
    type: "workshop",
    videoUrl: "https://player.vimeo.com/external/448115772.sd.mp4?s=d2a4c8b4d1d8d9e4e3f8f0d9c5d1e1c1b6a7a5a3&profile_id=164&oauth2_token_id=57447761",
    link: "https://example.com/dance-workshop"
  },
  {
    id: "7",
    title: "Farewell Sunset Cruise",
    date: "June 20, 2024",
    time: "5:00 PM - 8:00 PM",
    description: "Conclude your journey with a magical sunset cruise. Enjoy a gourmet dinner, live music, and toast to new friendships and experiences.",
    location: "Harbor Marina",
    type: "keynote",
    imageUrl: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    link: "https://example.com/sunset-cruise"
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
