import React, { useState, useEffect } from "react";
import axios from "axios";
import backendurl from "../config/config";
import BlogLikeButton from "./bloglikebutton";
const BlogLikeButtonHelper = ({ blogdate }) => {
  const [likes, setLikes] = useState([]); // Renamed data to likes for clarity
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLikes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${backendurl}/getbloglikes?blogdate=${blogdate}&isarray=true`
        );
        setLikes(response.data.likes); // Assuming the server responds with a property named likes
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLikes();
  }, [blogdate]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;
  return <BlogLikeButton id={blogdate} like={likes} />;
};

export default BlogLikeButtonHelper;
