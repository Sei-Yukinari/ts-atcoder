import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns product of array elements", () => {
    const result = main([1, 2, 3, 4]);
    assert.equal(result, 24);
  });
  it("returns product of array elements", () => {
    const result = main([1, 0, 3, 4]);
    assert.equal(result, 0);
  });
});
