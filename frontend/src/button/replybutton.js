import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Commentinputbox from "../commentsubmit/commentinputbox";
import { useGlobalColorScheme } from "../config/global.js";

function ReplyButton({ id, blog }) {
  const { colors } = useGlobalColorScheme();

  const [showReply, setShowReply] = useState(false);

  const handleReply = () => {
    setShowReply(!showReply);
  };

  const buttonStyle = {
    fontSize: "0.75rem",
    color: colors.color_blue_2,
    backgroundColor: colors.color_white,
    borderColor: colors.color_blue_2,
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
