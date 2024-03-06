import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => "5 3\n1 2 3 4 5\n1 3\n2 4\n1 5\n"),
}));

describe("main function", () => {
  it("should correctly calculate the sum of sub arrays", () => {
    const result = main(
      10,
      5,
      [8, 6, 9, 1, 2, 1, 10, 100, 1000, 10000],
      [2, 1, 3, 6, 1],
      [3, 4, 9, 8, 10],
    );
    assert.deepStrictEqual(result, [15, 24, 1123, 111, 11137]);
  });
  it("should return empty array when no queries are provided", () => {
    const result = main(5, 0, [1, 2, 3, 4, 5], [], []);
    assert.deepStrictEqual(result, []);
  });
  it("should return empty array when no queries are provided", () => {
    const result = main(5, 0, [1, 2, 3, 4, 5], [], []);
    assert.deepStrictEqual(result, []);
  });
});
