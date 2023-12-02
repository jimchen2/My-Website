import CommentBox from "./commentbox";
import axios from "axios";
import React, { useState, useEffect } from "react";
import backendurl from "../config/config";

const GetComments = ({ blog,paddl=30,paddr=30 }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getcomment = async () => {
      try {
        const response = await axios.get(backendurl + "/comment/?blog=" + blog);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    getcomment();
  }, [blog]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const renderComments = (comments, parentId, depth) => {
    let result = [];
    const currentComments = comments.filter(
      (comment) => comment._id === parentId
    );

    for (let comment of currentComments) {
      result.push(
        <div className="GroupCommentBox" key={comment._id}>
          <CommentBox
            user={comment.user}
            comment={comment.text}
            date={comment.date}
            like={comment.like}
            id={comment._id}
            blog={blog}
            embed={depth}
          />
          {/* Recurse into replies of the current comment */}
          {comment.pointer.map((childId) =>
            renderComments(comments, childId, depth + 1)
          )}
        </div>
      );
    }

    return result;
  };

  // Initial call
  const allPointers = data.flatMap((d) => d.pointer);
  const rootComments = data.filter((d) => !allPointers.includes(d._id));
  const renderedComments = rootComments.flatMap(
    (comment) => renderComments(data, comment._id, 1) // start root comments at depth 1
  );

  return <div style={{paddingLeft:paddl,paddingRight:paddr}}>{renderedComments}</div>;
};

export default GetComments;
