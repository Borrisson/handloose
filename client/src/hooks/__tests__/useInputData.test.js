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

  it("should update the respective state of an object state when value changes", () => {
    const { result } = renderHook(() =>
      useInputData({ email: "", password: "" })
    );
    act(() =>
      result.current.handleChange({
        target: {
          value: "hello",
          name: "email",
        },
      })
    );
    expect(result.current.input).toEqual({ email: "hello", password: "" });
  });

  it("should update the state correctly if not provided an initial state", () => {
    const { result } = renderHook(() => useInputData());
    act(() =>
      result.current.handleChange({
        target: {
          value: "hello",
          name: "email",
        },
      })
    );
    expect(result.current.input).toEqual({ email: "hello" });
  });

  it("should reset all input fields with handleReset", () => {
    const { result } = renderHook(() =>
      useInputData({ email: "my@email.example", password: "password" })
    );
    act(() => result.current.handleReset());
    expect(result.current.input).toEqual({ email: "", password: "" });
  });

  it("should reset a string state (no object) with handleReset", () => {
    const { result } = renderHook(() => useInputData("hello"));
    act(() => result.current.handleReset());
    expect(result.current.input).toEqual("");
  });
});
