import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns 'Yes' when three numbers in the array sum to 1000", () => {
    const result = main([500, 250, 250, 100]);
    assert.strictEqual(result, "Yes");
  });

  it("returns 'No' when no three numbers in the array sum to 1000", () => {
    const result = main([500, 400, 200, 90]);
    assert.strictEqual(result, "No");
  });

  it("returns 'No' when the array is empty", () => {
    const result = main([]);
    assert.strictEqual(result, "No");
  });

  it("returns 'No' when the array has less than three elements", () => {
    const result = main([500, 500]);
    assert.strictEqual(result, "No");
  });
});
