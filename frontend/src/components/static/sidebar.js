import React, { useEffect, useState } from "react";
import { Accordion, Card, Col } from "react-bootstrap";
import { paddingtop } from "../../config/global";
import { addItemToNavbar } from "./sidenavhelper";

const SideNav = () => {
  const [tocItems, setTocItems] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    addItemToNavbar(setTocItems, setActiveKey);
  }, []);

  const cardHeaderStyle = {
    wordWrap: "break-word",
    whiteSpace: "normal",
    cursor: "pointer",
  };

  return (
    <Col
      lg={2.5}
      xl={2.5}
      style={{
        position: "fixed",
        top: `${paddingtop}px`,
        left: "50px",
        height: "100vh",
        overflowY: "auto",
        padding: "10px",
        boxSizing: "border-box",
        // backgroundColor: "#f8f9fa",
        paddingBottom: "150px", // Add bottom padding here
      }}
    >
      <Accordion activeKey={activeKey}>
        {tocItems.map((item, index) => (
          <Card key={item.key}>
            {React.cloneElement(item.content, {
              hasChildren: item.hasChildren,
              setActiveKey: setActiveKey,
              isActive: activeKey === item.key,
              style: cardHeaderStyle, // Apply custom styles here
            })}
            {item.hasChildren && (
              <Accordion.Collapse eventKey={item.key}>
                <Card.Body>{item.children}</Card.Body>
              </Accordion.Collapse>
            )}
          </Card>
        ))}
      </Accordion>
    </Col>
  );
};

export { SideNav };
