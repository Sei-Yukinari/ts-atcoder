import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns 'Yes' when there exists a pair of sums that equals k", () => {
    const result = main(3, 50, [3, 9, 17], [4, 7, 9], [10, 20, 30], [1, 2, 3]);
    assert.strictEqual(result, "Yes");
  });

  it("returns 'No' when there does not exist a pair of sums that equals k", () => {
    const result = main(2, 100, [1, 2], [1, 2], [1, 2], [1, 2]);
    assert.strictEqual(result, "No");
  });

  it("returns 'Yes' when all elements are the same and k equals the sum", () => {
    const result = main(2, 4, [1, 1], [1, 1], [1, 1], [1, 1]);
    assert.strictEqual(result, "Yes");
  });

  it("returns 'No' when all elements are the same and k does not equal the sum", () => {
    const result = main(2, 5, [1, 1], [1, 1], [1, 1], [1, 1]);
    assert.strictEqual(result, "No");
  });
});
