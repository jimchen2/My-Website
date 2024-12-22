import axios from "axios";
import backendurl from "../config/config";

async function SubmitComment({ parentid, username, message, bloguuid, blogname }) {
  const name = username || "anonymous";
  const uuid = [...Array(32)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

  let commentResponse;
  try {
    commentResponse = await axios.post(backendurl + "/comment", {
      user: name,
      text: message,
      blog: bloguuid,
      uuid: uuid,
      blogname: blogname,
    });
  } catch (error) {
    console.error("Error submitting comment:", error);
    return;
  }

  if (parentid !== "-1") {
    try {
      const response = await axios.patch(backendurl + "/changechildid/", {
        childid: commentResponse.data.uuid,
        parentid: parentid,
      });

      console.log("Updated:", response.data);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  }
}

export default SubmitComment;
