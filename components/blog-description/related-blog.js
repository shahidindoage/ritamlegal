"use client"
import React from 'react'
import './related-blog.css'
import { blog } from '@/public/data/blog'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { BASE_URL } from "@/public/data/url";

const related = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageLoader = ({ src }) => {
    return `${BASE_URL}${src}`;
  };
  
   // Fetch data from the API
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${BASE_URL}blog/fetchAllBlogs`); // Replace with your actual API URL
            const result = await response.json();
            setData(result.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
  
        fetchData();
      }, []);
  return (
    <div className="blog-cards-container">
         {data
     .filter((blogItem) => blogItem.author !== "Mr. Matrugupta Mishra").map((blogItem) => (
       <div
         className="blog-card"
         key={blogItem.id}
         onClick={() =>
           (window.location.href = `/blog/${blogItem.id}/${encodeURIComponent(
             blogItem.title
           )}`)
         }
       >
         <Image
         loader={imageLoader}
         src={blogItem.image}
           alt={blogItem.title}
           width={400}
           height={200}
           className="blog-card-image"
         />
         <div className="blog-card-content">
           <h3 className="blog-card-title">{blogItem.title}</h3>
           <p className="blog-card-subtitle">{blogItem.subtitle}</p>
         </div>
       </div>
     ))}
   
           </div>
  )
}

export default related
