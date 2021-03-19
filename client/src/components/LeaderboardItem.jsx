import react from "react";

export default function LeaderboardItem({ index, name, score, streak }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{score}</td>
      <td>{streak}</td>
    </tr>
  );
}
