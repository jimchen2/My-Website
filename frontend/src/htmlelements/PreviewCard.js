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
        fontFamily: "'Ubuntu',sans-serif",
        minHeight: "150px",
      }}
    >
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <span style={{ fontSize: "12px" }}>{props.date}</span>
              <br />
              <span
                style={{
                  fontSize: "25px",
                  position: "relative",
                  top: "10px",
                  fontFamily: "'Ubuntu Light',sans-serif",
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
