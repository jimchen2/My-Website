import React from "react";
import PreviewCard from "./PreviewCard";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { paddingtop } from "../config/global";
import { useGlobalColorScheme } from "../config/global.js";

function Blog({ data, postTypes, selectedTypes, onSelectionChange }) {
  const containerStyle = {
    minHeight: "100vh",
  };

  const { colors } = useGlobalColorScheme();

  return (
    <div style={containerStyle}>
      <div style={{ paddingBottom: "2rem" }}>
        <ToggleButtonGroup
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "1rem",
            paddingRight: "20%",
            paddingLeft: "20%",
          }}
          type="checkbox"
          value={selectedTypes}
          onChange={onSelectionChange}
        >
          <ToggleButton
            key={"all"}
            id={`tbg-btn-${"all"}`}
            value={"all"}
            style={{
              backgroundColor: selectedTypes.includes("all")
                ? colors.color_blue_2
                : colors.color_white,
              borderColor: colors.color_blue_2,
              color: selectedTypes.includes("all")
                ? colors.color_white
                : colors.color_blue_2,
              top: `${paddingtop}px`,
            }}
          >
            {`all (${data.length})`}
          </ToggleButton>

          {postTypes.map(({ type, count }) => (
            <ToggleButton
              key={type}
              id={`tbg-btn-${type}`}
              value={type}
              style={{
                backgroundColor: selectedTypes.includes(type)
                  ? colors.color_blue_2
                  : colors.color_white,
                color: selectedTypes.includes(type)
                  ? colors.color_white
                  : colors.color_blue_2,
                borderColor: colors.color_blue_2,
                flexShrink: 0,
                flexGrow: 0,
                top: `${paddingtop}px`,
              }}
            >
              {type} ({count})
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <br />
        <br />
        <div style={{ marginTop: "2rem" }}></div>
        {data.map((post, index) => (
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

export default Blog;
