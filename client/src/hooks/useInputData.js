import { useState } from "react";

export default function useInputData() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.type]: value,
    });
  }
  return { input, handleChange };
}
