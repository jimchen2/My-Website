import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { GetWindowWidth } from "../utils/adjustelementwidth";
import SubmitComment from "../utils/submitcomment";

function Commentinputbox({ id, blog }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitReply = (e) => {
    e.preventDefault();
    // Additional code for submitting the reply can be added here
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

  // const windowWidth = GetWindowWidth();
  // const inputWidth = windowWidth < 750 ? windowWidth / 1.5 : 500;
  // const inputStyle = {
  //   width: inputWidth + "px",
  // };

  // let left_padding=0;
  // if (GetWindowWidth() < 1024) {
  //   left_padding = 150;
  // }

  return (
    <div>
      <div
        style={{
          position: "relative",
          top: "10px",
          fontSize: "16px",
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
