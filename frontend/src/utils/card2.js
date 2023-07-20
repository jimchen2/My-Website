import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import parse from "html-react-parser";

function Card1(props) {
  var w = window.innerWidth;
  var x = 30;
  if (w > 1060) x = (w - 1000) / 2;
  var str = "/#/" + props.date;
  var text1 =
    "<br/><style>pre{background-color:#eeeeee;font-size:16px;}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}p{font-size:16px}</style>";
  for (var i = 0; i < props.text.length; i++) {
    text1 = text1 + props.text[i];
  }
  return (
    <Container
      style={{
        paddingLeft: x + "px",
        paddingRight: x + "px",
        minHeight: "150px",
      }}
    >
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <span
                style={{
                  fontSize: "14px",
                  fontFamily: "'Ubuntu Mono',monospace",
                }}
              >
                {props.date}
              </span>
              <br />
              <span
                style={{
                  fontSize: "25px",
                  position: "relative",
                  top: "10px",
                  fontFamily: "font-family: 'Roboto', sans-serif",
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
                {parse(text1)}
              </span>
              <br></br>
              <br></br>
              <p style={{ fontFamily: "'Ubuntu',sans serif" }}>
                ❤️ ️Like {""} {props.like}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Card1;
