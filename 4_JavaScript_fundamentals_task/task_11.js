// ---------------------------------
// Bonus Tasks
// ---------------------------------
// Task 11: Factorial Function with Recursion (Edge Case Handling)
// ---------------------------------


//// Recursive Factorial Function
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}

console.log(factorial(5));   // output: 120


//// With Edge Case Handling
function factorialECH(n) {
    if (typeof n != 'number' || isNaN(n)) {
        throw new Error("Input must be a valid number");
    }

    if (!Number.isInteger(n)) {
        throw new Error("Input must be an integer");
    }

    if (n < 0) {
        throw new Error("No Negative Numbers");
    }

    if (n == 0 || n == 1) {
        return 1;
    }
}

console.log(factorial(5));    // output: 120
console.log(factorial(0));    // output: 1