import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

let globalIpAddress = "unknown"; // Default IP address

export function setIpAddress(ip) {
  globalIpAddress = ip;
}

export function getIpAddress() {
  return globalIpAddress;
}

export let paddingtop = 80;


export const useColorScheme = () => {
  const getColorSchemeFromCookies = () => {
    const savedColors = Cookies.get("colorScheme");
    return savedColors ? JSON.parse(savedColors) : defaultColors;
  };

  const defaultColors = {
    color_white: "#ffffff",
    color_black: "#000000",
    color_blue_1: "#0000ff", // Light blue
    color_blue_2: "#0000ff", // Dark blue
    color_light_gray: "#fffcfc", // Light gray
    color_gray: "#d0d4dc", // Dark gray
    grayscale: false,
    dark: false,
  };

  const [colors, setColors] = useState(getColorSchemeFromCookies);

  const updateColor = (colorName, colorValue) => {
    setColors((prevColors) => {
      const newColors = {
        ...prevColors,
        [colorName]: colorValue,
      };
      Cookies.set("colorScheme", JSON.stringify(newColors), { expires: 1000 }); // Set cookie to expire in 7 days

      return newColors;
    });
  };
  useEffect(() => {
    setColors(getColorSchemeFromCookies());
  }, []);

  return { colors, updateColor };
};

const ColorSchemeContext = createContext();

export const ColorSchemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useGlobalColorScheme = () => useContext(ColorSchemeContext);
