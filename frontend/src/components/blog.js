import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviewCard from "../htmlelements/PreviewCard";
import backendurl from "../config/config";

function Blog() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/blog`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: "2rem 0" }}>
      {data.map((post, index) => (
        <PreviewCard
          key={index}
          title={post.title}
          text={post.body.substring(0, 150)}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default Blog;
