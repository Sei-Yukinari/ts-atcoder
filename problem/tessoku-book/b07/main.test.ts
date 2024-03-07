import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(
    () =>
      "10\n" +
      "7\n" +
      "0 3\n" +
      "2 4\n" +
      "1 3\n" +
      "0 3\n" +
      "5 6\n" +
      "5 6\n" +
      "5 6",
  ),
}));

describe("main function", () => {
  it("should return correct results for given inputs", () => {
    const expected = [2, 3, 4, 1, 0, 3, 0, 0, 0, 0];
    const result = main(10, 7, [0, 2, 1, 0, 5, 5, 5], [3, 4, 3, 3, 6, 6, 6]);
    assert.deepStrictEqual(result, expected);
  });

  it("should return all zeros for no ranges", () => {
    const expected = [0, 0, 0, 0, 0];
    const result = main(5, 0, [], []);
    assert.deepStrictEqual(result, expected);
  });

  it("should handle single range", () => {
    const expected = [1, 1, 1, 1, 0];
    const result = main(5, 1, [0], [4]);
    assert.deepStrictEqual(result, expected);
  });
});
