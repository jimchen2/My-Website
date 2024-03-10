import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import parse from "html-react-parser";
import backendurl from "../config/config"; // Ensure this is correctly set to your backend URL

function SingleBlogEmbed() {
  const [blog, setBlog] = useState({ title: '', date: '', body: '' });
  const { date } = useParams();

  useEffect(() => {
    // Fetch the blog post when the component mounts
    const encodedDate = encodeURIComponent(date);
    Axios.get(`${backendurl}/blog?date=${encodedDate}`)
      .then((response) => {
        if (response.data.length > 0) {
          setBlog(response.data[0]); // Assuming the first item is the desired blog post
        } else {
          console.log("No blog posts found for the specified date.");
        }
      })
      .catch((error) => console.error("Error fetching blog data:", error));

    // Set up the print after delay
    const printAfterDelay = setTimeout(() => window.print(), 1500);
    return () => clearTimeout(printAfterDelay);
  }, [date]);

  // Render the blog post
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      {parse(blog.body)}
    </div>
  );
}

export default SingleBlogEmbed;
