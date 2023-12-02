import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { useGlobalColorScheme } from "../config/global.js";

function Projects() {
  const { colors } = useGlobalColorScheme();

  const containerStyle = {
    minHeight: "100vh", // This will make sure the container has a minimum height of 100% of the viewport height
  };

  const cardStyle = {
    maxWidth: "300px",
  };

  const projectCards = [
    {
      image: "graficon (1).jpg",
      link: "https://www.jimchen.me/Thu%20Aug%2017%202023%2013:11:49",
      title: "My Website",
      date: "June 2023",
      description:
        "Build personal website with Html, CSS, Javascript, React, React-Bootstrap Library.",
    },
    {
      image: "proj2.jpg",
      link: "https://www.jimchen.me/2048.html",
      title: "Some Apps",
      date: "ToDo",
      description: "Build some practical apps and games to practice my skills",
    },
  ];

  return (
    <div style={containerStyle}>
      <br />
      <CardGroup>
        {projectCards.map((card, index) => (
          <Card
            key={index}
            style={{
              ...cardStyle,
              marginLeft: index > 0 ? "20px" : "0px",
              filter: colors.grayscale ? "grayscale(100%)" : "none", // Conditional grayscale filter
            }}
          >
            <Card.Img
              variant="top"
              src={card.image}
              style={{ maxWidth: "300px" }}
            />
            <Card.Body style={{ backgroundColor: colors.color_white }}>
              <Card.Title>
                <a href={card.link} style={{ color: colors.color_blue_2 }}>
                  {card.title}
                </a>
              </Card.Title>
              <Card.Text style={{ color: colors.color_black }}>
                {card.date}
                <span
                  style={{
                    fontSize: "14px",
                    display: "block",
                    marginTop: "10px",
                  }}
                >
                  {card.description}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Projects;
