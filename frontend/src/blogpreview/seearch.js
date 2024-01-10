import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviewCard from "./PreviewCard";
import backendurl from "../config/config";
import { useParams } from "react-router-dom";
import { useGlobalColorScheme } from "../config/global.js";

function Search() {
  const { colors } = useGlobalColorScheme();

  const [data, setData] = useState([]); // Holds the original data
  const [filteredData, setFilteredData] = useState([]); // Holds the filtered data for display
  const { term } = useParams(); // Extracts the search term from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/blog`);
        setData(response.data);
      } catch (err) {
        // Error handling
      } finally {
        // Finalize loading
      }
    };

    fetchData();
  }, []);

  // Function to remove HTML tags
  const removeHtmlTags = (text) => {
    return text.replace(/<[^>]*>/g, "");
  };

  useEffect(() => {
    // Ensure that term is a string to prevent errors
    const searchTerm = term || "";

    // Filter the data based on the search term
    const filtered = data.filter(
      (post) =>
        (post.title &&
          post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.body &&
          removeHtmlTags(post.body)
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [term, data]);

  const containerStyle = {
    backgroundColor: colors.color_white, // White background
    color: colors.color_black, // Black text
    paddingBottom: "2rem",
    marginTop: "2rem",
    minHeight: "100vh", // This will make sure the container has a minimum height of 100% of the viewport height
  };

  return (
    <div style={containerStyle}>
      <br />
      {filteredData.map((post, index) => (
        <PreviewCard
          key={index}
          title={post.title}
          text={post.body}
          date={post.date}
          type={post.type}
          searchTerm={term} // Pass the search term here
        />
      ))}
      <div style={{ marginBottom: "2rem" }}></div>
    </div>
  );
}

export default Search;
