import React, { useEffect } from "react";
import parse from "html-react-parser";

function SingleBlogEmbed({ date, text, title }) {

  useEffect(() => {
    const printAfterDelay = setTimeout(() => window.print(), 1500);
    return () => clearTimeout(printAfterDelay);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      {parse(text)}
    </div>
  );
}

export default SingleBlogEmbed;
