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

const pow = (a: bigint, b: bigint, m: bigint): bigint => {
  const one = BigInt(1);
  let ans = one;
  while (b > 0) {
    if ((b & one) === one) {
      ans = (ans * a) % m;
    }
    a = (a * a) % m;
    b = b >> one;
  }
  return ans;
};

export const main = (n: bigint, r: bigint): bigint => {
  const one = BigInt(1);
  const mod = BigInt(1000000007);
  let a = one;
  for (let i = 1; i <= n; i++) {
    a = (a * BigInt(i)) % mod;
  }
  let b = one;
  for (let i = 1; i <= r; i++) {
    b = (b * BigInt(i)) % mod;
  }
  for (let i = 1; i <= n - r; i++) {
    b = (b * BigInt(i)) % mod;
  }
  return (a * pow(b, mod - BigInt(2), mod)) % mod;
};

const str = fs.readFileSync("/dev/stdin", "utf8");
if (str !== "") {
  const input = createInputHandlers(str);

  const n = input.nextBigInt();
  const r = input.nextBigInt();
  const result = main(n, r);
  input.print(result);
  input.flush();
}
