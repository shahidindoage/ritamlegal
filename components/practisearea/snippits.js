"use client";
import React from "react";
import { practiseAreas } from "@/public/data/practise"; // Importing the data object
import "./snippits.css";
import { usePathname } from "next/navigation";

const PractiseAreaPage = () => {
  const pathname = usePathname();
  const match = pathname.match(/\/practise-area-described\/(\d+)\//);
  const extractedNumber = match ? match[1] : null;

  // Filter out the item with the extractedNumber as its ID
  const filteredAreas = practiseAreas.filter((area) => area.id.toString() !== extractedNumber);

  return (
    <>
      {/* Practice Areas Grid */}
      <div className="snippits-container">
        {filteredAreas.map((area) => (
          <div key={area.id} className="card">
            <a href={area.link} className="card-link">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${area.img})` }}
              >
                <div className="overlay">
                  <span className="card-title">{area.title}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default PractiseAreaPage;
