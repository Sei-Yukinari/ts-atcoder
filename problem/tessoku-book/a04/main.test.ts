import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return binary representation of 13 to the power of x", () => {
    const result = main(13);
    assert.strictEqual(result, "0000001101");
  });

  it("should return '0' when input is 0", () => {
    const result = main(0);
    assert.strictEqual(result, "0000000000");
  });

  it("should return '1' when input is 1", () => {
    const result = main(1);
    assert.strictEqual(result, "0000000001");
  });

  it("should return correct binary representation for large input", () => {
    const result = main(1000);
    assert.strictEqual(result, "1111101000");
  });
});
