import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => "1010"),
}));

describe("main function", () => {
  it("should correctly convert binary string to decimal", () => {
    const result = main("1010");
    assert.strictEqual(result, 10);
  });

  it("should return 0 for binary string '0'", () => {
    const result = main("0");
    assert.strictEqual(result, 0);
  });

  it("should return 1 for binary string '1'", () => {
    const result = main("1");
    assert.strictEqual(result, 1);
  });

  it("should handle large binary strings correctly", () => {
    const result = main("1100101010111010101010101010101");
    assert.strictEqual(result, 1700615509);
  });
});
