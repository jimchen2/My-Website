import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";

export const JimChenBio = () => {
  return (
    <Container className="py-5">
      <br />
      <br />
      <Card className="shadow">
        <Card.Header className="bg-dark text-white">
          <h2 className="mb-0">Jim Chen</h2>
          <small>Cloud & Web Enthusiast</small>
        </Card.Header>

        <Card.Body>
          <Row>
            <Col md={6}>
              <h5 className="text-primary">AWS Experience</h5>
              <div className="mb-3">
                <Badge bg="info" className="me-2 mb-2">
                  S3
                </Badge>
                <Badge bg="info" className="me-2 mb-2">
                  Route 53
                </Badge>
                <Badge bg="info" className="me-2 mb-2">
                  EC2
                </Badge>
                <Badge bg="info" className="me-2 mb-2">
                  CloudFront
                </Badge>
                <Badge bg="info" className="me-2 mb-2">
                  VPC
                </Badge>
                <small className="d-block text-muted mt-2">Prefers external certificate management without nginx</small>
              </div>

              <h5 className="text-primary mt-4">Frontend Development</h5>
              <p>
                Using <a href="https://github.com/react-bootstrap/react-bootstrap">React Bootstrap </a> for its simplicity and functionality. Previous experience with Next.js.
              </p>

              <h5 className="text-primary mt-4">Operating System</h5>
              <p>Fedora enthusiast and Red Hat family advocate 🐧</p>

              <h5 className="text-primary mt-4">Development Setup</h5>
              <ul className="list-unstyled">
                <li>💻 ThinkPad P16s</li>
                <li>📱 Pixel 8 Pro</li>
              </ul>
            </Col>

            <Col md={6}>
              <h5 className="text-primary">Languages</h5>
              <ul className="list-unstyled">
                <li>🔸 Native Chinese speaker</li>
                <li>🔸 Proficient English user (primary working language)</li>
              </ul>

              <h5 className="text-primary mt-4">Personal Interests</h5>
              <p>YouTube Content:</p>
              <ul>
                <li>Technical channels</li>
                <li>Interview content</li>
                <li>Music</li>
              </ul>

              <h5 className="text-primary mt-4">Lifestyle</h5>
              <p>Practicing minimalist focusing on reducing physical possessions for a simpler life</p>
            </Col>

            <Col xs={12}>
              <div className="border-top mt-4 pt-4">
                <h5 className="text-primary">About Me</h5>
                <p>
                  A self-driven cloud and frontend enthusiast who enjoys exploring AWS services and modern web development technologies. Passionate about Linux systems and continuous learning in the
                  tech space.
                </p>
              </div>
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer className="text-center text-muted">
          <small>Cloud Computing | Frontend Development | Linux Enthusiast</small>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default JimChenBio;
