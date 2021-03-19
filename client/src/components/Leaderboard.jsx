import Table from "react-bootstrap";
import LeaderboardItem from "./LeaderboardItem";

export default function Leaderboard(props) {
  const parsedTable = props.leaderboard.map((el) => {
    <LeaderboardItem key={el.id} {...el} />;
  });
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Score</th>
          <th>Streak</th>
        </tr>
      </thead>
      <tbody>{parsedTable}</tbody>
    </Table>
  );
}
