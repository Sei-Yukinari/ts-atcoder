import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns correct result when input is divisible by 3, 5 and 7", () => {
    const result = main(105);
    assert.strictEqual(result, 57);
  });

  it("returns correct result when input is divisible by 3 and 5 but not 7", () => {
    const result = main(15);
    assert.strictEqual(result, 9);
  });

  it("returns correct result when input is divisible by 3 and 7 but not 5", () => {
    const result = main(21);
    assert.strictEqual(result, 12);
  });

  it("returns correct result when input is divisible by 5 and 7 but not 3", () => {
    const result = main(35);
    assert.strictEqual(result, 19);
  });

  it("returns correct result when input is divisible by 3 but not 5 and 7", () => {
    const result = main(9);
    assert.strictEqual(result, 5);
  });

  it("returns correct result when input is divisible by 5 but not 3 and 7", () => {
    const result = main(10);
    assert.strictEqual(result, 6);
  });

  it("returns correct result when input is divisible by 7 but not 3 and 5", () => {
    const result = main(14);
    assert.strictEqual(result, 8);
  });

  it("returns correct result when input is not divisible by 3, 5 or 7", () => {
    const result = main(1);
    assert.strictEqual(result, 0);
  });
});
