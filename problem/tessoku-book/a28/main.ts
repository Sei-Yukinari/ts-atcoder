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

export const main = (n: number, t: T[]): number[] => {
  let result: number[] = [];
  let sum = 0;
  t.forEach((e) => {
    if (e.sign === "+") {
      sum += e.num;
    } else if (e.sign === "-") {
      sum -= e.num;
    } else if (e.sign === "*") {
      sum *= e.num;
    }
    if (sum <= 0) {
      sum += 10000;
    }
    sum %= 10000;
    result.push(sum);
  });
  return result;
};

type T = {
  sign: string;
  num: number;
};

const str = fs.readFileSync("/dev/stdin", "utf8");
if (str !== "") {
  const input = createInputHandlers(str);

  const n = input.nextNum();
  const t: T[] = [];
  for (let i = 0; i < n; i++) {
    const sign = input.next();
    const num = input.nextNum();
    t.push({ sign, num });
  }

  const result = main(n, t);
  input.print(result.join("\n"));
  input.flush();
}
