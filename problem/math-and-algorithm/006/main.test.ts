import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return 5 when input is 1", () => {
    const result = main(1);
    assert.strictEqual(result, 5);
  });

  it("should return 7 when input is 2", () => {
    const result = main(2);
    assert.strictEqual(result, 7);
  });

  it("should return 203 when input is 100", () => {
    const result = main(100);
    assert.strictEqual(result, 203);
  });

  it("should return -1 when input is -2", () => {
    const result = main(-2);
    assert.strictEqual(result, -1);
  });

  it("should return 3 when input is 0", () => {
    const result = main(0);
    assert.strictEqual(result, 3);
  });
});
