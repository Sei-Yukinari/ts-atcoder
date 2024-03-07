import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(
    () =>
      "5 5\n" +
      "2 0 0 5 1\n" +
      "1 0 3 0 0\n" +
      "0 8 5 0 2\n" +
      "4 1 0 0 6\n" +
      "0 9 2 7 0\n" +
      "2\n" +
      "2 2 4 5\n" +
      "1 1 5 5",
  ),
}));

describe("main function", () => {
  it("should correctly calculate the cumulative sum", () => {
    const result = main(
      5,
      5,
      [
        [2, 0, 0, 5, 1],
        [1, 0, 3, 0, 0],
        [0, 8, 5, 0, 2],
        [4, 1, 0, 0, 6],
        [0, 9, 2, 7, 0],
      ],
      2,
      [
        [2, 2, 4, 5],
        [1, 1, 5, 5],
      ],
    );
    assert.deepStrictEqual(result, [25, 56]);
  });
  it("should correctly calculate the cumulative sum for non-zero indices", () => {
    const result = main(
      5,
      5,
      [
        [2, 0, 0, 5, 1],
        [1, 0, 3, 0, 0],
        [0, 8, 5, 0, 2],
        [4, 1, 0, 0, 6],
        [0, 9, 2, 7, 0],
      ],
      1,
      [[2, 2, 4, 5]],
    );
    assert.deepStrictEqual(result, [25]);
  });
  it("should correctly calculate the cumulative sum for non-zero indices", () => {
    const result = main(
      5,
      5,
      [
        [2, 0, 0, 5, 1],
        [1, 0, 3, 0, 0],
        [0, 8, 5, 0, 2],
        [4, 1, 0, 0, 6],
        [0, 9, 2, 7, 0],
      ],
      1,
      [[2, 2, 4, 5]],
    );
    assert.deepStrictEqual(result, [25]);
  });
});
