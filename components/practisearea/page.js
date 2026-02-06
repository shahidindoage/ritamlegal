import React from "react";
import { practiseAreas } from "@/public/data/practisearea"; // Importing the data object
import './practisearea.css';
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Snippits from './snippits'
// Function to format the title
const formatTitle = (title) => {
  return title
    .replace(/-/g, ' ') // Replace all hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
};

const PractiseAreaPage = ({id, title}) => {
  // Find the practice area by id
  const practiseArea = practiseAreas.find(area => area.id === parseInt(id));

  // Format the title
  const formattedTitle = formatTitle(title); 

  return (
    <>
      <div className="practisearea-page-container">
        {/* Top Header Section */}
        <div className="header-section">
          <h1 className="header-title">{formattedTitle}</h1>
          <div></div>
        </div>

        {/* Two columns layout */}
        <div className="practisearea-content">
          {/* Left column - Description */}
          <div className="left-column">
            <div className="description" dangerouslySetInnerHTML={{ __html: practiseArea.description }} />
          </div>

          {/* Right column - Image */}
          <div className="right-column">
            <img src={practiseArea.img} alt={formattedTitle} className="practisearea-image" />
          </div>
        </div>
      </div>
      <Snippits/>
    </>
  );
};

export default PractiseAreaPage;
