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
    imageUrl:
      "https://res.cloudinary.com/lxthanh269/image/upload/v1742743685/btn-hiep-phu/content1_rm4gze.png",
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
    videoUrl:
      "https://res.cloudinary.com/lxthanh269/video/upload/v1742743689/btn-hiep-phu/radio1_plw5e3.mp4",
    link: "https://www.facebook.com/share/r/15w3yXS8G8/",
  },
  {
    id: "3",
    title: "MINI GAME 1: ĐỔI AVATAR TRẠI",
    date: "20/03/2025",
    // time: "3:00 PM - 6:30 PM",
    description:
      'Mini game khởi động trại thường niên 2025 "UNBOX - MỞ LÒNG" đã bắt đầu! Hãy thay avatar có khung logo, chia sẻ bài viết kèm hashtag #UNBOX2025 #BTNHIEPPHU để nhận ngay móc khóa độc quyền. ⏳ Thời gian: 20.03 - 22.04.2025. Đừng bỏ lỡ cơ hội khuấy động không khí trước ngày hội lớn!',
    // location: "Culinary Institute",
    type: "minigame",
    imageUrl:
      "https://res.cloudinary.com/lxthanh269/image/upload/v1742743685/btn-hiep-phu/minigame1_rpsufu.png",
    link: "https://www.facebook.com/share/p/1AcdsjgTuw/",
  },
  {
    id: "4",
    title: "Comming soon",
    date: "26/03/2025",
    // time: "8:00 AM - 4:30 PM",
    description: "Comming soon",
    // location: "Mountain Range",
    type: "content",
    imageUrl:
      "https://res.cloudinary.com/lxthanh269/image/upload/v1742743685/btn-hiep-phu/commingsoon_dtlwyn.png",
    link: "#",
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
