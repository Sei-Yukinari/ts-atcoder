import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => "5 3\n1 2 3 4 5\n1 3\n2 4\n1 5\n"),
}));

describe("main function", () => {
  it("should return 'win' when there are more wins than losses", () => {
    const result = main(7, [0, 1, 1, 0, 1, 0, 0], 3, [2, 2, 5], [5, 7, 7]);
    assert.deepStrictEqual(result, ["win", "draw", "lose"]);
  });
});
