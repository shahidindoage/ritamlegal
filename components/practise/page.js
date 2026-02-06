import React from "react";
import { practiseAreas } from "@/public/data/practise"; // Importing the data object
import './practise.css'
import Footer from "@/components/common/footer";
import Header from "@/components/common/header"
const PractiseAreaPage = () => {
  return (
      <>
    <div className="practise-page-container">
      {/* Top Header Section */}
      <div className="header-section">
        <h1 className="header-title">Legal Practice Areas</h1>
        <div></div>
      </div>

      {/* Practice Areas Grid */}
      <div className="grid-container">
        {practiseAreas.map((area) => (
          <div key={area.id} className="card">
            <a href={area.link} className="card-link">
              <div className="card-image" style={{ backgroundImage: `url(${area.img})` }}>
                <div className="overlay">
                  <span className="card-title">{area.title}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PractiseAreaPage;
