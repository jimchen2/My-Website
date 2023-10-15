import React from 'react';
import { CardGroup, Card } from "react-bootstrap";
import { GetPaddingWidth } from "../../utils/adjustelementwidth";

function Projects() {
  const padding = GetPaddingWidth();
  const cardStyle = {
    maxWidth: '300px',
    fontFamily: "'Courier New', monospace",
  };

  const projectCards = [
    {
      image: "graficon (1).jpg",
      link: "https://www.jimchen.me/Thu%20Aug%2017%202023%2013:11:49",
      title: "My Website",
      date: "June 2023",
      description: "Build personal website with Html, CSS, Javascript, React, React-Bootstrap Library."
    },
    {
      image: "proj2.jpg",
      link: "https://www.jimchen.me/2048.html",
      title: "Some Apps",
      date: "ToDo",
      description: "Build some practical apps and games to practice my skills"
    }
  ];

  return (
    <div style={{ paddingLeft: `${padding}px`, paddingRight: `${padding}px` }}>
      <br />
      <CardGroup>
        {projectCards.map((card, index) => (
          <Card key={index} style={{ ...cardStyle, marginLeft: index > 0 ? '20px' : '0px' }}>
            <Card.Img variant="top" src={card.image} style={{ maxWidth: '300px' }} />
            <Card.Body>
              <Card.Title>
                <a href={card.link}>{card.title}</a>
              </Card.Title>
              <Card.Text>
                {card.date}
                <span style={{ fontSize: '14px', display: 'block', marginTop: '10px' }}>
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
