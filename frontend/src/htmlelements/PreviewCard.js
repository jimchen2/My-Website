import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { GetPaddingWidth } from "../utils/adjustelementwidth";

function PreviewCard(props) {
  var x = GetPaddingWidth(1000);
  var str = "/" + props.date;
  return (
    <Container
      style={{
        paddingLeft: x + "px",
        paddingRight: x + "px",
        fontFamily: "'Courier New', monospace",
        minHeight: "150px",
      }}
    >
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <span style={{ fontSize: "12px" }}>{props.date}</span>
              <span
                style={{
                  fontSize: "12px",
                  position: "absolute",
                  right: "30px",
                  top: "30px",
                  fontStyle:"italic"
                }}
              >
                {props.type}
              </span>
              <br />
              <span
                style={{
                  fontSize: "25px",
                  position: "relative",
                  top: "10px",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                <a href={str}>
                  <b>{props.title}</b>
                </a>
              </span>
            </Card.Title>
            <Card.Text>
              <span
                style={{
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
      <br></br> <br></br>
    </Container>
  );
}

export default PreviewCard;
