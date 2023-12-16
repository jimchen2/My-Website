import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import DOMPurify from "dompurify"; // Ensure dompurify is installed

const LogItem = ({ log, onDelete, onEdit }) => {
  const formattedDate = new Date(log.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  });

  const extractElements = (markdown) => {
    const iframeRegex = /<iframe[^>]*src=["'](.*?)["'][^>]*><\/iframe>/g;
    const brRegex = /<br\s*\/?>/g;
    let match;
    let cleanMarkdown = markdown;
    let iframes = [];
    let brs = [];

    while ((match = iframeRegex.exec(markdown))) {
      const sanitizedSrc = DOMPurify.sanitize(match[1]);
      const sanitizedIframe = `<iframe src="${sanitizedSrc}" allowfullscreen></iframe>`;
      iframes.push(sanitizedIframe);
      cleanMarkdown = cleanMarkdown.replace(match[0], "");
    }

    cleanMarkdown = cleanMarkdown.replace(brRegex, () => {
      brs.push('<br/>');
      return '{br}';
    });

    return { cleanMarkdown, iframes, brs };
  };

  const { cleanMarkdown, iframes, brs } = extractElements(log.body);

  const renderContent = (text) => (
    text.split('{br}').map((part, index) => (
      <React.Fragment key={index}>
        <ReactMarkdown components={{
          img: ({ node, ...props }) => (
            <img style={{ maxWidth: "60%" }} {...props} />
          ),
        }}>
          {part}
        </ReactMarkdown>
        {index < brs.length && <div dangerouslySetInnerHTML={{ __html: brs[index] }} />}
      </React.Fragment>
    ))
  );

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
        {renderContent(cleanMarkdown)}
        <div>
          {iframes.map((iframeHTML, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: iframeHTML }}
              ref={(node) => {
                if (node) {
                  const iframe = node.querySelector("iframe");
                  if (iframe) {
                    iframe.style.width = "60%";
                    const aspectRatio = 9 / 16;
                    const width = iframe.offsetWidth;
                    const calculatedHeight = width * aspectRatio;
                    iframe.style.height = `${calculatedHeight}px`;
                  }
                }
              }}
            />
          ))}
        </div>
        <br />
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
