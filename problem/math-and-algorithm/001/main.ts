import * as fs from "fs";

export const createInput = (str: string) => {
  const lines = str.split("\n");
  let index = 0;

  const s = () => lines[index++] || "";
  const n = () => Number(s());
  const mn = (v: string[]) => v.map(Number);
  const sp = (v: string) => v.split(" ");

  return {
    s,
    n,
    mn,
    sp,
    ss: () => sp(s()),
    nn: () => mn(sp(s())),
    nls: () => mn(lines.slice(index)),
    nnls: () => lines.slice(index).map((v: string) => mn(sp(v))),
  };
};
export const main = (orange: number): number => {
  const apple = 5;
  const result = apple + orange;
  return result;
};
const str = fs.readFileSync("/dev/stdin", "utf8");
const input = createInput(str);
console.log(main(input.n()));
