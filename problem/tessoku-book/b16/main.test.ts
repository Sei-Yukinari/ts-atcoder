import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("calculates minimum cost correctly for multiple steps", () => {
    const result = main(4, [10, 30, 40, 20]);
    assert.strictEqual(result, 30);
  });
  it("calculates minimum cost correctly for two steps with same heights", () => {
    const result = main(2, [10, 10]);
    assert.strictEqual(result, 0);
  });
  it("calculates minimum cost correctly for single step", () => {
    const result = main(1, [10]);
    assert.strictEqual(result, 0);
  });
});
