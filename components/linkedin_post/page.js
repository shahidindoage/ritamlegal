"use client"
import React, { useState } from "react";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Admin from "@/components/common/admin_header";
import "./linkedin_post.css";

const LinkedInPostPage = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = async () => {
    if (!url.trim()) {
      alert("Please enter a valid URL.");
      return;
    }

    try {
      const response = await fetch("/api/linkedin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        alert("Post saved successfully!");
        setUrl(""); // Clear input field
      } else {
        alert("Error saving post.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Admin />
      <div className="linked_post">
        <div className="header-section">
          <h1 className="header-title">Add LinkedIn Posts</h1>
        </div>
        <div className="linkedin-container">
          <div className="linkedin-box">
            <input
              type="url"
              placeholder="Paste URL"
              aria-label="LinkedIn Post URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkedInPostPage;
