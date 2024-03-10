import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Axios from "axios";
import SingleBlog from "./SingleBlog";
import backendurl from "../config/config";
import Msg from "../commentcontent/leaveamessage";
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const { date } = useParams(); // Use useParams to extract the date from the URL

  useEffect(() => {
    const encodedDate = encodeURIComponent(date); // Encode the date

    Axios.get(`${backendurl}/blog?date=${encodedDate}`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [date]); // Depend on the `date` to refetch when it changes

  return (
    <div>
      {blogs.length > 0 && (
        <SingleBlog
          title={blogs[0].title}
          text={blogs[0].body}
          date={date}
          type={blogs[0].type}
          id={blogs[0]._id}
        />
      )}
      <Msg blog={date} blogcomment="true" />
    </div>
  );
}

export default Blog;
