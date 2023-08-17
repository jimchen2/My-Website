import axios from "axios";
import backendurl from "../config/config";

async function SubmitComment({ parentid, username, message, blog }) {
  const name = username || "anonymous";
  const date = new Date().toString().split("GMT")[0];

  let commentResponse;

  try {
    commentResponse = await axios.post(backendurl + "/comment", {
      user: name,
      comment: message,
      date: date,
      blog: blog,
    });
  } catch (error) {
    console.error("Error submitting comment:", error);
    return; // if there's an error, return early
  }

  if (parentid !== -1) {
    try {
      const response = await axios.patch(backendurl + "/changechildid/", {
        childid: commentResponse.data._id,
        parentid: parentid,
      });
      console.log("Updated:", response.data);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  }
  window.location.reload();
}

export default SubmitComment;
