import { GetPaddingWidth } from "../utils/adjustelementwidth";
import LikeButton from "./likebutton";
import ReplyButton from "./replybutton";

function CommentBox({ embed = 0, user, date, comment, like, id, blog }) {
  const MAX_EMBED = 6;
  const ADJUST_FACTOR = 40;
  const BASE_FONT_SIZE = 16;

  const adjustedEmbed = embed > MAX_EMBED ? MAX_EMBED - 1 : embed - 1;
  const paddingLeft = Math.max(GetPaddingWidth(800), 200) - 200;

  const paddingRight = paddingLeft + adjustedEmbed * ADJUST_FACTOR;

  const containerStyle = {
    fontSize: `${BASE_FONT_SIZE}px`,
    fontFamily: "'Roboto', sans-serif",
    paddingLeft: `${paddingLeft}px`,
    paddingRight: `${paddingRight}px`,
    position: "relative",
    left: `${adjustedEmbed * ADJUST_FACTOR}px`,
    whiteSpace: "pre-wrap",
  };

  const userStyle = {
    color: "blue",
  };

  const dateStyle = {
    position: "relative",
    left: "30px",
  };

  const commentStyle = {
    position: "relative",
    left: "30px",
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "flex-start ",
    gap: "10px",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  };

  return (
    <div className="CommentBox" style={containerStyle}>
      {adjustedEmbed === 0 ? <hr /> : <br />}
      <div>
        <span style={userStyle}>{user}</span>
        <span style={dateStyle}>{date}</span>
        <div style={commentStyle}>{comment}</div>
        <div style={buttonContainerStyle}>
          <LikeButton like={like} id={id} />
          <ReplyButton id={id} blog={blog} />
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
