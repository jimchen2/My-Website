import axios from "axios";
import backendurl from "../config/config";
import React, { useState, useEffect } from "react";
import { setIpAddress } from "../config/global";

export const PostVisitInfo = async () => {
  let userData = null;
  let visitedData = null;

  try {
    const userResponse = await axios.get("https://ipapi.co/json");
    userData = userResponse.data;
    setIpAddress(userData.ip);
    const visitedResponse = await axios.get(`${backendurl}/visitinfo?num=10`);

    visitedData = visitedResponse.data;
    const foundVisitor = visitedData.find((item) => item.ip === userData.ip);
    if (!foundVisitor || Date.now() - foundVisitor.now >= 3600000) {
      await axios.post(`${backendurl}/visitinfo`, {
        ip: userData.ip,
        country: userData.country,
        region: userData.region,
        city: userData.city,
        browser: navigator.userAgent,
        date: new Date().toString(),
        now: Date.now(),
      });
    }
  } catch (err) {
    console.error("Error posting visit info:", err);
  }
};

const GetVisitInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendurl}/visitinfo`);
        const formattedData = response.data.map((item) => {
          const { now, _id, ...rest } = item;
          return JSON.stringify(rest) + "\n\n";
        });
        setData(formattedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      style={{
        fontSize: "12px",
        whiteSpace: "pre-wrap",
        fontFamily: "'Monospace',sans-serif",
      }}
    >
      <br />
      <br />
      <br />
      {data.join("")}
      <br />
      <br />
    </div>
  );
};

export { GetVisitInfo };
