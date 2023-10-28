//return element width depending on the windowsize

import { useState, useEffect, useCallback } from "react";

function GetPaddingWidth(setwidth = 800) {
  //default set 30 px width, if window too small set 0 px width
  const getpaddWidth = useCallback(
    (windwidth) => {
      var pwidth = 30;
      if (window.innerWidth > setwidth + 60)
        pwidth = (window.innerWidth - setwidth) / 2;
      return pwidth;
    },
    [setwidth]
  );

  const [paddingWidth, Setpaddwidth] = useState(
    getpaddWidth(window.innerWidth)
  );

  const handleResize = useCallback(() => {
    Setpaddwidth(getpaddWidth(window.innerWidth));
  }, [getpaddWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return paddingWidth;
}

function GetWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowWidth;
}

function GetWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = useCallback(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowHeight;
}


function useHeaderPadding() { // Notice the naming convention
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => { // Moved this inside useEffect for better clarity
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth < 992 ? 90 : 60; // Ternary to determine which value to return
}

export { GetWindowWidth, GetPaddingWidth, GetWindowHeight,useHeaderPadding };
