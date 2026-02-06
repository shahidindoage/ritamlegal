"use client";

import { useState, useEffect } from "react";
import './disclaimer.css'; // Importing the plain CSS file for styles

export default function Disclaimer() {
  const [isAgreed, setIsAgreed] = useState(false);

  // Check localStorage to see if the disclaimer was already agreed to
  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
    if (disclaimerAccepted) {
      setIsAgreed(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("disclaimerAccepted", "true"); // Save agreement in localStorage
    setIsAgreed(true); // Hide the disclaimer
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className={`disclaimer ${isAgreed ? "hidden" : ""}`}>
      <div className="disclaimer-box">
        <h2>Disclaimer & Confirmation</h2>
        <p>
        As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By clicking on the “AGREE” button below, you acknowledge the following:
          <br />
          <br />
          <ul>
            <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;</li>
            <li>You wish to gain more information about us for your own information and use;</li>
            <li>The information about us is provided to you only on your specific request and any information obtained or materials downloaded from this website is completely at your own volition and any transmission, receipt or use of this site would not create any lawyer-client relationship;</li>
            <li>The information provided on this website is solely for informational purposes and should not be interpreted as soliciting or advertisement;</li>
            <li>No material/information provided on this website should be construed as legal advice; 
            </li>
            <li>We are not liable for any consequence of any action taken by you relying on material / information provided on this website; </li>
            <li>In cases you have any legal issues, you, in all cases must seek independent legal advice.</li>
          </ul>
          <br />
        
        </p>
        <div className="disclaimer-buttons">
          <button onClick={handleAgree}>Agree</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
 