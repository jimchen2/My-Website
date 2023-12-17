import React, { useState, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ColorSchemeProvider } from "./config/global.js";

// Lazy load other components as needed

import Footer from "./static/footer";
import NavBar from "./static/navbar";
import { useGlobalColorScheme } from "./config/global.js";
import backendurl from "./config/config";
import { PostVisitInfo } from "./static/visitinfo";
import { GetVisitInfo } from "./static/visitinfo";

// Lazy load route components
const CV = lazy(() => import("./static/cv"));
const Projects = lazy(() => import("./static/projects"));
const Page404 = lazy(() => import("./static/404"));
const SingleBlog = lazy(() => import("./blogcontent/SingleBlog"));
const SingleBlogEmbed = lazy(() => import("./blogcontent/SingleBlogEmbed"));
const Blog = lazy(() => import("./blogpreview/blog"));
const Seearch = lazy(() => import("./blogpreview/seearch"));
const Msg = lazy(() => import("./commentcontent/leaveamessage"));
const LogSecure = lazy(() => import("./log/logsecure.js"));

const AppRoutes = ({ blogs }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/leaveamessage" element={<Msg />} />
      <Route path="/visitinfo" element={<GetVisitInfo />} />
      <Route path="/blog/" element={<Blog />} />
      <Route path="/search/:term" element={<Seearch />} />
      <Route path="/embed/annoucement/" element={<LogSecure />} />
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
  </Suspense>
);

const App = () => {
  const { colors } = useGlobalColorScheme();

  const appStyle = {
    color: colors.color_black,
    backgroundColor: colors.color_white,
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

  useEffect(() => {
    document.body.style.backgroundColor = colors.color_white;
  }, [colors.color_white]);

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
