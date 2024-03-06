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

export type GameResult = "win" | "lose" | "draw";

const WinOrLose = {
  LOSE: 0,
  WIN: 1,
} as const;

export const main = (
  n: number,
  a: number[],
  q: number,
  l: number[],
  r: number[],
): GameResult[] => {
  const result: GameResult[] = [];

  // 前処理
  const win: number[] = new Array(n + 1).fill(0);
  const lose: number[] = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    win[i + 1] = win[i] + (a[i] === WinOrLose.WIN ? 1 : 0);
    lose[i + 1] = lose[i] + (a[i] === WinOrLose.LOSE ? 1 : 0);
  }

  // 各質問に対する答えを計算
  for (let i = 0; i < q; i++) {
    const winCount = win[r[i]] - win[l[i] - 1];
    const loseCount = lose[r[i]] - lose[l[i] - 1];

    if (winCount > loseCount) {
      result.push("win");
    } else if (winCount < loseCount) {
      result.push("lose");
    } else {
      result.push("draw");
    }
  }

  return result;
};

const str = fs.readFileSync("/dev/stdin", "utf8");
const input = createInputHandlers(str);

const n = input.nextNum();
const a = input.nextNums(n);
const q = input.nextNum();
const [l, r]: number[][] = [new Array(q), new Array(q)];
for (let i = 0; i < q; i++) {
  l[i] = input.nextNum();
  r[i] = input.nextNum();
}
const result = main(n, a, q, l, r);
input.print(result.join("\n"));
input.flush();
