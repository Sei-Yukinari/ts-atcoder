import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return the nth Fibonacci number modulo 1000000007", () => {
    const result = main(10);
    assert.strictEqual(result, 55);
  });

  it("should return 1 for the first and second Fibonacci numbers", () => {
    assert.strictEqual(main(1), 1);
    assert.strictEqual(main(2), 1);
  });

  it("should return 1 for n=0", () => {
    assert.strictEqual(main(0), 1);
  });

  it("should handle large inputs", () => {
    const result = main(100000);
    assert.strictEqual(result, 911435502);
  });
});
