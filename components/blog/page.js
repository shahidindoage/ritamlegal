"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/public/data/url";
import Linkedin from "./linkedin";
import "./blog.css";

export default function BlogList() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const imageLoader = ({ src }) => {
    return `${BASE_URL}${src}`;
  };
  const [isMobile, setIsMobile] = useState(false);

  // Update the screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consider mobile as width <= 768px
    };
    
    handleResize(); // Call once to set initial state
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}blog/fetchAllBlogs`);
        const result = await response.json();
        setBlog(result.data.reverse());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-list-container">
      <div className="header-section">
        <h1 className="header-title">Blogs and Articles</h1>
        <div></div>
      </div>
      <div className="blog-list-content">
        {/* First Column */}
        <div className="blog-list-column">
          {blog.length > 0 && (
            <Link
              href={`/blog/${blog[0].id}/${encodeURIComponent(blog[0].title)}`}
              className="featured-blog"
            >
              <div className="featured-blog-image"
                style={{
                  backgroundImage: `url(${imageLoader({ src: blog[0].image })})`,
                  backgroundSize:"contain",  // Adjust based on mobile view
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                  width: "100%",
                  height: isMobile ? "250px" : "650px",
                  position: "relative",
                  marginBottom:"1rem",
                  borderRadius:"10px",  // Make sure overlay can be positioned correctly
                }}
              >
              </div>

                 <div className="caption-container">
                <p className="image-caption">This image can be used in accordance with the CC0 license</p>
              </div>
              <div className="featured-blog-text">
                <h2 className="featured-blog-title">{blog[0].title}</h2>
                <p className="featured-blog-subtitle">{blog[0].subtitle}</p>
              </div>
            </Link>
          )}
        </div>

        {/* Second Column */}
        <div className="blog-list-column small-blogs">
          {blog.slice(1, 4).filter((blogItem) => blogItem.author !== "Mr. Matrugupta Mishra").map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}/${encodeURIComponent(post.title)}`}
              className="small-blog"
            >
              <div className="small-blog-image">
                <div className="image-container">
                  <Image
                    loader={imageLoader}
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="parallax-image"
                  />
                </div>
              </div>
              <div className="caption-container">
                <p className="image-caption">This image can be used in accordance with the CC0 license</p>
              </div>
              <div className="small-blog-text">
                <h2 className="small-blog-title">{post.title}</h2>
                <p className="small-blog-subtitle">{post.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="blog-list-column-other-blogs">
          {blog.slice(4).filter((blogItem) => blogItem.author !== "Mr. Matrugupta Mishra").map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}/${encodeURIComponent(post.title)}`}
              className="small-blog"
            >
              <div className="small-blog-image">
                <div className="image-container">
                  <Image
                    loader={imageLoader}
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="parallax-image"
                  />
                </div>
              </div>
              <div className="caption-container">
                <p className="image-caption">This image can be used in accordance with the CC0 license</p>
              </div>
              <div className="small-blog-text">
                <h2 className="small-blog-title">{post.title}</h2>
                <p className="small-blog-subtitle">{post.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Linkedin/>
    </div>
  );
}
