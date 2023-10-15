import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import parse from "html-react-parser";
import { GetPaddingWidth } from "../utils/adjustelementwidth";
import LikeButton from "./likebutton";

function SingleBlog({ date, text, title, like, id }) {
  const paddingWidth = GetPaddingWidth(1000);
  const formattedText =
    "<br/><style>pre{background-color:#eeeeee;font-size:15px;}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}p{font-size:16px}</style>" +
    text;

  return (
    <div style={{ paddingBottom: "1rem" }}>
      <br />
      <Container style={containerStyle(paddingWidth)}>
        <Card>
          <Card.Body>
            <Card.Title style={{ fontSize: "14px" }}>
              {date}{" "}
              <a
                href={"/embed/" + date}
                style={{ position: "absolute", right: "30px" }}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Save as PDF
              </a>
            </Card.Title>{" "}
            <Card.Title style={titleStyle}>
              <a href={"/" + date}>
                <b>{title}</b>
              </a>
            </Card.Title>
            <div className="card-text" style={textContainerStyle}>
              {parse(formattedText)}
            </div>
            <LikeButton like={like} id={id} blog={true} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

const containerStyle = (padding) => ({
  paddingLeft: padding + "px",
  paddingRight: padding + "px",
  minHeight: "150px",
  fontFamily: "'Courier New', monospace",
});

const titleStyle = {
  fontSize: "25px",
  position: "relative",
  top: "10px",
  fontFamily: "'Courier New', monospace",
};

const textContainerStyle = {
  position: "relative",
  top: "10px",
};

export default SingleBlog;
