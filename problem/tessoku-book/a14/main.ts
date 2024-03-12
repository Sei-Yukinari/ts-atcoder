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

type YesNo = "Yes" | "No";

export const main = (
  n: number,
  k: number,
  a: number[],
  b: number[],
  c: number[],
  d: number[],
): YesNo => {
  const p: number[] = [];
  const q: number[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      p.push(a[i] + b[j]);
      q.push(c[i] + d[j]);
    }
  }
  q.sort((a, b) => a - b);

  for (let i = 0; i < n * n; i++) {
    let l = 0;
    let r = n * n;

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (p[i] + q[mid] === k) {
        return "Yes";
      }
      if (p[i] + q[mid] < k) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return "No";
};

const str = fs.readFileSync("/dev/stdin", "utf8");
const input = createInputHandlers(str);

const n = input.nextNum();
const k = input.nextNum();
const a = input.nextNums(n);
const b = input.nextNums(n);
const c = input.nextNums(n);
const d = input.nextNums(n);

const result = main(n, k, a, b, c, d);
input.print(result);
input.flush();
