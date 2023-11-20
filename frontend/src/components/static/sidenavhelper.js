import { Card } from "react-bootstrap";
import { paddingtop } from "../../config/global";

export const scrollToElementWithOffset = (id, offset) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    console.error(`No element with id '${id}' was found.`);
  }
};

export function CustomToggle({
  children,
  eventKey,
  hasChildren,
  setActiveKey,
  isActive,
}) {
  const onClick = () => {
    setActiveKey(isActive ? null : eventKey); // Toggle active state
    scrollToElementWithOffset(eventKey, -paddingtop + 15);
  };

  const activeStyle = isActive
    ? { backgroundColor: "blue", color: "white" }
    : { color: "blue" };

  return (
    <Card.Header
      onClick={onClick}
      style={{ cursor: "pointer", ...activeStyle }}
    >
      <span
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          wordWrap: "break-word", // Add this line
          whiteSpace: "normal", // And this line
          overflowY: "auto",
        }}
      >
        {children}
      </span>
    </Card.Header>
  );
}

export const addItemToNavbar = (setTocItems, setActiveKey) => {
  const headers = Array.from(document.querySelectorAll("h2, h3"));
  let tocItems = [];
  let lastH2Key = null;
  let isFirstH2 = true; // Flag to check for the first H2

  headers.forEach((header) => {
    const id = header.getAttribute("id");
    let tocText = header.textContent;
    tocText = formatTextWithNewLines(tocText, 25); // Format the text

    const isH2 = header.tagName === "H2";

    if (isH2) {
      if (isFirstH2) {
        isFirstH2 = false; // Skip the first H2
        return;
      }
      lastH2Key = id;
      tocItems.push({
        key: id,
        content: (
          <CustomToggle
            eventKey={id}
            hasChildren={false}
            setActiveKey={setActiveKey}
          >
            {tocText}
          </CustomToggle>
        ),
        children: [],
      });
    } else if (lastH2Key) {
      tocItems
        .find((item) => item.key === lastH2Key)
        .children.push(
          <div
            onClick={() => scrollToElementWithOffset(id, -paddingtop + 15)}
            style={{
              paddingLeft: "1rem",
              textDecoration: "none",
              cursor: "pointer",
              color: "blue",
              wordWrap: "break-word", // Add this line
              whiteSpace: "normal", // And this line
              overflowY: "auto",
            }}
          >
            {tocText}
          </div>
        );
      tocItems.find((item) => item.key === lastH2Key).hasChildren = true;
    }
  });

  setTocItems(tocItems);
};
const formatTextWithNewLines = (text, maxLineLength = 25) => {
  const words = text.split(" ");
  let formattedText = [];
  let currentLine = "";
  let currentLineLength = 0;

  words.forEach((word) => {
    if (currentLineLength + word.length > maxLineLength) {
      formattedText.push(currentLine);
      formattedText.push(<br />); // Insert JSX line break
      currentLine = "";
      currentLineLength = 0;
    }

    currentLine += (currentLineLength > 0 ? " " : "") + word;
    currentLineLength += word.length + 1; // Account for the space
  });

  if (currentLine) {
    formattedText.push(currentLine); // Add the last line if any
  }

  return formattedText;
};
