import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns correct result for given inputs", () => {
    const result = main(7, 10, [11, 12, 16, 22, 27, 28, 31]);
    assert.strictEqual(result, 11);
  });
});
