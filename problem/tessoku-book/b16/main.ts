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

export const main = (n: number, h: number[]): number => {
  const dp: number[] = [];
  dp[0] = 0;
  dp[1] = Math.abs(h[0] - h[1]);
  for (let i = 2; i < n; ++i) {
    let p1 = dp[i - 1] + Math.abs(h[i] - h[i - 1]);
    let p2 = dp[i - 2] + Math.abs(h[i] - h[i - 2]);
    dp[i] = Math.min(p1, p2);
  }
  return dp[n - 1];
};

const str = fs.readFileSync("/dev/stdin", "utf8");
if (str !== "") {
  const input = createInputHandlers(str);

  const n = input.nextNum();
  const h = input.nextNums(n);
  const result = main(n, h);
  input.print(result);
  input.flush();
}
