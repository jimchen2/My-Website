import axios from "axios";
import backendurl from "../config/config";

async function SubmitComment({ parentid, username, message, blog }) {
  const name = username || "anonymous";
  const blogDate = blog;
  let commentResponse;
  try {
    commentResponse = await axios.post(backendurl + "/comment", {
      user: name,
      text: message,
      blog: blog,
    });
  } catch (error) {
    console.error("Error submitting comment:", error);
    return;
  }
  if (parentid !== "-1") {
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
}

export default SubmitComment;
