"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header"
import Admin from "@/components/common/admin_header"

import { useRouter } from "next/navigation";
import "react-quill-new/dist/quill.snow.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import BlogTable from "@/components/blogManager/table";
import { FaEdit, FaTrash } from 'react-icons/fa';
import './styles.css';
import { BASE_URL } from "@/public/data/url";
const Page = () => {
  const data = React.useMemo(
    () => [
      { firstName: 'Alice', lastName: 'Johnson', age: 25 },
      { firstName: 'Bob', lastName: 'Smith', age: 30 },
    ],
    []
  );

  const handleEdit = (row) => {
    window.location.href = `/blog_edit?id=${row.id}`;
  };

  const handleDelete = async(row) => {
    console.log('Delete row:', row);

    const formData = new FormData();
    formData.append("id", row.id);

    try {
      // Replace the URL with your API endpoint
      const response = await fetch(`${BASE_URL}blog/delete_blog`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Publish Result:', result);
        window.location.reload();

      } else {
        console.error("Error publishing:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleTogglePublish = async (old, value, row) => {

    const formData = new FormData();
    formData.append("id", row.id);
    formData.append("is_published", value ? "yes" : "no");

    try {
      // Replace the URL with your API endpoint
      const response = await fetch(`${BASE_URL}blog/change_publish_status`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Publish Result:', result);
        window.location.reload();

      } else {
        console.error("Error publishing:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  const columns = React.useMemo(
    () => [
      { Header: '#', accessor: 'id' },
      {
        Header: 'Banner Image',
        accessor: 'image', // Access the image URL from the data
        Cell: ({ cell: { value } }) => (
          <img
            src={`${BASE_URL}${value}`}
            alt="banner image"
            style={{ width: '250px', height: '100px',objectFit:'cover',margin:'0 auto'}} // Custom styling for the image
          />
        ),
      },
      { Header: 'Title', accessor: 'title' },
      { Header: 'Subtitle', accessor: 'subtitle' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Edit Button with Icon */}
            <button
              onClick={() => handleEdit(row.original)}
              style={{
                padding: '5px 10px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FaEdit style={{ marginRight: '5px' }} />
            </button>

            {/* Delete Button with Icon */}
            <button
              onClick={() => handleDelete(row.original)}
              style={{
                padding: '5px 10px',
                color: 'red',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FaTrash style={{ marginRight: '5px' }} />
            </button>
          </div>
        ),
      },
      {
        Header: 'Publish',
        accessor: 'is_published',
        Cell: ({ row }) => (
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={row.original.is_published == "yes"}
              onChange={(e) => handleTogglePublish(row.original.is_published , e.target.checked,row.original)}
            />
            <span className="slider"></span>
          </label>
        ),
      },
    ],
    []
  );

  const router = useRouter();

  useEffect(() => {
    const isLogged = localStorage.getItem("loggedIn");
    if (isLogged === "false" || !isLogged) {
      router.push("/login");
    }
  }, [router]);

  return (
     <>
          <Admin/>
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Blogs</h2>
      <a href="/blog_new" style={styles.button}> New</a>
      <br/>
      <br/>
      <BlogTable columns={columns} data={data} />
    </div>
    </>
  );
};

const styles = {
  container: {
    margin: "0 auto",
    padding: "20px",
    backgroundColor:"#fff"
  },
  heading: {
    textAlign: "left",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    paddingRight: "8px",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    boxShadow:"inset 2px 2px 5px #BABECC,inset -5px -5px 10px #ffffff73"
  },
  select: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "100px",
    resize: "vertical",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    textDecoration: 'none',
  },
  editor:{
    border: '1px solid #fff',
  },
  center: {
    display: "flex", // Use flexbox
    flexDirection: "column", // Align items vertically
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
};

export default Page;
