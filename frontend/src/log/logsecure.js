import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { Modal, Button, Form } from "react-bootstrap";
import Log from "./log";

const LogSecure = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const authCookie = Cookies.get("auth");
    if (!authCookie) {
      setShowLogin(true);
    }
  }, []);

  const handleLogin = () => {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const doubleHashedPassword = CryptoJS.SHA256(hashedPassword).toString();

    const hashLevel2 = "727ed38dadd372644f6429b0602730e20953546358375974cb54b9860aaa1d3d";

    if (doubleHashedPassword === hashLevel2.trim()) {
      Cookies.set("auth", hashedPassword, {
        expires: 36500 // setting a more reasonable expiration
      });
      setShowLogin(false);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <>
      {Cookies.get("auth") ? (
        <Log />
      ) : (
        <Modal show={showLogin} onHide={() => setShowLogin(false)}>
          <Modal.Header>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button variant="primary" onClick={handleLogin}>
                Log In
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default LogSecure;
