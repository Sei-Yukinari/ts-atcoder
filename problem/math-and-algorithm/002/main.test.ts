import { main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("calculates the sum of an array of numbers", () => {
    const input = [10, 20, 50];
    const actual = main(input);
    assert.equal(actual, 80);
  });
  it("returns zero for an empty array", () => {
    const input = [] as number[];
    const actual = main(input);
    assert.equal(actual, 0);
  });
});
