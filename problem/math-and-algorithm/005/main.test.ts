import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return the modulus of the sum of array elements", () => {
    const result = main([1, 2, 3, 4, 5]);
    assert.strictEqual(result, 15 % 100);
  });

  it("should return 0 for an empty array", () => {
    const result = main([]);
    assert.strictEqual(result, 0);
  });

  it("should return the same number for an array with one element", () => {
    const result = main([37]);
    assert.strictEqual(result, 37);
  });
});
