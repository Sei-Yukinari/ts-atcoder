import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("should return 'Yes' when sum of any pair equals k", () => {
    const result = main(3, 5, [1, 2, 3], [2, 3, 4]);
    assert.strictEqual(result, "Yes");
  });

  it("should return 'No' when sum of no pair equals k", () => {
    const result = main(3, 10, [1, 2, 3], [2, 3, 4]);
    assert.strictEqual(result, "No");
  });

  it("should return 'Yes' when n is 1 and p[0] + q[0] equals k", () => {
    const result = main(1, 2, [1], [1]);
    assert.strictEqual(result, "Yes");
  });

  it("should return 'No' when n is 1 and p[0] + q[0] does not equal k", () => {
    const result = main(1, 3, [1], [1]);
    assert.strictEqual(result, "No");
  });

  it("should return 'No' when arrays are empty", () => {
    const result = main(0, 0, [], []);
    assert.strictEqual(result, "No");
  });
});
