import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { GetPaddingWidth } from "../../utils/adjustelementwidth";

function Page404() {
  const paddwidth = GetPaddingWidth();
  const location = useLocation().pathname;

  const displayLocation = location === "/" ? " 404 Page" : location.slice(1);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    window.location.href = "/" + inputValue;
  };

  const s = `
            
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
    <div
      style={{
        paddingLeft: `${paddwidth}px`,
        paddingRight: `${paddwidth}px`,
        fontFamily: "'Ubuntu Mono', monospace",
        whiteSpace: "pre-wrap",
      }}
    >
      <br />
      <br />
      <p>
        username:~$ cat {displayLocation}
        <pre>{s}</pre>
        <br />
        Click and press Space to start the game, use any key to jump your T-Rex
        <iframe
          src="https://offline-dino-game.firebaseapp.com/"
          title="dinosaur game"
          height="200"
          width="800"
        ></iframe>
        <br />
        username:~${" "}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            fontFamily: "'Ubuntu Mono', monospace",
          }}
          autoFocus
        />
        <br />
        <br />
        <br />
      </p>
    </div>
  );
}

export default Page404;
