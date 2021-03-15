import { renderHook, act } from "@testing-library/react-hooks";
import useInputData from "../useInputData";

it("useInputData should initialize blank", () => {
  const { result } = renderHook(() => useInputData());
  expect(result.current.input).toEqual({ email: "", password: "" });
});
