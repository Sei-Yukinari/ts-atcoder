import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns the correct counts when the elements are found", () => {
    const n = 15;
    const a = [83, 31, 11, 17, 32, 19, 23, 37, 43, 47, 53, 61, 67, 5, 55];
    const q = 5;
    const x = [10, 20, 30, 40, 50];
    const result = main(n, a, q, x);
    assert.deepStrictEqual(result, [1, 4, 5, 8, 10]);
  });

  it("returns same", () => {
    const n = 5;
    const a = [1, 3, 3, 3, 1];
    const q = 2;
    const x = [4, 3];
    const result = main(n, a, q, x);
    assert.deepStrictEqual(result, [5, 2]);
  });

  it("returns the correct counts for mixed scenarios", () => {
    const n = 5;
    const a = [1, 2, 3, 4, 5];
    const q = 3;
    const x = [3, 6, 1];
    const result = main(n, a, q, x);
    assert.deepStrictEqual(result, [2, 5, 0]);
  });
});
