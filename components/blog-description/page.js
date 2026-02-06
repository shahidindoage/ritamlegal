"use client"
import React, { useEffect, useState } from 'react'
import './blog-description.css'
import { blog } from '@/public/data/blog'
import Footer from "@/components/common/footer";
import Header from "@/components/common/header"
import Related from '@/components/blog-description/related-blog'
import Social from './social'
import Comments from './comment'
import { BASE_URL } from "@/public/data/url";

import DOMPurify from "dompurify";
const Page = ({ id, title }) => {
  const [blogdata, setBlogData] = useState(null);

  // useEffect(() => {
  //   // Find the blog by ID
  //   const foundBlog = blog.find((item) => item.id === parseInt(id)); // Assuming `id` is a string and needs to be parsed to an integer
  //   setBlogData(foundBlog);
  // }, [id]);
  useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${BASE_URL}blog/fetch_blog_by_id/${id}`); // Replace with your actual API URL
            const result = await response.json();
            setBlogData(result.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
  
        fetchData();
      }, []);

  if (!blogdata) {
    return <div></div>;
  }
// Format the created_at date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", options); // "en-IN" is used for the Indian date format
};

// Format the created_at date
const formattedDate = formatDate(blogdata.created_at);

  return (
    <>
      <div className="blog-description-container">
        <div
          className="blog-description-header"
          style={{ backgroundImage: `url(${BASE_URL}${blogdata.image})` }}
        >

          <div className="dark-overlay"></div>
          <h1>{blogdata.title}</h1>
        </div>
                   <p className="image-caption">This image can be used in accordance with the CC0 license</p>

        <div className="blog-description-content">
        <div className="content-date">
            {blogdata.minutes} {' minutes, Date: '}{formattedDate}
          </div>
          <div className="content-data" dangerouslySetInnerHTML={{ __html: blogdata.description }} style={{textAlign:"justify"}}/>

          <div className="content-author">Author : <strong>{blogdata.author}</strong></div>
          
          <Social/>
          <Comments blogId={id}/>
          
        </div>
         <div className="blog-description-last-container">
                <div className="header-section">
                <h1 className="header-title">Related Blogs</h1>
                <div></div>
              </div>
             <Related/>
        </div>
      </div>

    </>
  );
}

export default Page;
