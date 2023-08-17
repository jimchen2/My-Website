import React, { useEffect } from "react";
import parse from "html-react-parser";

function SingleBlogEmbed({ date, text, title }) {
  const STYLE_STRING = `
    <br/>
    <style>
      pre { background-color: #eeeeee; font-size: 15px; }
      h1 { font-size: 30px; }
      h2 { font-size: 25px; }
      h3 { font-size: 20px; }
      p { font-size: 16px; }
    </style>
  `;

  useEffect(() => {
    const printAfterDelay = setTimeout(() => window.print(), 1500);
    return () => clearTimeout(printAfterDelay);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      {parse(STYLE_STRING + text)}
    </div>
  );
}

export default SingleBlogEmbed;
