// ---------------------------------
// Task 10: Function Scope and Closure with Examples
// ---------------------------------

function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

const add5 = outer(5); // outer function finishes execution, but x = 5 is remembered by inner function.
console.log(add5(3)); // 8
console.log(add5(10)); // 15

// ------------------------------------------------------------------------------------------------------------------------------------------
