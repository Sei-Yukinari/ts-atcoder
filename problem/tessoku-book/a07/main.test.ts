import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(
    () => "8\n" + "5\n" + "2 3\n" + "3 6\n" + "5 7\n" + "3 7\n" + "1 5",
  ),
}));

describe("main function", () => {
  it("should correctly calculate the cumulative sum", () => {
    const result = main(8, 5, [2, 3, 5, 3, 1], [3, 6, 7, 7, 5]);
    assert.deepStrictEqual(result, [1, 2, 4, 3, 4, 3, 2, 0]);
  });
  it("should return empty array when no queries are provided", () => {
    const result = main(5, 0, [], []);
    assert.deepStrictEqual(result, [0, 0, 0, 0, 0]);
  });
});
