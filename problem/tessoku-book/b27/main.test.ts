import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return the least common multiple of two numbers", () => {
    const result = main(BigInt(12), BigInt(15));
    assert.strictEqual(result, BigInt(60));
  });

  it("should return the number itself when both numbers are the same", () => {
    const result = main(BigInt(7), BigInt(7));
    assert.strictEqual(result, BigInt(7));
  });

  it("should return zero when one of the numbers is zero", () => {
    const result = main(BigInt(0), BigInt(7));
    assert.strictEqual(result, BigInt(0));
  });
});
