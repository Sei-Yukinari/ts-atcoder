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
  h: number,
  w: number,
  hw: number[][],
  q: number,
  p: number[][],
): number[] => {
  let z: number[][] = new Array(h + 1)
    .fill(0)
    .map(() => new Array(w + 1).fill(0));

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      z[i + 1][j + 1] = z[i + 1][j] + z[i][j + 1] - z[i][j] + hw[i][j];
    }
  }

  let result: number[] = [];
  for (let i = 0; i < q; i++) {
    const a = p[i][0];
    const b = p[i][1];
    const c = p[i][2];
    const d = p[i][3];
    const sum = z[c][d] - z[a - 1][d] - z[c][b - 1] + z[a - 1][b - 1];
    result.push(sum);
  }

  return result;
};

const str = fs.readFileSync("/dev/stdin", "utf8");
const input = createInputHandlers(str);

const h = input.nextNum();
const w = input.nextNum();

const hw: number[][] = new Array(h).fill(0).map(() => new Array(w).fill(0));
for (let i = 0; i < h; i++) {
  hw[i] = input.nextNums(w);
}
const q = input.nextNum();

const p: number[][] = new Array(q).fill(0).map(() => new Array(4).fill(0));
for (let i = 0; i < q; i++) {
  for (let j = 0; j < 4; j++) {
    p[i][j] = input.nextNum();
  }
}

const result = main(h, w, hw, q, p);
input.print(result.join("\n"));
input.flush();
