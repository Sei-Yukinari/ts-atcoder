import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should correctly calculate power with small numbers", () => {
    const result = main(BigInt(2), BigInt(3));
    assert.strictEqual(result, BigInt(8));
  });

  it("should correctly calculate power with large numbers", () => {
    const result = main(BigInt(5), BigInt(23));
    assert.strictEqual(result, BigInt(871631629));
  });

  it("should return 1 when power is 0", () => {
    const result = main(BigInt(999999999), BigInt(0));
    assert.strictEqual(result, BigInt(1));
  });

  it("should return 0 when base is 0", () => {
    const result = main(BigInt(0), BigInt(999999999));
    assert.strictEqual(result, BigInt(0));
  });
});
