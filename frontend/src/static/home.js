import React from "react";
import htmlContent from "./homecontent";
import { useGlobalColorScheme } from "../config/global";

function Home() {
  const { colors } = useGlobalColorScheme();

  const containerStyle = {
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%", // Ensures it takes up all available space if under 800px
    // Additional styles as needed
  };

  const dynamicCSS = `
    <style>
      body { color: ${colors.color_black}; background-color: ${colors.color_white}; }
      a { color: ${colors.color_blue_2}; } /* Set link color */
    </style>
  `;

  // Combine your dynamic CSS with the existing HTML content
  const combinedHtmlContent = dynamicCSS + htmlContent.html;

  return (
    <>
      <br />
      <br />
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: combinedHtmlContent }}
        style={containerStyle}
      />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
