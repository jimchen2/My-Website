import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CV() {
  return (
    <Container fluid className="p-3">
      <Row className="justify-content-center">
        <Col xs={12}>
          <div className="text-center mb-4">
            My Curriculum Vitae 2023.6
          </div>
          <div style={{ overflow: 'auto', minHeight: '500px',maxWidth:"800px" }}>
            <object
              data="/CV.pdf"
              type="application/pdf"
              width="100%"
              style={{ minHeight: '500px' }}
            >
                <a href="/CV.pdf"></a>
            </object>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CV;
