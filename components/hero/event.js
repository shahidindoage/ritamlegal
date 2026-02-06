"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./event.css"; // Import your CSS file

const EventSection = () => {
  // Sample event data
  const eventData = {
    title: "Ritam Legal Team Engages in Thought-Provoking Discussions on Renewable Energy Policies at Solar Power Congress 2024, EnergyWorld",
    logo: "/img/eventlogo.png",
    media: [
      { type: "image", url: "/img/media4.png", alt :"Mr. Matrugupta Mishra delivering an insightful talk on the future of solar energy at Solar Power Congress 2024, hosted by EnergyWorld." },
    //   { type: "video", url: "/img/media2.mp4" },
      { type: "image", url: "/img/media3.png", alt :"The Ritam Legal team actively engaging in discussions on renewable energy policies at Solar Power Congress 2024 by EnergyWorld." },
    ],
  };

  const { title, logo, media } = eventData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
        setFade(false); // Start fade-in animation
      }, 500); // Delay to match fade-out effect
    }, 7000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [media.length]);

  return (
    <div className="event-container">
      {/* Left Side - Event Details */}
      <div className="event-details">
        <Image src={logo} alt="Event Logo" width={300} height={200} className="event-logo" />
        <h2 className="event-title">{title}</h2>
      </div>

      {/* Right Side - Image/Video Slider */}
      <div className={`event-slider ${fade ? "fade-out" : "fade-in"}`}>
        {media[currentIndex].type === "image" ? (
          <Image
            src={media[currentIndex].url}
            alt={media[currentIndex].alt}
            width={600}
            height={350}
            className="slider-image"
          />
        ) : (
          <video className="slider-video" autoPlay muted loop>
            <source src={media[currentIndex].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default EventSection;
