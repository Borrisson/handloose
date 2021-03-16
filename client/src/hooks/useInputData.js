import { useState } from "react";
import axios from "axios";

export default function useInputData(initial) {
  const [input, setInput] = useState(initial || "");

  function handleChange(evt) {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.name]: value,
    });
  }

  function handleRegister(evt) {
    axios
      .post(
        "http://localhost:3001/api/users",
        {
          user: input,
        },
        { withCredentials: true }
      )
      .then((response) => {
        handleReset();
        console.log("registration res", response);
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    evt.preventDefault();
  }

  function handleLogin(evt) {
    axios
      .post(
        "http://localhost:3001/api/sessions",
        {
          user: input,
        },
        { withCredentials: true }
      )
      .then((response) => {
        handleReset();
        console.log("login res", response);
      })
      .catch((error) => {
        console.log("login error", error);
      });
    evt.preventDefault();
  }

  function handleReset() {
    if (typeof input !== "object") {
      setInput("");
    } else {
      const buffer = { ...input };

      for (const key in buffer) {
        buffer[key] = "";
      }

      setInput(buffer);
    }
  }

  return {
    input,
    handleChange,
    handleRegister,
    handleLogin,
    handleReset,
  };
}
