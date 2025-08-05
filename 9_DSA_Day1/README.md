# DSA Day 1 Assignment

#### `Time Complexity`, `Stack` and `Queue`

---

### 1. Calculate time complexity of following code snippets:

```js
function print() {
  console.log("Hello World");
}
```

- Executes a single statement regardless of input.
- No loops, recursion, or input dependency.
- Time Complexity: `O(1)`

<br>

```js
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

- One loop over `arr.length = n`.
- Performs constant work for each element --> `n` iterations.
- Time Complexity: `O(n)`

<br>

```js
function findX(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) {
        x.push([arr[i], arr[j]]);
      }
    }
  }
  return x;
}
```

- Two nested loops → both run `n` times.
- Work inside (push + comparison) is O(1).
- So, total operations = `n * n` --> quadratic.
- Time Complexity: `O(n²)`

<br>

```js
function getFirstTwoElements(arr) {
  if (arr.length < 2) {
    return null;
  }
  const first = arr[0];
  const second = arr[1];
  return [first, second];
}
```

- No loop.
- Accessing first two elements is constant time.
- Time Complexity: `O(1)`

<br>

```js
function processTwoArrays(arr1, arr2) {
  let sum1 = 0;
  for (const item of arr1) {
    sum1 += item;
  }
  let sum2 = 0;
  for (const item of arr2) {
    sum2 += item;
  }
  return sum1 + sum2;
}
```

- Two separate loops:
  - First loop runs `m` times → `arr1.length = m`
  - Second loop runs `n` times → `arr2.length = n`
- They’re not nested --> just additive.
- Time Complexity: `O(m + n)`

<br>

```js
function countF(n) {
  let count = 0;
  for (let i = 1; i < n; i = i * 2) {
    count++;
  }
  return count;
}
```

- Loop variable i doubles each time → grows exponentially: `1, 2, 4, 8, ..., < n`
- Total iterations = number of times you can multiply `i` by 2 before exceeding `n`
- That’s approximately log₂(n)
- Time Complexity: `O(log n)`

<br>

---

### 2. Find worst, average and best cases:

```js
function findElement(sortedArr, target) {
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

**What It Does:**

- Linear search over a sorted array.
- Compares each element to `target`.

* Time Complexities:
  | Case | Complexity | Why? |
  | ----------- | ---------- | ---------------------------------------------------------- |
  | **Best** | **O(1)** | If `target === arr[0]` -> found on first check. |
  | **Average** | **O(n)** | On average, target is in the middle -> need \~`n/2` checks. |
  | **Worst** | **O(n)** | If `target` is not in array or at the end. |

<br>

```js
function recursiveSum(n) {
  if (n <= 0) return 0;
  return n + recursiveSum(n - 1);
}
```

**What It Does:**

- Recursively sums numbers from `n` to `0`.
- One recursive call per decrement.

* Time Complexities:

  | Case        | Complexity | Why?                                     |
  | ----------- | ---------- | ---------------------------------------- |
  | **Best**    | **O(1)**   | If `n <= 0`, hits base case immediately. |
  | **Average** | **O(n)**   | For general `n`, recurses `n` times.     |
  | **Worst**   | **O(n)**   | No early termination. Tail depth is `n`. |

<br>

```js
function dFunction(arr) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
}
```

**What It Does:**

- Checks for duplicates in array.
- Uses a hash map for O(1) lookup/insert.

* Time Complexities:

  | Case        | Complexity | Why?                                                      |
  | ----------- | ---------- | --------------------------------------------------------- |
  | **Best**    | **O(1)**   | Duplicate found at index 1 (e.g., `[2, 2, ...]`)          |
  | **Average** | **O(n)**   | Needs to scan part of the array before duplicate appears. |
  | **Worst**   | **O(n)**   | No duplicates at all → must check all elements.           |

  <br>

```js
function repeatLog(arr) {
  for (let i = 0; i < arr.length; i++) {
    let repetitions = arr[i];
    for (let j = 0; j < repetitions; j++) {
      console.log("hello");
    }
  }
}
```

**What It Does:**

- For each element in `arr`, logs `'hello'` as many times as the element's value.

* Time Complexities:

  | Case        | Complexity   | Why?                                                |
  | ----------- | ------------ | --------------------------------------------------- |
  | **Best**    | **O(n)**     | If all `arr[i] = 0`, inner loop never runs.         |
  | **Average** | **O(n + k)** | Loop runs `n` times, inner runs `k` times.          |
  | **Worst**   | **O(n + k)** | All `arr[i] = large number` → inner loop dominates. |
