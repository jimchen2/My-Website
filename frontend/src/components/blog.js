import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviewCard from "../htmlelements/PreviewCard";
import backendurl from "../config/config";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { paddingtop } from "../config/global";
function Blog() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postTypes, setPostTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/blog`);
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
        setError(err);
      } finally {
        setIsLoading(false);
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

  return (
    <div style={{ paddingBottom: "2rem" }}>
      {" "}
      {/* Updated padding */}
      <ToggleButtonGroup
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "1rem", // Add some bottom margin if needed
          paddingRight: "20%",
          paddingLeft: "20%",
        }}
        type="checkbox"
        value={selectedTypes}
        onChange={handleSelectionChange}
      >
        <ToggleButton
          key={"all"}
          id={`tbg-btn-${"all"}`}
          value={"all"}
          style={{
            backgroundColor: selectedTypes.includes("all") ? "blue" : "white",
            color: selectedTypes.includes("all") ? "white" : "blue",
            top: `${paddingtop}px`, // Correctly updated top padding
          }}
        >
          {`all (${data.length})`}
        </ToggleButton>

        {postTypes.map(({ type, count }, index) => (
          <ToggleButton
            key={type}
            id={`tbg-btn-${type}`}
            value={type}
            style={{
              backgroundColor: selectedTypes.includes(type) ? "blue" : "white",
              color: selectedTypes.includes(type) ? "white" : "blue",
              flexShrink: 0,
              flexGrow: 0,
              top: `${paddingtop}px`, // Correctly updated top padding
            }}
          >
            {type} ({count})
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <br />
      <br />
      <div style={{ marginTop: "2rem" }}></div>
      {filteredData.map((post, index) => (
        <div>
          <PreviewCard
            key={index}
            title={post.title}
            text={post.body.substring(0, 150)}
            date={post.date}
            type={post.type}
          />
        </div>
      ))}
      <div style={{ marginBottom: "2rem" }}></div>
    </div>
  );
}

export default Blog;
