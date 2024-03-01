import { main, createInputHandlers } from "./main";

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => ""),
}));

describe("main function", () => {
  it("returns the square of the input number", () => {
    const result = main(5);
    expect(result).toBe(25);
  });

  it("returns zero when input is zero", () => {
    const result = main(0);
    expect(result).toBe(0);
  });
});

describe("createInputHandlers function", () => {
  let handlers: ReturnType<typeof createInputHandlers>;

  beforeEach(() => {
    handlers = createInputHandlers("1 2 3 4 5");
  });

  it("returns the next input as a string", () => {
    expect(handlers.next()).toBe("1");
  });

  it("returns the next input as a number", () => {
    expect(handlers.nextNum()).toBe(1);
  });

  it("returns the next input as a BigInt", () => {
    expect(handlers.nextBigInt()).toBe(BigInt(1));
  });

  it("returns the next n inputs as an array of strings", () => {
    expect(handlers.nexts(3)).toEqual(["1", "2", "3"]);
  });

  it("returns the next n inputs as an array of numbers", () => {
    expect(handlers.nextNums(3)).toEqual([1, 2, 3]);
  });

  it("returns the next n inputs as an array of BigInts", () => {
    expect(handlers.nextBigInts(3)).toEqual([BigInt(1), BigInt(2), BigInt(3)]);
  });
});
