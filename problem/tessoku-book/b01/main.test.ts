import { main } from "./main";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns the sum of two numbers", () => {
    const result = main(2, 3);
    expect(result).toBe(5);
  });

  it("returns zero when both inputs are zero", () => {
    const result = main(0, 0);
    expect(result).toBe(0);
  });

  it("returns the correct result when inputs are negative", () => {
    const result = main(-2, -3);
    expect(result).toBe(-5);
  });
});
