"use client";
import { linkedin } from "@/public/data/linkedin";
import Image from "next/image";
import Link from "next/link";

import "./linkedin.css"; // Import the CSS file

export default function Linkedin() {
  return (
    <>
      <div className="linkedin-list-container">
        <div className="header-section">
          <h2 className="header-title">LinkedIn Posts</h2>
          <div></div>
        </div>
        <div className="linkedin-list-content">
          <div className="linkedin-list-column">
          {linkedin.length > 0 &&
            linkedin.map((post) => (
              <div key={post.id} className="linkedin-post">
                <iframe 
                  src={post.url} 
                  frameBorder="0" 
                  allowFullScreen 
                  title={`LinkedIn post ${post.id}`} 
                />
                 <noscript>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  View this post on LinkedIn
                </a>
              </noscript>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
