import React from "react";

function Page404() {
  const  asciiArt404= `
            
             _____
   /|       |     |       /|   
  / |       |     |      / |   
 /  |       |     |     /  |   
/___|___    |     |    /___|___ 
    |       |     |        |   
    |       |     |        |   
    |       |_____|        |   
  `;

  return (
    <div style={{ fontFamily: "monospace", whiteSpace: "pre-wrap",  fontSize: "1.3em" }}>
      <pre>{asciiArt404}</pre>
    </div>
  );
}

export default Page404;
