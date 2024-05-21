import React from "react";
import PreviewCard from "./PreviewCard.js";
import ToggleButtonGroupComponent from "./ToggleButtonGroupComponent.js";
import { paddingtop } from "../config/global.js";
import { useGlobalColorScheme } from "../config/global.js";

function BlogPreviewPage({
  data,
  postTypes,
  selectedTypes,
  onSelectionChange,
  totalPosts,
}) {
  const containerStyle = {
    minHeight: "100vh",
  };

  const { colors } = useGlobalColorScheme();

  // Sort the data based on the date, converting date strings to date objects
  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div style={containerStyle}>
      <div style={{ paddingBottom: "2rem" }}>
        <ToggleButtonGroupComponent
          selectedTypes={selectedTypes}
          onSelectionChange={onSelectionChange}
          postTypes={postTypes}
          totalPosts={totalPosts}
          colors={colors}
          paddingtop={paddingtop}
        />
        <br />
        <br />
        <div style={{ marginTop: "2rem" }}></div>
        {sortedData.map((post, index) => (
          <div key={index}>
            <PreviewCard
              title={post.title}
              text={post.body}
              date={post.date}
              type={post.type}
            />
          </div>
        ))}
        <div style={{ marginBottom: "2rem" }}></div>
      </div>
    </div>
  );
}

export default BlogPreviewPage;
