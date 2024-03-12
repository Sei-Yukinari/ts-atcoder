import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("calculates minimum cost correctly", () => {
    const result = main(5, [2, 4, 1, 3], [5, 3, 7]);
    assert.strictEqual(result, 8);
  });

  it("handles single step scenario", () => {
    const result = main(1, [1], []);
    assert.strictEqual(result, 0);
  });

  it("handles two steps scenario", () => {
    const result = main(2, [1, 2], [3]);
    assert.strictEqual(result, 1);
  });

  it("handles equal costs scenario", () => {
    const result = main(3, [1, 1, 1], [2, 2]);
    assert.strictEqual(result, 2);
  });
});
