import { main, check } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => "4 10\n" + "1 2 3 4"),
}));

describe("main function", () => {
  it("returns the minimum number that satisfies the condition", () => {
    const result = main(4, 10, [1, 2, 3, 4]);
    assert.strictEqual(result, 6);
  });
  it("returns the maximum possible number when the condition cannot be satisfied", () => {
    const result = main(3, 1000000000, [1, 2, 3]);
    assert.strictEqual(result, 545454546);
  });
});

describe("check function", () => {
  it("returns true when sum of quotients is greater than or equal to k", () => {
    const result = check(5, 3, 6, [1, 2, 3]);
    assert.strictEqual(result, true);
  });

  it("returns false when sum of quotients is less than k", () => {
    const result = check(2, 3, 10, [1, 2, 3]);
    assert.strictEqual(result, false);
  });
});
