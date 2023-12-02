import LikeButton from "../button/likebutton";
import ReplyButton from "../button/replybutton";
import { useGlobalColorScheme } from "../config/global.js";

function CommentBox({ embed = 0, user, date, comment, like, id, blog }) {
  const { colors } = useGlobalColorScheme();
  const MAX_EMBED = 6;
  const ADJUST_FACTOR = 40;
  const BASE_FONT_SIZE = 16;

  const adjustedEmbed = embed > MAX_EMBED ? MAX_EMBED - 1 : embed - 1;


  const containerStyle = {
    fontSize: `${BASE_FONT_SIZE}px`,
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
    left: `${adjustedEmbed * ADJUST_FACTOR}px`,
    whiteSpace: "pre-wrap",
  };

  const userStyle = {
    color: colors.color_black,
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