import { renderHook, act } from "@testing-library/react-hooks";
import useInputData from "../useInputData";
describe("useInputData", () => {
  it("should initialize blank", () => {
    const { result } = renderHook(() =>
      useInputData({ email: "", password: "" })
    );
    expect(result.current.input).toEqual({ email: "", password: "" });
  });

  it("", () => {});
});
