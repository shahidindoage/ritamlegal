"use client";
import { useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import "./media.css";

// Media Items
const imageItems = [
  { 
    src: "https://ritamlegal.com/img/media4.png", 
    alt: "Mr. Matrugupta Mishra delivering an insightful talk on the future of solar energy at Solar Power Congress 2024, hosted by EnergyWorld." 
  },
  { 
    src: "https://ritamlegal.com/img/media3.png", 
    alt: "The Ritam Legal team actively engaging in discussions on renewable energy policies at Solar Power Congress 2024 by EnergyWorld." 
  },
];

const videoItems = [
  { 
    src: "https://ritamlegal.com/img/media2.mp4", 
    alt: "Expert panel discussion on legal frameworks and policies shaping the renewable energy sector at Solar Power Congress 2024."
  },
];

export default function MediaGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.refresh();
    }
  }, []);

  return (
    <>
      <div className="media" style={{ backgroundColor: "#fff" }}>
        <div className="media-header-section">
          <h1 className="media-header-title">Gallery</h1>
        </div>

        {/* Image Gallery with Lightbox */}
        <div className="media-section">
          <LightGallery
            ref={galleryRef}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector=".gallery-item" // Ensures LightGallery correctly detects items
          >
          <div className="media-grid grid grid-cols-1 sm:grid-cols-2 gap-2">
  {imageItems.map((item, index) => (
    <a
      key={index}
      href={item.src} // Required for LightGallery
      data-src={item.src} // Ensures proper detection
      className="gallery-item block break-inside-avoid"
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-auto p-0"
      />
      <div className="media-caption bg-black bg-opacity-60 text-white text-center p-2">
        {item.alt}
      </div>
    </a>
  ))}
</div>

          </LightGallery>
        </div>

        {/* Video Section */}
        <div className="media-section">
          <div className="media-grid">
            {videoItems.map((item, index) => (
              <div
                key={index}
                className="video-container"
                style={{ display: "block", breakInside: "avoid", padding: "5px", width: "100%" }}
              >
                <div className="video-player">
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  style={{ width: "300px", height: "auto" }}
                  aria-label={item.alt}
                />
                <div className="video-caption">{item.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
