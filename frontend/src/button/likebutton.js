import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import backendurl from "../config/config";
import { getIpAddress } from "../config/global";
import { useGlobalColorScheme } from "../config/global.js";

function LikeButton({ id, like, blog = false }) {
  const { colors } = useGlobalColorScheme();

  const userIP = getIpAddress();
  console.log(userIP);
  const [likes, setLikes] = useState(like.length);
  const [liked, setLiked] = useState(false);


  useEffect(() => {
    setLiked(like.includes(userIP));
  }, [like, userIP]);

  const handleLike = async () => {
    try {
      const isLiked = !liked;
      const newLikes = isLiked ? likes + 1 : likes - 1;

      setLiked(isLiked);
      setLikes(newLikes);

      if (blog === false) {
        await axios.patch(`${backendurl}/addlike`, {
          id,
          userIP,
          isLiked,
        });
      } else {
        await axios.patch(`${backendurl}/addliketoblog`, {
          id,
          userIP,
          isLiked,
        });
      }
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const baseStyle = {
    fontSize: "0.75rem",
    color: colors.color_blue_2,
    backgroundColor: colors.color_white,
    borderColor: colors.color_blue_2,
    padding: "2px 6px",
    margin: "5px",
    transition: "background-color 0.3s, color 0.3s",
  };

  const likedButtonStyle = {
    ...baseStyle,
    backgroundColor: colors.color_blue_2,
    color: colors.color_white,
  };

  return (
    <Button style={liked ? likedButtonStyle : baseStyle} onClick={handleLike}>
      {liked ? "Liked" : "Like"} {likes}
    </Button>
  );
}

export default LikeButton;
