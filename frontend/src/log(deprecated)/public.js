import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import backendurl from '../config/config';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const PublicLogPage = () => {
  const [logs, setLogs] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const hashPassword = (password) => {
    return CryptoJS.SHA256(password).toString();
  };

  // Double-hashed password stored in code (hash(hash(password)))
  const storedDoubleHashedPassword = '1d84abacf70dad11d0453c246a4068c9bd00fef0eded470387ee2f401aacd67b';

  useEffect(() => {
    const checkAuthentication = () => {
      const cookieHash = Cookies.get('passwordHash');
      if (cookieHash && hashPassword(cookieHash) === storedDoubleHashedPassword) {
        setAuthenticated(true);
      } else {
        const password = prompt('Please enter your password:');
        if (password !== null) {
          const singleHashedPassword = hashPassword(password);
          if (hashPassword(singleHashedPassword) === storedDoubleHashedPassword) {
            Cookies.set('passwordHash', singleHashedPassword, { expires: 1 });
            setAuthenticated(true);
          } else {
            alert('Incorrect password');
            setAuthenticated(false);
          }
        }
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    if (authenticated) {
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
    }
  }, [authenticated]);

  return (
    <div>
      {authenticated && logs.map((log, index) => (
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
