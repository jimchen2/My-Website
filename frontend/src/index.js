import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ColorSchemeProvider } from "./config/global.js";

// Static
import CV from "./static/cv";
import Projects from "./static/projects";
import Page404 from "./static/404";
import { GetVisitInfo, PostVisitInfo } from "./static/visitinfo";

import Footer from "./static/footer";
import NavBar from "./static/navbar";

// Config
import backendurl from "./config/config";
import {useGlobalColorScheme } from "./config/global.js";

// Blog
import SingleBlog from "./blogcontent/SingleBlog";
import SingleBlogEmbed from "./blogcontent/SingleBlogEmbed";
import Blog from "./blogpreview/blog";
import Seearch from "./blogpreview/seearch";

// Comment
import Msg from "./commentcontent/leaveamessage";

const AppRoutes = ({ blogs }) => (
  <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="/cv" element={<CV />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/leaveamessage" element={<Msg />} />
    <Route path="/visitinfo" element={<GetVisitInfo />} />
    <Route path="/blog/" element={<Blog />} />
    <Route path="/search/:term" element={<Seearch />} />
    <Route path="*" element={<Page404 />} />
    {blogs.map((blog) => (
      <Route
        key={blog.date}
        path={blog.date}
        element={
          <div>
            <SingleBlog
              title={blog.title}
              text={blog.body}
              date={blog.date}
              like={blog.like}
              type={blog.type}
              id={blog._id}
            />
            <Msg blog={blog.date} blogcomment="true" />
          </div>
        }
      />
    ))}
    {blogs.map((blog) => (
      <Route
        key={blog.date}
        path={"embed/" + blog.date}
        element={
          <div>
            <SingleBlogEmbed
              title={blog.title}
              text={blog.body}
              date={blog.date}
              type={blog.type}
            />
          </div>
        }
      />
    ))}
  </Routes>
);

const App = () => {
  const { colors } = useGlobalColorScheme();

  const appStyle = {
    color: colors.color_black, // color_black from your color scheme
    backgroundColor: colors.color_white, // color_white from your color scheme
  };

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    PostVisitInfo();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendurl}/blog`);
        setBlogs(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs: {error.message}</div>;

  return (
    <BrowserRouter>
      <div style={appStyle}>
        {window.location.pathname.substring(0, 6) !== "/embed" && <NavBar />}
        <AppRoutes blogs={blogs} />
        {window.location.pathname.substring(0, 6) !== "/embed" && <Footer />}
      </div>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <ColorSchemeProvider>
    <App />
  </ColorSchemeProvider>
);
