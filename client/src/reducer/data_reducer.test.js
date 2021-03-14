import dataReducer from "./data_reducer";

describe("reducer", () => {
  it("throws an error with an unsupported type", () => {
    const emptyState = {};
    const nullAction = { type: null };
    expect(() => dataReducer(emptyState, nullAction)).toThrowError(
      /tried to reduce with unsupported action type/i
    );
  });
});
