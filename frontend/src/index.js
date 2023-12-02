import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/navbar";
import CV from "./components/cv";
import BIO from "./components/unofficialbio";
import Projects from "./components/projects";
import Msg from "./components/leaveamessage";
import VisitInfo from "./components/visitinfo";
import Blog from "./components/blog";
import BlogUtil from "./components/blogutil.js";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
function update() {
  const Example = () => {
    axios
<<<<<<< HEAD
      .get("http://10.142.79.170:5000/blog/get")
=======
      .get("https://jimchen.uk/blog")
>>>>>>> bc76ca3 (fixed bugs)
      .then((res) => {
        console.log("get blog successful from index.js");
        var x = [];
        for (var j = 0; j < res.data.length; j++) {
          x[j] = {
            date: res.data[j].date,
            body: res.data[j].body,
            title: res.data[j].title,
          };
        }
        var path = [],
          title = [],
          text = [],
          date = [];

        for (var i = 0; i < x.length; i++) {
          title[i] = x[i].title;
          text[i] = x[i].body;
          date[i] = x[i].date;
          path[i] = (
            <Route
              path={date[i]}
              element={BlogUtil(title[i], text[i], date[i])}
            />
          );
        }
        root.render(
          <HashRouter>
            <NavBar />
            <Routes>
              <Route path="*" element={<CV />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/unofficialbio" element={<BIO />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/leaveamessage" element={<Msg />} />
              <Route path="/visitinfo" element={<VisitInfo />} />
              <Route path="/blog/" element={<Blog />} />
              {path}
            </Routes>
            <Footer />
          </HashRouter>
        );
      })
      .catch((error) => {
        console.log("did not get blog from index.js");
      });
  };
  Example();
}
setInterval(update, 1000);

reportWebVitals();
