import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => "3"),
}));

describe("main function", () => {
  it("returns correct root for cubic equation", () => {
    const result = main(2);
    const expected = 1.0;
    const absoluteError = Math.abs(result - expected);
    const relativeError = absoluteError / Math.abs(expected);
    assert.ok(absoluteError < 0.001 || relativeError < 0.001);
  });

  it("returns 1 for input 0", () => {
    const result = main(0);
    assert.strictEqual(result, 0);
  });
});
