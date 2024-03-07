import * as fs from "fs";

const createInputHandlers = (str: string) => {
  const inputArray = str.split(/\s/);
  let currentIndex = 0;
  let outputBuffer = "";

  const next = () => {
    return inputArray[currentIndex++];
  };

  const nextNum = () => {
    return +next();
  };

  const nextBigInt = () => {
    return BigInt(next());
  };

  const nexts = (length: number) => {
    const arr = [];
    for (let i = 0; i < length; ++i) arr[i] = next();
    return arr;
  };

  const nextNums = (length: number) => {
    const arr = [];
    for (let i = 0; i < length; ++i) arr[i] = nextNum();
    return arr;
  };

  const nextBigInts = (length: number) => {
    const arr = [];
    for (let i = 0; i < length; ++i) arr[i] = nextBigInt();
    return arr;
  };

  const print: {
    (out: string | number | bigint): void;
    <T>(out: Array<T>, separator: string): void;
  } = (out: string | number | bigint | Array<any>, separator?: string) => {
    if (Array.isArray(out)) {
      outputBuffer += out.join(separator);
    } else {
      outputBuffer += out;
    }
  };

  const println: {
    (out: string | number | bigint): void;
    <T>(out: Array<T>, separator: string): void;
  } = (out: string | number | bigint | Array<any>, separator?: string) => {
    if (Array.isArray(out)) {
      print(out, separator || "");
    } else {
      print(out);
    }
    print("\n");
  };

  function flush() {
    console.log(outputBuffer);
  }

  return {
    next,
    nextNum,
    nextBigInt,
    nexts,
    nextNums,
    nextBigInts,
    print,
    println,
    flush,
  };
};

export const main = (
  d: number,
  n: number,
  l: number[],
  r: number[],
): number[] => {
  const b: number[] = new Array(d + 1).fill(0);
  for (let i = 0; i < n; i++) {
    b[l[i] - 1]++;
    b[r[i]]--;
  }

  const result: number[] = new Array(d).fill(0);
  result[0] = b[0];
  for (let i = 1; i < d; i++) {
    result[i] = result[i - 1] + b[i];
  }
  return result;
};

const str = fs.readFileSync("/dev/stdin", "utf8");
const input = createInputHandlers(str);

const d = input.nextNum();
const n = input.nextNum();
const [l, r]: number[][] = [new Array(n), new Array(n)];
for (let i = 0; i < n; i++) {
  l[i] = input.nextNum();
  r[i] = input.nextNum();
}
const result = main(d, n, l, r);
input.print(result.join("\n"));
input.flush();
