import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(
    () => "15 47\n" + "11 13 17 19 23 29 31 37 41 43 47 53 59 61 67",
  ),
}));

describe("main function", () => {
  it("returns the correct index when the element is found", () => {
    const n = 5;
    const x = 3;
    const a = [1, 2, 3, 4, 5];
    const result = main(n, x, a);
    assert.strictEqual(result, 3);
  });

  it("throws an error when the element is not found", () => {
    const n = 5;
    const x = 6;
    const a = [1, 2, 3, 4, 5];
    assert.throws(() => main(n, x, a), Error);
  });

  it("returns the correct index when the element is the first in the array", () => {
    const n = 5;
    const x = 1;
    const a = [1, 2, 3, 4, 5];
    const result = main(n, x, a);
    assert.strictEqual(result, 1);
  });

  it("returns the correct index when the element is the last in the array", () => {
    const n = 5;
    const x = 5;
    const a = [1, 2, 3, 4, 5];
    const result = main(n, x, a);
    assert.strictEqual(result, 5);
  });
});
