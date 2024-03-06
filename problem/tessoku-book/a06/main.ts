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
  n: number,
  q: number,
  a: number[],
  l: number[],
  r: number[],
): number[] => {
  const result: number[] = [];
  //累積和の計算
  const s = [0];
  for (let i = 0; i < n; i++) {
    s[i + 1] = s[i] + a[i];
  }
  //q個の質問の計算
  for (let i = 0; i < q; i++) {
    result[i] = s[r[i]] - s[l[i] - 1];
  }
  return result;
};

const str = fs.readFileSync("/dev/stdin", "utf8");
const input = createInputHandlers(str);

const n = input.nextNum();
const q = input.nextNum();
const a = input.nextNums(n);

const [l, r]: number[][] = [new Array(q), new Array(q)];
for (let i = 0; i < q; i++) {
  l[i] = input.nextNum();
  r[i] = input.nextNum();
}

const result = main(n, q, a, l, r);
input.print(result.join("\n"));
input.flush();
