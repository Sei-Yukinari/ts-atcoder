import { isPrime, main } from "./main";
import * as assert from "assert";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns prime numbers up to N", () => {
    const expected = [2, 3, 5, 7];
    const result = main(10);
    assert.deepStrictEqual(result, expected);
  });

  it("returns empty array for N less than 2", () => {
    const expected: number[] = [];
    const result = main(1);
    assert.deepStrictEqual(result, expected);
  });
});

describe("isPrime function", () => {
  it("returns true for prime numbers", () => {
    assert.strictEqual(isPrime(2), true);
    assert.strictEqual(isPrime(3), true);
    assert.strictEqual(isPrime(5), true);
    assert.strictEqual(isPrime(7), true);
  });

  it("returns false for non-prime numbers", () => {
    assert.strictEqual(isPrime(1), false);
    assert.strictEqual(isPrime(4), false);
    assert.strictEqual(isPrime(6), false);
    assert.strictEqual(isPrime(8), false);
  });
});
