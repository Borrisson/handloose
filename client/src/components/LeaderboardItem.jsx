import React from "react";

export default function LeaderboardItem({
  index,
  name,
  score,
  longest_streak,
}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{score}</td>
      <td>{longest_streak}</td>
    </tr>
  );
}
