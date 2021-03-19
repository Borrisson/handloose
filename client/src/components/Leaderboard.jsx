import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LeaderboardItem from "./LeaderboardItem";

export default function Leaderboard({ handleClose, show, leaderboard }) {
  const parsedTable = leaderboard.map((el, index) => {
    <LeaderboardItem key={el.id} index={index} {...el} />;
  });
  return (
    <Modal show={show} onHide={() => handleClose("register")} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Leaderboard</Modal.Title>
      </Modal.Header>

      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
