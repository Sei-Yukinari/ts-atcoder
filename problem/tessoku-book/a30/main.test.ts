import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return correct result for valid inputs", () => {
    const result = main(BigInt(5), BigInt(3));
    assert.strictEqual(result, BigInt(10));
  });

  it("should return 1 when n and r are the same", () => {
    const result = main(BigInt(5), BigInt(5));
    assert.strictEqual(result, BigInt(1));
  });

  it("should return n when r is 1", () => {
    const result = main(BigInt(5), BigInt(1));
    assert.strictEqual(result, BigInt(5));
  });

  it("should return 1 when r is 0", () => {
    const result = main(BigInt(5), BigInt(0));
    assert.strictEqual(result, BigInt(1));
  });
});
