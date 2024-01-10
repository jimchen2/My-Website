import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import backendurl from '../config/config';

const PublicLogPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`${backendurl}/log`);
        const publicLogs = response.data.filter(log => log.type === "Public");
        setLogs(publicLogs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div>
      {logs.map((log, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>
              {new Date(log.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                weekday: "long",
              })}
            </Card.Title>
            <div dangerouslySetInnerHTML={{ __html: log.body }} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PublicLogPage;
