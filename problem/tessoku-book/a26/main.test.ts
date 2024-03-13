import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns 'Yes' for all prime numbers", () => {
    const result = main(3, [2, 3, 5]);
    assert.deepStrictEqual(result, ["Yes", "Yes", "Yes"]);
  });

  it("returns 'No' for all non-prime numbers", () => {
    const result = main(3, [1, 4, 6]);
    assert.deepStrictEqual(result, ["No", "No", "No"]);
  });

  it("returns correct results for a mix of prime and non-prime numbers", () => {
    const result = main(4, [2, 4, 5, 6]);
    assert.deepStrictEqual(result, ["Yes", "No", "Yes", "No"]);
  });

  it("returns 'No' for 1", () => {
    const result = main(1, [1]);
    assert.deepStrictEqual(result, ["No"]);
  });

  it("returns 'Yes' for 2", () => {
    const result = main(1, [2]);
    assert.deepStrictEqual(result, ["Yes"]);
  });
});
