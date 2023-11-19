import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import parse from "html-react-parser";

function Card1(props) {
  var w = window.innerWidth;
  var x = 30;
  if (w > 860) x = (w - 800) / 2;
  var str = "/#/blog/" + props.title + props.date;
  return (
    <Container
      style={{
        paddingLeft: x + "px",
        paddingRight: x + "px",
        fontFamily: "'Ubuntu Mono',monospace",
        minHeight: "150px",
      }}
    >
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <span style={{ fontSize: "14px" }}>{props.date}</span>
              <br />
              <span
                style={{
                  fontSize: "25px",
                  position: "relative",
                  top: "10px",
                }}
              >
                {" "}
                <a href={str}>
                  <b>{props.title}</b>{" "}
                </a>{" "}
              </span>
            </Card.Title>
            <Card.Text>
              <span
                style={{
                  fontFamily: "'Ubuntu',sans serif",
                  fontSize: "12px",
                  position: "relative",
                  top: "10px",
                }}
              >
                {parse(props.text)}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Card1;
