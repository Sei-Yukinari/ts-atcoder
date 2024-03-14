import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns the greatest common divisor of two numbers", () => {
    const result = main(12, 18);
    assert.strictEqual(result, 6);
  });

  it("returns the input if it is the greatest common divisor", () => {
    const result = main(7, 14);
    assert.strictEqual(result, 7);
  });

  it("returns 1 if the numbers are coprime", () => {
    const result = main(17, 22);
    assert.strictEqual(result, 1);
  });

  it("returns the other number if one number is 0", () => {
    const result = main(0, 5);
    assert.strictEqual(result, 5);
  });

  it("returns 0 if both numbers are 0", () => {
    const result = main(0, 0);
    assert.strictEqual(result, 0);
  });
});
