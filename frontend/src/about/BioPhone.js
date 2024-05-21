import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BioPhone = ({ bioData }) => {
  return (
    <Container>
      <br />
      <h2>Profile Image</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.profileImage }}></div>
      <br />

      <h2>About Me</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.aboutMe }}></div>
      <br />

      <h2>Social Links</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.socialLinks }}></div>
      <br />

      <h2>Interests</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.interests }}></div>
      <br />

      <h2>My Servers</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.servers }}></div>
      <br />

      <h2>My Data</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.data }}></div>
      <br />

      <h2>Fun</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.fun }}></div>
      <br />

      <h2>References</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.references }}></div>
      <br />

      <h2>How I Use My Laptop</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.howIUseMyLaptop }}></div>
      <br />

      <h2>How I Use My Phone</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.howIUseMyPhone }}></div>
      <br />

      <h2>How I Think About Tech</h2>
      <div dangerouslySetInnerHTML={{ __html: bioData.howIThinkAboutTech }}></div>
      <br />
      <br />
    </Container>
  );
};

export default BioPhone;