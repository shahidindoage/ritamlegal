"use client"
import React from "react";
import './insight.css'
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Image from 'next/image';
import {blog} from '@/public/data/blog'
import { BASE_URL } from "@/public/data/url";
import { useState, useEffect } from "react";
const Insight = () => {
const [open, setOpen] = useState(false)
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
    // if (loading) {
    //   return <div>Loading data...</div>;
    // }
  return (
    <>
    <div className="last-container">
        <div className="header-section">
        <h1 className="header-title">Insights by Managing Partner</h1>
        <div></div>
      </div>
      <div className="blog-cards-container">
      {data
  .filter((blogItem) => blogItem.author === "Mr. Matrugupta Mishra")
  .map((blogItem) => (
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
      <div className="blog-card-social">
        <span onClick={()=>setOpen(!open)}><i className="fa-solid fa-share"></i></span>
      </div>
    </div>
  ))}

        </div>
        </div>

      </>
  );
};

export default Insight;
