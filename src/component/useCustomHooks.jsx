import { useState } from "react";

export const LikeCount = () => {
  const [likes, setLikes] = useState(0);
  const increase = () => setLikes(like => like + 1);
  const reset = () => setLikes(0);
  return {
    likes,
    increase,
    reset,
  };
};
export const ChangeColor = () => {
  const [color, setColor] = useState(" #4caf4f");
  const change = () => setColor(color === " #4caf4f" ? " #4d4d4d" : " #4caf4f");

  return {
    color,
    change,
  };
};
