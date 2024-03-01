import { main } from "./main";

describe("main function", () => {
  it("returns true when the array includes the number", () => {
    const result = main(5, [2, 3, 4, 5, 6]);
    expect(result).toBe(true);
  });

  it("returns false when the array does not include the number", () => {
    const result = main(1, [2, 3, 4, 5, 6]);
    expect(result).toBe(false);
  });
});
