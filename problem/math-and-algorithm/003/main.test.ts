import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return the sum of the array elements", () => {
    const actual = main(5, [3, 1, 4, 1, 5]);
    assert.equal(actual, 14);
  });

  it("should return 0 for an empty array", () => {
    const actual = main(0, []);
    assert.equal(actual, 0);
  });

  it("should return the sum of the array elements", () => {
    const actual = main(5, [3, 1, 4, 1, 5]);
    assert.equal(actual, 14);
  });

  it("should return 0 for an empty array", () => {
    const actual = main(0, []);
    assert.equal(actual, 0);
  });
});
