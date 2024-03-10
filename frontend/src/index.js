import React, { useState, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ColorSchemeProvider } from "./config/global.js";
import Footer from "./static/footer";
import NavBar from "./static/navbar";
import { useGlobalColorScheme } from "./config/global.js";
import { GetVisitInfo } from "./static/visitinfo.js";
import { PostVisitInfo } from "./static/visitinfo.js";

// Lazy load route components
const CV = lazy(() => import("./static/cv"));
const Projects = lazy(() => import("./static/projects"));
const Home = lazy(() => import("./static/home"));
const Page404 = lazy(() => import("./static/404"));
const Msg = lazy(() => import("./commentcontent/leaveamessage"));
const BlogPreview = lazy(() => import("./blogpreview/blogpreview"));
const Search = lazy(() => import("./blogpreview/search"));
const Blog = lazy(() => import("./blogcontent/Blog.js"));
const BlogEmbed = lazy(() => import("./blogcontent/BlogEmbed")); // Assuming BlogEmbed is the component that fetches the blog data and uses SingleBlogEmbed

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/cv" element={<CV />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/leaveamessage" element={<Msg />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/visitinfo" element={<GetVisitInfo />} />
      <Route path="/blogpreview/" element={<BlogPreview />} />
      <Route path="/search/:term" element={<Search />} />
      <Route path="/blog/:date" element={<Blog />} />
      <Route path="/embed/blog/:date" element={<BlogEmbed />} />
    </Routes>
  </Suspense>
);

const App = () => {
  useEffect(() => {
    PostVisitInfo();
  }, []);

  const { colors } = useGlobalColorScheme();

  const appStyle = {
    color: colors.color_black,
    backgroundColor: colors.color_white,
  };

  useEffect(() => {
    document.body.style.backgroundColor = colors.color_white;
  }, [colors.color_white]);

  return (
    <BrowserRouter>
      <div style={appStyle}>
        {window.location.pathname.substring(0, 6) !== "/embed" && <NavBar />}
        <AppRoutes />
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
