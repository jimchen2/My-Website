import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviewCard from "../htmlelements/PreviewCard";
import backendurl from "../config/config";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { GetPaddingWidth } from "../utils/adjustelementwidth";

function Blog() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postTypes, setPostTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const paddingWidth = GetPaddingWidth(1000);

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
    <div style={{ padding: "2rem 0" }}>
      <ToggleButtonGroup
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: `${paddingWidth}px`,
          paddingRight: `${paddingWidth}px`,
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
            backgroundColor: selectedTypes.includes("all") ? "black" : "white",
            color: selectedTypes.includes("all") ? "white" : "black",
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
              backgroundColor: selectedTypes.includes(type) ? "black" : "white",
              color: selectedTypes.includes(type) ? "white" : "black",
              flexShrink: 0,
              flexGrow: 0,
            }}
          >
            {type} ({count})
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <br />
      <br />
      {filteredData.map((post, index) => (
        <PreviewCard
          key={index}
          title={post.title}
          text={post.body.substring(0, 150)}
          date={post.date}
          type={post.type}
        />
      ))}
    </div>
  );
}

export default Blog;
