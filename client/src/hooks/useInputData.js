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

  function submitRegister(evt) {
    return axios.post(
      "/api/users",
      {
        user: input,
      },
      { withCredentials: true }
    );
  }

  function submitLogin(evt) {
    return axios.post(
      "/api/sessions",
      {
        user: input,
      },
      { withCredentials: true }
    );
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
    submitRegister,
    submitLogin,
    handleReset,
  };
}
