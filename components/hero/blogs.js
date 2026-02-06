"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/public/data/url";
import "./blog.css"; // Assuming you have the corresponding CSS file for styles

export default function BlogList() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageLoader = ({ src }) => {
    return `${BASE_URL}${src}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}blog/fetchAllBlogs`);
        const result = await response.json();
        const randomIndex = Math.floor(Math.random() * result.data.length); // Get a random index
        setBlog(result.data[randomIndex]); // Set a random blog
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(); // Fetch data when the component mounts or the page reloads
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-list-container">
      {/* Featured Blog Section */}
      {blog && (
        <div
          className="featured-blog"
          style={{
            backgroundImage: `url(${imageLoader({ src: blog.image })})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            width: "100%",
            height: "400px",
            position: "relative",  // Make sure overlay can be positioned correctly
          }}
        >
          {/* Overlay */}
          <div className="blog-overlay"></div>

          <div className="featured-blog-text">
            <h2 className="featured-blog-title">{blog.title}</h2>
            <p className="featured-blog-subtitle">{blog.subtitle}</p>
            <Link href={`/blog/${blog.id}/${encodeURIComponent(blog.title)}`}>
              <button className="read-more-btn">Read More</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
