import React from "react";
import EventTimeline, { Event } from "@/components/EventTimeline";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const events: Event[] = [
  {
    id: "1",
    title: "Mở link đăng kí",
    date: "05/03/2025",
    // time: "6:00 PM - 9:00 PM",
    description:
      "Vậy là sau bao ngày chờ đợi, admin đã được cho phép để trao gửi thông tin về Trại Thường Niên 2025 đến bạn hữu gần xa. Bạn đọc thông tin bên dưới và nhấp vào link đăng kí để cùng tham gia với chúng mình nha!!!",
    // location: "Grand Plaza Hotel",
    type: "content",
    imageUrl: "/src/assets/content1.png",
    link: "https://www.facebook.com/share/1EkXuC3PeQ/",
  },
  {
    id: "2",
    title: "Sâu sắc về bài học trại",
    date: "12/03/2025",
    // time: "9:00 AM - 1:00 PM",
    description:
      'Mất kết nối khiến chúng ta khép kín, khó chia sẻ cảm xúc. Hãy bắt đầu mở lòng với Chúa Giê-xu và cộng đồng đức tin. Đừng bỏ lỡ trại thường niên 2025 "UNBOX" - MỞ LÒNG từ 29/04 - 02/05 tại Lạc Dương, Lâm Đồng, để kết nối và chữa lành! 💗🌿',
    // location: "City Center",
    type: "radio",
    videoUrl: "/src/assets/radio1.mp4",
    link: "https://www.facebook.com/share/r/15w3yXS8G8/",
  },
  {
    id: "3",
    title: "Culinary Workshop: Local Cuisine",
    date: "June 16, 2024",
    time: "3:00 PM - 6:30 PM",
    description:
      "Join our master chef for an interactive cooking class and learn how to prepare authentic local specialties using traditional methods.",
    location: "Culinary Institute",
    type: "content",
    videoUrl:
      "https://player.vimeo.com/external/409539003.sd.mp4?s=46da7683168e4d3a9df69c8c5e535279f2b7a214&profile_id=164&oauth2_token_id=57447761",
    link: "https://example.com/cooking-class",
  },
  {
    id: "4",
    title: "Mountain Excursion",
    date: "June 17, 2024",
    time: "8:00 AM - 4:30 PM",
    description:
      "Embark on a breathtaking journey through the mountain range. Witness stunning vistas and stop at picturesque villages along the way.",
    location: "Mountain Range",
    type: "content",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "https://example.com/mountain-excursion",
  },
  {
    id: "5",
    title: "Local Market & Craft Shopping",
    date: "June 18, 2024",
    time: "10:00 AM - 2:00 PM",
    description:
      "Immerse yourself in the vibrant local market. Meet artisans, sample regional delicacies, and find unique souvenirs to bring home.",
    location: "Central Market",
    type: "content",
    imageUrl:
      "https://images.unsplash.com/photo-1519248200454-8f2590ed22b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    link: "https://example.com/local-market",
  },
  {
    id: "6",
    title: "Traditional Dance Workshop",
    date: "June 19, 2024",
    time: "2:00 PM - 4:00 PM",
    description:
      "Learn the basics of traditional folk dances from professional performers in this fun and engaging activity for all skill levels.",
    location: "Cultural Center",
    type: "content",
    videoUrl:
      "https://player.vimeo.com/external/448115772.sd.mp4?s=d2a4c8b4d1d8d9e4e3f8f0d9c5d1e1c1b6a7a5a3&profile_id=164&oauth2_token_id=57447761",
    link: "https://example.com/dance-workshop",
  },
  {
    id: "7",
    title: "Farewell Sunset Cruise",
    date: "June 20, 2024",
    time: "5:00 PM - 8:00 PM",
    description:
      "Conclude your journey with a magical sunset cruise. Enjoy a gourmet dinner, live music, and toast to new friendships and experiences.",
    location: "Harbor Marina",
    type: "content",
    imageUrl:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    link: "https://example.com/sunset-cruise",
  },
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
