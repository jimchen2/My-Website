import React, { useState } from "react";
import CommentLikeButton from "../button/commentlikebutton.js";
import CommentReplyButton from "../button/commentreplybutton.js";
import Commentinputbox from "../commentsubmit/commentinputbox.js";
import { useGlobalColorScheme } from "../config/global.js";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function CommentBox({ embed = 0, user, date, comment, like, id, blog }) {
  const { colors } = useGlobalColorScheme();
  const [showReply, setShowReply] = useState(false);

  const MAX_EMBED = 4;
  const ADJUST_FACTOR = 40;
  const BASE_FONT_SIZE = 16;
  const TITLE_FONT_SIZE = 14; // 75% of the base font size for title
  const SUBTITLE_FONT_SIZE = 14; // 60% of the base font size for subtitle

  const adjustedEmbed = embed > MAX_EMBED ? MAX_EMBED - 1 : embed - 1;

  const cardStyle = {
    marginLeft: `${adjustedEmbed * ADJUST_FACTOR}px`,
    fontSize: `${BASE_FONT_SIZE}px`,
    backgroundColor: colors.color_white,
    color: colors.color_black,
    borderColor: colors.color_black,
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: colors.color_white,
    color: colors.color_black,
  };

  const titleStyle = {
    marginBottom: 0,
    fontSize: `${TITLE_FONT_SIZE}px`, // smaller font size for the title
  };

  const subtitleStyle = {
    fontSize: `${SUBTITLE_FONT_SIZE}px`, // smaller font size for the subtitle
    color: colors.color_black,
  };

  const cardTextStyle = {
    whiteSpace: "pre-wrap",
    color: colors.color_black,
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const toggleReply = () => {
    setShowReply(!showReply);
  };

  return (
    <Card className="mb-3" style={cardStyle}>
      <Card.Header style={headerStyle}>
        <Card.Title style={titleStyle}>{user}</Card.Title>
        <Card.Subtitle style={subtitleStyle}>
          <span>{date}</span>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text style={cardTextStyle}>{comment}</Card.Text>
        <div style={buttonContainerStyle}>
          <CommentLikeButton like={like} id={id} />
          <CommentReplyButton onReplyClick={toggleReply} />
        </div>
        {showReply && <Commentinputbox id={id} blog={blog} />}
      </Card.Body>
    </Card>
  );
}

export default CommentBox;
