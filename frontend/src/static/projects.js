import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import projectData from "./projectcontent.js";
import { useGlobalColorScheme } from "../config/global.js";

function Projects() {
  const { colors } = useGlobalColorScheme();

  const containerStyle = {
    minHeight: "100vh",
  };

  const cardGroupStyle = {
    maxWidth: "80%",
    margin: "auto",
  };

  const cardStyle = {
    minWidth: "30%",
    maxWidth: "30%",
  };

  const imageWrapperStyle = {
    position: "relative",
    paddingTop: "56.25%", // 16:9 Aspect Ratio
  };

  const imageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", // This prevents distortion
  };

  const linkStyle = {
    color: colors.color_blue_2,
    display: "block",
  };

  return (
    <div style={containerStyle}>
      <br />
      <br />
      <br />
      <CardGroup style={cardGroupStyle}>
        {projectData.map((project, index) => (
          <Card
            key={index}
            style={{
              ...cardStyle,
              marginLeft: "30px",
              marginTop: "30px",
              filter: colors.grayscale ? "grayscale(100%)" : "none",
            }}
          >
            <div style={imageWrapperStyle}>
              <Card.Img src={project.image} style={imageStyle} />
            </div>
            <Card.Body style={{ backgroundColor: colors.color_white }}>
              <Card.Title style={{ color: colors.color_blue_2 }}>
                {project.title}
              </Card.Title>

              <Card.Text style={{ color: colors.color_black }}>
                <div>{project.time}</div>

                {project.sourceCode && (
                  <a href={project.sourceCode} style={linkStyle}>
                    Source Code
                  </a>
                )}

                {project.docs && (
                  <a href={project.docs} style={linkStyle}>
                    Read Docs
                  </a>
                )}

                {project.demo && (
                  <a href={project.demo} style={linkStyle}>
                    Live Demo
                  </a>
                )}

                {[
                  ...Array(
                    3 -
                      [project.sourceCode, project.docs, project.demo].filter(
                        Boolean
                      ).length
                  ),
                ].map((_, i) => (
                  <br key={i} />
                ))}

                <div
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Projects;
