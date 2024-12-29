import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import SingleBlog from "./SingleBlog";
import backendurl from "../config/config";
import Msg from "../commentcontent/leaveamessage";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const { language, type, title } = useParams();

  useEffect(() => {
    // Encode all parameters
    const encodedLanguage = encodeURIComponent(language);
    const encodedType = encodeURIComponent(type);
    const encodedTitle = encodeURIComponent(title);

    Axios.get(`${backendurl}/blog/${encodedLanguage}/${encodedType}/${encodedTitle}`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [language, type, title]);

  if (blogs.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SingleBlog title={blogs[0].title} text={blogs[0].body} language={language} type={type} bloguuid={blogs[0].uuid} isPrivate={blogs[0].isPrivate} date={blogs[0].date} />
      {!blogs[0].isPrivate ? <Msg bloguuid={blogs[0].uuid} blogname={blogs[0].title} /> : <br/>}
    </div>
  );
}

export default Blog;
