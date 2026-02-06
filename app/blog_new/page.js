"use client";
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { WithContext as ReactTags } from "react-tag-input";
import "react-quill-new/dist/quill.snow.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { BASE_URL } from "@/public/data/url";
import Admin from "@/components/common/admin_header"

const QuillEditor = dynamic(() => import("react-quill-new"), { ssr: false });

const Page = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    subtitle: "",
    author: "",
    minutes: "",
    category: "",
    sustainability: false,
  });
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const quill = useRef();

  const handleDelete = (i) => setTags(tags.filter((_, index) => index !== i));
  const handleAddition = (tag) => setTags([...tags, tag]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (name === "image" && files) {
      const selectedFile = files[0];
      setImage(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
      setFormData({ ...formData, image: selectedFile });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLogged = localStorage.getItem("loggedIn");
      if (isLogged === "false" || !isLogged) {
        router.push("/login");
      }
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    data.append("description", description);
    tags.forEach((tag, index) => data.append(`tags[${index}]`, tag.text));

    try {
      const response = await fetch(`${BASE_URL}blog/create_blog`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        router.push("/blog_dashboard");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const imageHandler = useCallback(async () => {
    if (typeof window !== "undefined") {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("image", file);

        try {
          const response = await fetch(`${BASE_URL}blog/imageUpload`, {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            const result = await response.json();
            const quillEditor = quill.current.getEditor();
            const range = quillEditor.getSelection(true);
            quillEditor.insertEmbed(range.index, "image", result.url, "user");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    }
  }, []);

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: { image: imageHandler },
    },
    clipboard: { matchVisual: true },
  }), [imageHandler]);

  const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video", "color", "clean"];


  return (
     <>
          <Admin/>

    <div style={styles.container} className="bg-white text-black">
      <h2 style={styles.heading}>Create Blog Form</h2>
      <a href="/blog_dashboard" style={styles.back}>&larr; Back</a>
      <div style={styles.form}>
        <div style={{ flex: 3 }}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title:</label>
            <input
              type="text"
              placeholder="Enter the title here..."
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Subtitle:</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description (HTML allowed):</label>
            <QuillEditor
              ref={(el) => (quill.current = el)}
              className={styles.editor}
              theme="snow"
              value={description}
              formats={formats}
              modules={modules}
              placeholder="Write your blog here ..."
              onChange={(value) => setDescription(value)}
            />
            <style>
              {`
              .ql-toolbar{
              box-shadow: 2px 2px 5px #BABECC, -5px -5px 10px #ffffff73;
              border:1px solid #fff !important;
              }
              .ql-container{
              border:1px solid #fff !important;
              }
              `}
              </style>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={styles.formGroup}>
          <label style={styles.label}>Banner Image:</label>
          <form onClick={() => document.querySelector(".input-field").click()}>
    <input
      type="file"
      accept="image/*"
      name="image"
      className="input-field"
      hidden
      onChange={({ target: { files } }) => {
        // Show the file name and preview the image
        if (files[0]) {
          setFileName(files[0].name);
          setImage(URL.createObjectURL(files[0])); // Preview the image
          setFormData({ ...formData, image: files[0] }); // Store file in formData
        }
      }}
    />
    {image ? (
      <img src={image} width={150} height={150} alt={fileName} />
    ) : (
      <div style={styles.center}>
        <MdCloudUpload color="#1475cf" size={60} />
        <p>Browse image to upload</p>
      </div>
    )}
  </form>

            <section className="uploaded-row">
              <AiFillFileImage color="#1475cf" />
              <span className="upload-content">
                {fileName} -
                <MdDelete
                  onClick={() => {
                    setFileName("No image selected");
                    setImage(null);
                  }}
                />
              </span>
            </section>
            <style>
              {`

.uploaded-row{
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #e9f0ff;
}

.upload-content{
  display: flex;
  align-items: center;
  white-space: nowrap;
}
        `}
            </style>
          </div>
          <div style={styles.formGroup}>
          <label style={styles.label}>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} style={styles.input} />
        </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Minutes:</label>
            <input
              type="number"
              name="minutes"
              value={formData.minutes}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

        
          <div style={styles.formGroup}>
            <label style={styles.label}>Tags:</label>
            <ReactTags
              tags={tags}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              placeholder="Add a tag"
              maxTags={5}
            />
            <style>
              {`
          .ReactTags__tagInputField {
            width: 100% !important;
            padding: 8px;
            font-size:14px;
            border-radius:4px;
            box-shadow: inset 2px 2px 5px #BABECC,inset -5px -5px 10px #ffffff73;
          }
           .ReactTags__remove svg{
            fill:red;
            margin-left:5px;
            width:10px;
            height:10px;
            }
        `}
            </style>
          </div>
          <button onClick={handleSubmit} style={styles.button}>Submit</button>
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    textAlign: "left",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  back: {
    textAlign: "left",
    marginBottom: "24px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    textDecoration: 'none'
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
