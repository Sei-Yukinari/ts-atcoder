import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should correctly calculate the result with positive operations", () => {
    const result = main(3, [
      { sign: "+", num: 2 },
      { sign: "+", num: 3 },
      { sign: "+", num: 4 },
    ]);
    assert.deepStrictEqual(result, [2, 5, 9]);
  });

  it("should correctly calculate the result with negative operations", () => {
    const result = main(3, [
      { sign: "-", num: 2 },
      { sign: "-", num: 3 },
      { sign: "-", num: 4 },
    ]);
    assert.deepStrictEqual(result, [9998, 9995, 9991]);
  });

  it("should correctly calculate the result with mixed operations", () => {
    const result = main(3, [
      { sign: "+", num: 2 },
      { sign: "-", num: 3 },
      { sign: "*", num: 4 },
    ]);
    assert.deepStrictEqual(result, [2, 9999, 9996]);
  });

  it("should correctly calculate the result with multiplication operations", () => {
    const result = main(3, [
      { sign: "*", num: 2 },
      { sign: "*", num: 3 },
      { sign: "*", num: 4 },
    ]);
    assert.deepStrictEqual(result, [0, 0, 0]);
  });

  it("should correctly calculate the result with no operations", () => {
    const result = main(0, []);
    assert.deepStrictEqual(result, []);
  });
});
