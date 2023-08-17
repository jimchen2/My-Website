import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Commentinputbox from "./commentinputbox";
function ReplyButton({ id, blog }) {
  const [showReply, setShowReply] = useState(false);

  const handleReply = () => {
    setShowReply(!showReply);
  };

  const buttonStyle = {
    fontSize: "0.75rem",
    color: "black",
    backgroundColor: "white",
    borderColor: "black",
    padding: "2px 6px",
    margin: "5px",
    transition: "background-color 0.3s",
  };

  return (
    <div>
      <Button style={buttonStyle} onClick={handleReply}>
        Reply
      </Button>
      {showReply && <Commentinputbox id={id} blog={blog} />}
    </div>
  );
}

export default ReplyButton;
