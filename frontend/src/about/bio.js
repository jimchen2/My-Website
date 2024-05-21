import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useBioData from "./useBioData";
import "./bio.css";
import BioPhone from "./BioPhone";

const Bio = () => {
  const bioData = useBioData();

  if (!bioData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container className="d-none d-md-block">
        {/* Desktop layout */}
        <br />
        <br />
        <br />
        <Row>
          <Col md={4}>
            <h2>Profile Image</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.profileImage }}></div>
            <br />

            <h2>About Me</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.aboutMe }}></div>
            <br />

            <h2>Social Links</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.socialLinks }}></div>
          </Col>
          <Col md={4}>
            <h2>Interests</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.interests }}></div>
            <br />
            <h2>My Servers</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.servers }}></div>
            <br />

            <h2>My Data</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.data }}></div>
            <h2>Fun</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.fun }}></div>
          </Col>
          <Col md={4}>
            <h2>References</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.references }}></div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>How I Use My Laptop</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.howIUseMyLaptop }}></div>
          </Col>
          <Col md={6}>
            <h2>How I Use My Phone</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.howIUseMyPhone }}></div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h2>How I Think About Tech</h2>
            <div dangerouslySetInnerHTML={{ __html: bioData.howIThinkAboutTech }}></div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </Container>

      {/* Phone layout */}
      <div className="d-md-none">
        <BioPhone bioData={bioData} />
      </div>
    </div>
  );
};

export default Bio;