import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function Projects() {
  var w = window.innerWidth;
  var x = 30;
  if (w > 860) x = (w - 800) / 2;
  var mw = w / 5;
  if (mw < 200) mw = 200;
  return (
    <div
      style={{
        paddingLeft: x + "px",
        paddingRight: x + "px",
      }}
    >
      <br />
      <br />
      <CardGroup>
        <Card
          style={{
            maxWidth: mw + "px",
            fontFamily: "'Ubuntu Mono',monosapce",
          }}
        >
          <Card.Img
            variant="top"
            src="graficon (1).jpg"
            style={{ maxWidth: mw + "px" }}
          />
          <Card.Body>
            <Card.Title>
              <a href="https://jimchen.me">My Website</a>
            </Card.Title>
            <Card.Text>
              June 2023
              <span style={{ fontSize: "14px" }}>
                <br /> <br />
                Build personal website with Html, CSS, Javascript, React,
                React-Bootstrap Library.
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            position: "relative",
            left: "20px",
            maxWidth: mw + "px",
            fontFamily: "'Ubuntu Mono',monosapce",
          }}
        >
          <Card.Img
            variant="top"
            src="proj2.jpg"
            style={{ maxWidth: mw + "px" }}
          />
          <Card.Body>
            <Card.Title>
              <a href="https://mygame4214.github.io">Some Apps</a>
            </Card.Title>
            <Card.Text>
              ToDo
              <br />
              <br />{" "}
              <span
                style={{
                  fontSize: "14px",
                }}
              >
                Build some practical apps and games to practice my skills
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
export default Projects;
