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

export const main = (n: number, k: number, a: number[]): number => {
  let left = 1;
  let right = 10 ** 9;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid, n, k, a)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

export const check = (
  mid: number,
  n: number,
  k: number,
  a: number[],
): boolean => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.floor(mid / a[i]);
  }
  return sum >= k;
};

const str = fs.readFileSync("/dev/stdin", "utf8");
const input = createInputHandlers(str);

const n = input.nextNum();
const k = input.nextNum();
const a = input.nextNums(n);
const result = main(n, k, a);
input.print(result);
input.flush();
