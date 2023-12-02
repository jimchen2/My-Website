import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SubmitComment from "./submitcomment";
import { paddingtop } from "../config/global";
import { useGlobalColorScheme } from "../config/global.js";

function CommentInputBox({ id, blog }) {
  const { colors } = useGlobalColorScheme();

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [focusStyleUsername, setFocusStyleUsername] = useState({});
  const [focusStyleMessage, setFocusStyleMessage] = useState({});

  const handleFocus = (setFocusStyle) => {
    setFocusStyle({
      borderColor: colors.color_blue_2,
      boxShadow: `0 0 0 0.2rem rgba(${parseInt(colors.color_blue_2.slice(1, 3), 16)}, ${parseInt(colors.color_blue_2.slice(3, 5), 16)}, ${parseInt(colors.color_blue_2.slice(5, 7), 16)}, 0.25)`
    });
  };

  const handleBlur = (setFocusStyle) => {
    setFocusStyle({});
  };

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
    color: colors.color_blue_2,
    backgroundColor: colors.color_white,
    borderColor: colors.color_blue_2,
    padding: "3px 9px",
    transition: "background-color 0.3s",
  };

  const inputStyle = {
    ...focusStyleUsername,
    backgroundColor: colors.color_white,
    color: colors.color_black,
  };

  return (
    <div style={{ marginTop: blog === "00000000" ? `${paddingtop}px` : "0" }}>
      <style type="text/css">
        {`
          .custom-placeholder::placeholder {
            color:${colors.color_black} ; // Placeholder color
          }
        `}
      </style>
      <div style={{ fontFamily: "'Roboto', sans-serif" }}>
        <Form onSubmit={handleSubmitReply}>
          <Form.Group>
            <Form.Label>Name(Optional)</Form.Label>
            <Form.Control
              className="custom-placeholder"
              style={inputStyle}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Guest"
              onFocus={() => handleFocus(setFocusStyleUsername)}
              onBlur={() => handleBlur(setFocusStyleUsername)}
            />
          </Form.Group>
          <div style={{ position: "relative", top: "10px" }}>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                className="custom-placeholder"
                style={{ ...inputStyle, ...focusStyleMessage }}
                as="textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Input your message here"
                required
                autoFocus={blog === "00000000"}
                onFocus={() => handleFocus(setFocusStyleMessage)}
                onBlur={() => handleBlur(setFocusStyleMessage)}
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

export default CommentInputBox;
