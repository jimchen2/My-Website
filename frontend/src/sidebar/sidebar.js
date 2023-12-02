import React from "react";
import { Accordion, Card, Col } from "react-bootstrap";
import { paddingtop, useGlobalColorScheme } from "../config/global";
import { useAddItemToNavbar } from "./sidebaritem";

const SideNav = () => {
  const [activeKey, setActiveKey] = React.useState(null);
  const { colors } = useGlobalColorScheme();

  // Use the custom hook here and pass setActiveKey
  const tocItems = useAddItemToNavbar(setActiveKey);

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
        paddingBottom: "150px", // Add bottom padding here
      }}
    >
      <Accordion activeKey={activeKey}>
        {tocItems.map((item, index) => (
          <Card key={item.key} style={{backgroundColor:colors.color_white}}>
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
