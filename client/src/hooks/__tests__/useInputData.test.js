import { renderHook, act, cleanup } from "@testing-library/react-hooks";
import useInputData from "../useInputData";
afterEach(cleanup);
describe("useInputData", () => {
  const { result } = renderHook(() =>
    useInputData({ email: "", password: "" })
  );
  it("should initialize with empty string when passed no initial state", () => {
    const { result } = renderHook(() => useInputData());
    expect(result.current.input).toEqual("");
  });

  it("should initialize when passed an initial state", () => {
    expect(result.current.input).toEqual({ email: "", password: "" });
    expect(result.current.input).not.toEqual({ email: "" });
  });

  it("should update the respective state when value changes", () => {});
});
