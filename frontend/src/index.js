import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Static
import CV from "./components/static/cv";
import BIO from "./components/static/unofficialbio";
import Projects from "./components/static/projects";
import Page404 from "./components/static/404";
import backendurl from "./config/config";

// HTML Elements
import SingleBlog from "./htmlelements/SingleBlog";
import Blog from "./components/blog";
import SingleBlogEmbed from "./htmlelements/SingleBlogEmbed";
import Msg from "./components/leaveamessage";

// Components
import { GetVisitInfo, PostVisitInfo } from "./components/visitinfo";

import Footer from "./components/static/footer";
import NavBar from "./components/static/navbar";

import { paddingtop } from "./config/global";

const AppRoutes = ({ blogs }) => (
  <Routes>
    <Route path="/" element={<Blog />} />
    <Route path="/cv" element={<CV />} />
    <Route path="/unofficialbio" element={<BIO />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/leaveamessage" element={<Msg />} />
    <Route path="/visitinfo" element={<GetVisitInfo />} />
    <Route path="/blog/" element={<Blog />} />
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
      {window.location.pathname.substring(0, 6) !== "/embed" && <NavBar />}
      <div >
        <AppRoutes blogs={blogs} />
      </div>

      {window.location.pathname.substring(0, 6) !== "/embed" && <Footer />}
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<App />);
