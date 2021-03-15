import { renderHook, act } from "@testing-library/react-hooks";
import useInputData from "../useInputData";
describe("useInputData", () => {
  it("should initialize with empty string when passed no initial state", () => {
    const { result } = renderHook(() => useInputData());
    expect(result.current.input).toEqual("");
  });

  it("should initialize when passed an initial state", () => {
    const { result } = renderHook(() =>
      useInputData({ email: "", password: "" })
    );
    expect(result.current.input).toEqual({ email: "", password: "" });
    expect(result.current.input).not.toEqual({ email: "" });
  });

  it("should update the respective state when value changes", () => {});
});
