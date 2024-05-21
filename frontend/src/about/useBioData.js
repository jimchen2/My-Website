import { useEffect, useState } from "react";
import axios from "axios";
import backendUrl from "../config/config";
import { splitSections, extractData } from "./helpers";

function useBioData() {
  const [sections, setSections] = useState([]);
  const [structuredData, setStructuredData] = useState({
    aboutMe: "",
    profileImage: "",
    interests: "",
    socialLinks: "",
    servers: "",
    data: "",
    howIUseMyLaptop: "",
    howIUseMyPhone: "",
    howIThinkAboutTech: "",
    fun: "",
    references: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/blog?date=Thu%20Jan%2001%201970%2000%3A00%3A00`
        );
        const data = response.data[0].body;
        const sectionsArray = splitSections(data);
        setSections(sectionsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setStructuredData(extractData(sections));
  }, [sections]);

  return structuredData;
}

export default useBioData;
