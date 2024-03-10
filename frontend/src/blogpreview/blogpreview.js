import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./BlogPreviewPage"; // Import the presentational component
import backendurl from "../config/config";

function BlogPreview() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [postTypes, setPostTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/blogpreview`);
        setData(response.data);
        setFilteredData(response.data);

        const typeCounts = response.data.reduce((acc, post) => {
          acc[post.type] = (acc[post.type] || 0) + 1;
          return acc;
        }, {});

        const typesWithCount = Object.entries(typeCounts)
          .sort((a, b) => b[1] - a[1])
          .map(([type, count]) => ({ type, count }));

        setPostTypes(typesWithCount);
        setSelectedTypes([]);
      } catch (err) {
      } finally {
      }
    };

    fetchData();
  }, []);

  const handleSelectionChange = (selected) => {
    setSelectedTypes(selected);
    filterPostsByTypes(selected);

    const newlySelected = selected.filter(
      (type) => !selectedTypes.includes(type)
    );
    const deselected = selectedTypes.filter((type) => !selected.includes(type));
    const allButtonsSelected = selectedTypes.length === postTypes.length + 1;

    if (newlySelected.includes("all")) {
      setSelectedAndFilter(postTypes.map((t) => t.type).concat("all"));
      return;
    }

    if (deselected.includes("all") && allButtonsSelected) {
      setSelectedAndFilter([]);
      return;
    }

    if (allButtonsSelected) {
      const typesToSet = postTypes
        .map((t) => t.type)
        .filter((type) => type !== "all" && !deselected.includes(type));
      setSelectedAndFilter(typesToSet);
    }
  };

  const setSelectedAndFilter = (types) => {
    setSelectedTypes(types);
    filterPostsByTypes(types);
  };

  const filterPostsByTypes = (selected) => {
    const filtered = data.filter((post) => selected.includes(post.type));
    setFilteredData(filtered);
  };
  const totalPosts = data.length;
  console.log(totalPosts);
  // Pass necessary props to the Blog component
  return (
    <Blog
      data={filteredData}
      postTypes={postTypes}
      selectedTypes={selectedTypes}
      onSelectionChange={handleSelectionChange}
      totalPosts={totalPosts} // Add this line
    />
  );
}

export default BlogPreview;
