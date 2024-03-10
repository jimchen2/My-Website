import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GetComments from "./getcomments";
import CommentInputBox from "../commentsubmit/commentinputbox";
import { paddingtop } from "../config/global";
import { useEffect } from "react";
import { CommentsProvider } from "../contexts/CommentsContext";

const Msg = ({ blog = "00000000", blogcomment = false }) => {
  return (
    <CommentsProvider>
      <Container fluid style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Row className="my-4">
          {blogcomment ? (
            <>
              <Col md={{ span: 6, offset: 3 }}>
                <GetComments blog={blog} />
              </Col>
              <Col
                md={{ span: 8, offset: 2 }}
                style={{ paddingLeft: "15%", paddingRight: "15%" }}
              >
                <CommentInputBox id="-1" blog={blog} />
              </Col>
              <div style={{ marginBottom: `${paddingtop}px` }}></div>
            </>
          ) : (
            <>
              <Col
                md={{ span: 8, offset: 2 }}
                style={{ paddingLeft: "15%", paddingRight: "15%" }}
              >
                <CommentInputBox id="-1" blog={blog} />
              </Col>
              <Col md={{ span: 6, offset: 3 }}>
                <GetComments blog={blog} />
              </Col>
              <div style={{ marginBottom: `${paddingtop}px` }}></div>
            </>
          )}
        </Row>
      </Container>
    </CommentsProvider>
  );
};

export default Msg;
