import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CommentBox from "./commentbox";
import backendurl from "../config/config";
import { useComments } from "../contexts/CommentsContext"; // Updated import

const GetComments = ({ blog, paddl = 30, paddr = 30 }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateTrigger } = useComments(); // Use the custom hook instead

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${backendurl}/comment/?blogdate=${blog}`
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getComments();
  }, [blog, updateTrigger]);

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

  // Identify root comments and initiate recursive rendering
  const allPointers = data.flatMap((comment) => comment.pointer);
  const rootComments = data.filter(
    (comment) => !allPointers.includes(comment._id)
  );
  const renderedComments = rootComments.flatMap((comment) =>
    renderComments(data, comment._id, 1)
  );

  return (
    <div style={{ paddingLeft: paddl, paddingRight: paddr }}>
      {renderedComments}
    </div>
  );
};

export default GetComments;
