import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import SubmitComment from "./submitcomment";
import { paddingtop } from "../config/global";
import { useGlobalColorScheme } from "../config/global.js";
import { useComments } from "../contexts/CommentsContext";

function CommentInputBox({ id, blog }) {
  const { triggerUpdate } = useComments();

  const { colors } = useGlobalColorScheme();

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const [focusStyleUsername, setFocusStyleUsername] = useState({});
  const [focusStyleMessage, setFocusStyleMessage] = useState({});

  const handleFocus = (setFocusStyle) => {
    setFocusStyle({
      borderColor: colors.color_blue_2,
      boxShadow: `0 0 0 0.2rem rgba(${parseInt(
        colors.color_blue_2.slice(1, 3),
        16
      )}, ${parseInt(colors.color_blue_2.slice(3, 5), 16)}, ${parseInt(
        colors.color_blue_2.slice(5, 7),
        16
      )}, 0.25)`,
    });
  };

  const handleBlur = (setFocusStyle) => {
    setFocusStyle({});
  };

  const handleSubmitReply = async (e) => {
    e.preventDefault();
    try {
      await SubmitComment({
        parentid: id,
        username: username,
        message: message,
        blog: blog,
      });
      // Reset the values after submit
      setUsername("");
      setMessage("");
      triggerUpdate();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };
  const submitButtonStyle = {
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

  const cardStyle = {
    backgroundColor: colors.color_white, // If your card background needs to be white
    borderColor: colors.color_black, // If you need a blue border for the card
    color: colors.color_black, // Text color for content in the card
  };

  return (
    <div style={{ marginTop: blog === "00000000" ? `${paddingtop}px` : "0" }}>
      <style type="text/css">
        {`
          .custom-placeholder::placeholder {
            color: ${colors.color_black}; // Placeholder color
          }
          .btn-outline-primary {
            color: ${colors.color_blue_2};
            border-color: ${colors.color_blue_2};
          }
          .btn-outline-primary:hover {
            background-color: ${colors.color_blue_2};
            color: ${colors.color_white};
          }
        `}
      </style>
      <Card style={cardStyle}>
        <Card.Body>
          <div style={{ fontFamily: "'Roboto', sans-serif" }}>
            <Form onSubmit={handleSubmitReply}>
              <Form.Group className="mb-3">
                <Form.Label>Name (Optional)</Form.Label>
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
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className="custom-placeholder"
                  style={{ ...inputStyle, ...focusStyleMessage }}
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Input your message here"
                  required
                  autoFocus={blog === "00000000"}
                  onFocus={() => handleFocus(setFocusStyleMessage)}
                  onBlur={() => handleBlur(setFocusStyleMessage)}
                />
              </Form.Group>
              <Button
                variant="outline-primary"
                style={submitButtonStyle}
                type="submit"
              >
                Comment
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
      <br />
      <br />
    </div>
  );
}

export default CommentInputBox;
