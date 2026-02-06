"use client"
import React, { useState, useRef } from "react";
import { associates } from "@/public/data/associates"; // Importing the data object
import './associates.css'
import Footer from "@/components/common/footer";
import Header from "@/components/common/header"
import AssociateDetails from "@/components/associates/AssociateDetails"

const Associates = () => {
    const [selectedAssociate, setSelectedAssociate] = useState(null);

    // Ref for the AssociateDetails component
    const detailsRef = useRef(null);

    const handleCardClick = (associate) => {
        setSelectedAssociate(associate);

        // Scroll to the details section smoothly
        setTimeout(() => {
            detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay ensures DOM updates before scrolling
    };

    return (
      <>
        <div className="associates-page-container">
            {/* Top Header Section */}
            <div className="header-section">
                <h1 className="header-title">Associates</h1>
                <div></div>
            </div>

            {/* Row with cylindrical cards */}
            <div className="cards-row">
                {associates.map((associate, index) => (
                    <div
                        key={associate.id}
                        className="card-details"
                        style={{
                            backgroundImage: `url(${associate.img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                        aria-label={associate.title}
                        onClick={() => handleCardClick(associate)}
                    >
                        <div className="detail-box">
                            <h3>{associate.title}</h3>
                            <p>{associate.designation}</p>
                            <i className="fa-solid fa-sort-down"></i>
                        </div>
                    </div>
                ))}
            </div>

            {/* Display selected associate's details */}
            {selectedAssociate && (
                <div ref={detailsRef}>
                    <AssociateDetails associate={selectedAssociate} />
                </div>
            )}
        </div>
      </>
    );
};

export default Associates;
