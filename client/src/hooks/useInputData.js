import { useState } from "react";

export default function useInputData(initial) {
  const [input, setInput] = useState(initial || "");

  function handleChange(evt) {
    const value = evt.target.value;
    setInput({
      ...input,
      [evt.target.type]: value,
    });
  }
  return { input, handleChange };
}
