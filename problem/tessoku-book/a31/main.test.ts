import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns correct result when input is divisible by both 3 and 5", () => {
    const result = main(10);
    assert.strictEqual(result, 5);
  });

  it("returns correct result when input is divisible by 3 but not 5", () => {
    const result = main(9);
    assert.strictEqual(result, 4);
  });

  it("returns correct result when input is not divisible by either 3 or 5", () => {
    const result = main(7);
    assert.strictEqual(result, 3);
  });

  it("returns 0 when input is 0", () => {
    const result = main(0);
    assert.strictEqual(result, 0);
  });
});
