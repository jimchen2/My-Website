import React, { useEffect, useRef, useState } from 'react';
import { Accordion, Card, Nav, useAccordionButton, Col } from 'react-bootstrap';
import { useHeaderPadding } from '../../utils/adjustelementwidth';

const scrollToElementWithOffset = (id, offset) => {
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

function CustomToggle({ children, eventKey, hasChildren }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});

  // Render as a toggle only if there are children
  return hasChildren ? (
    <Card.Header onClick={decoratedOnClick} style={{ cursor: 'pointer' }}>
      {children}
    </Card.Header>
  ) : (
    <Card.Header style={{ cursor: 'pointer' }}>
      {children}
    </Card.Header>
  );
}

const addItemToNavbar = (padd, setTocItems) => {
  const headers = Array.from(document.querySelectorAll('h2, h3'));
  let tocItems = [];
  let lastH2Key = null;

  headers.forEach((header, index) => {
    const id = header.getAttribute('id');
    const tocText = header.textContent;
    const isH2 = header.tagName === 'H2';

    if (isH2) {
      lastH2Key = `h2-${index}`;
      tocItems.push({
        key: lastH2Key,
        content: (
          <CustomToggle eventKey={lastH2Key} hasChildren={false}>
            <Nav.Link
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToElementWithOffset(id, -padd() - 5);
              }}
              style={{
                fontWeight: 'bold',
                color: 'blue', // Text color
                textDecoration: 'none'
              }}
            >
              {tocText}
            </Nav.Link>
          </CustomToggle>
        ),
        children: []
      });
    } else if (lastH2Key) {
      tocItems.find(item => item.key === lastH2Key).children.push(
        <Nav.Link
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToElementWithOffset(id, -padd() - 5);
          }}
          style={{
            paddingLeft: '1rem', // Indent H3 items
            color: 'blue', // Text color
            textDecoration: 'none'
          }}
        >
          {tocText}
        </Nav.Link>
      );
      // Mark H2 as having children
      tocItems.find(item => item.key === lastH2Key).hasChildren = true;
    }
  });

  setTocItems(tocItems.map(item => (
    <Card key={item.key}>
      {React.cloneElement(item.content, { hasChildren: item.hasChildren })}
      {item.hasChildren && (
        <Accordion.Collapse eventKey={item.key}>
          <Card.Body>{item.children}</Card.Body>
        </Accordion.Collapse>
      )}
    </Card>
  )));
};

const SideNav = () => {
  const sideNavRef = useRef(null);
  const padd = useHeaderPadding();
  const [tocItems, setTocItems] = useState([]);

  useEffect(() => {
    addItemToNavbar(() => padd, setTocItems);
  }, [padd]);

  return (
    <Col
      ref={sideNavRef}
      lg={2.5} 
      xl={2.5}
          style={{
        position: 'fixed',
        top: `${padd}px`,
        left: 0,
        height: '100vh',
        overflowY: 'auto',
        padding: '10px',
        boxSizing: 'border-box',
        backgroundColor: '#f8f9fa', // A light grey background
      }}
    >
      <Accordion defaultActiveKey="0">
        {tocItems}
      </Accordion>
    </Col>
  );
};

export { SideNav };
