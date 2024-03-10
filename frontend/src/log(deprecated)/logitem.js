import React, { useEffect, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import parse from "html-react-parser";

const LogItem = ({ log, onDelete, onEdit }) => {
  const formattedDate = new Date(log.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  });

  const contentRef = useRef(null); // Create a ref for the div containing the parsed HTML

  useEffect(() => {
    // After the component mounts, apply styles to img and iframe elements
    if (contentRef.current) {
      const imgs = contentRef.current.getElementsByTagName('img');
      for (const img of imgs) {
        img.style.maxWidth = '60%';
      }

      const iframes = contentRef.current.getElementsByTagName('iframe');
      for (const iframe of iframes) {
        iframe.style.width = '60%';
        const aspectRatio = 9 / 16;
        const width = iframe.offsetWidth;
        const calculatedHeight = width * aspectRatio;
        iframe.style.height = `${calculatedHeight}px`;
      }
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          <span
            style={{
              fontSize: "0.8em",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {formattedDate}{" "}
            {log.pin && <span style={{ fontWeight: "bold" }}> Pin</span>}
          </span>
        </Card.Title>
        {/* Attach ref to div where HTML will be parsed */}
        <div ref={contentRef}>{parse(log.body)}</div>
        <br />
        <Button variant="primary" size="sm" onClick={() => onEdit(log)}>
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          style={{ marginLeft: "10px" }}
          onClick={() => onDelete(log._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LogItem;
