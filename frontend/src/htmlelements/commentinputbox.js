import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SubmitComment from "../utils/submitcomment";
import { paddingtop } from "../config/global";
function Commentinputbox({ id, blog }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitReply = (e) => {
    e.preventDefault();
    SubmitComment({
      parentid: id,
      username: username,
      message: message,
      blog: blog,
    });
    setUsername("");
    setMessage("");
  };

  const submitbuttonstyle = {
    fontSize: "1rem",
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    padding: "3px 9px",
    transition: "background-color 0.3s",
  };

  return (
    <div style={{ marginTop: blog === "00000000" ? `${paddingtop}px` : "0" }}>
      <div
        style={{
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <Form onSubmit={handleSubmitReply}>
          <Form.Group>
            <Form.Label>Name(Optional)</Form.Label>
            <Form.Control
              // style={inputStyle}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Guest"
            />
          </Form.Group>
          <div
            style={{
              position: "relative",
              top: "10px",
            }}
          >
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                // style={inputStyle}
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Input your message here"
                required
                autoFocus={blog === "00000000"}
              />
            </Form.Group>
            <div style={{ position: "relative", top: "20px" }}>
              <Button style={submitbuttonstyle} type="submit">
                Comment
              </Button>
            </div>
          </div>
          <br />
          <br />
        </Form>
      </div>
    </div>
  );
}

export default Commentinputbox;
