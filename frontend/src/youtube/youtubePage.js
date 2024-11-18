import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VideoGallery = () => {
  const videos = [
    // Regular Videos
    {
      id: "wiiIXxbrxY0",
      type: "regular",
    },
    {
      id: "Im-TPs_Y7Nc",
      type: "regular",
    },
    {
      id: "vOAswjtx8hA",
      type: "regular",
    },
    {
      id: "xJ1D2ZFYG4g",
      type: "regular",
    },
    {
      id: "r6ngivdm4Ms",
      type: "regular",
    },
    {
      id: "JC1X8tavWdo",
      type: "regular",
    },
    {
      id: "9pJthBJYls4",
      type: "regular",
    },
    {
      id: "NM2oFgBg1qE",
      type: "regular",
    },
    {
      id: "2dltMqDad50",
      type: "regular",
    },
    // Shorts
    {
      id: "J1Hsuy_FjmA",
      type: "short",
    },
    {
      id: "Yp-RTvMo3t8",
      type: "short",
    },
    {
      id: "ihc9ab-Pxd8",
      type: "short",
    },
    {
      id: "GAPrb5m51TU",
      type: "short",
    },
    {
      id: "SwCQnkio4x0",
      type: "short",
    },
    {
      id: "4oUG3wnEIk4",
      type: "short",
    },
    {
      id: "PEKwyIDoHOY",
      type: "short",
    },
    {
      id: "gZ2xryA5eHI",
      type: "short",
    },
  ];

  return (
    <Container fluid>
      <br />
      <br />
      <br />
      <Row className="g-4">
        {videos.map((video, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <div className="ratio ratio-16x9">
              <iframe src={`https://www.youtube.com/embed/${video.id}${video.type === "short" ? "?shorts=1" : ""}`} title={`YouTube video ${index + 1}`} allowFullScreen className="rounded"></iframe>
            </div>
          </Col>
        ))}
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default VideoGallery;
