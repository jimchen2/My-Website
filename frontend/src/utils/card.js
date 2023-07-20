import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Card1(props) {
  var w = window.innerWidth;
  var x = 30;
  if (w > 1060) x = (w - 1000) / 2;
  var str = "/#/" + props.date;
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
                {props.text}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Card1;
