import { useState } from "react";

export default function useShowData() {
  const [show, setShow] = useState({
    login: false,
    register: false,
    about: false,
    leaderboard: false,
  });
  const handleClose = (key) => setShow({ [key]: false });
  const handleShow = (key) => setShow({ [key]: true });

  return { show, handleClose, handleShow };
}
