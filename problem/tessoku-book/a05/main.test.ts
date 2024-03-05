import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns correct count when three numbers sum to k", () => {
    const result = main(3, 6);
    assert.strictEqual(result, 7);
  });

  it("returns 0 when no three numbers can sum to k", () => {
    const result = main(3, 10);
    assert.strictEqual(result, 0);
  });

  it("handles large numbers correctly", () => {
    const result = main(3000, 9000);
    assert.strictEqual(result, 1);
  });

  it("returns 0 when k is less than 3", () => {
    const result = main(3, 2);
    assert.strictEqual(result, 0);
  });
});
