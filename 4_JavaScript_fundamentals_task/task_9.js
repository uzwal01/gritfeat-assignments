// ---------------------------------
// Task 9: Function Expressions and Arrow Functions
// ---------------------------------

//// Traditional Function Expression
const multiply = function(a,b) {
    return a * b;
};

console.log(multiply(4,5));   // 20


//// Convert to Arrow Function
const multiplyArrow = (a,b) => {
    return a * b;
};

console.log(multiplyArrow(6,3));


//// Bonus - Log the Result Before Returning
const multiplyArrowLog = (a,b) => {
    const product = a * b;
    console.log(`Product of ${a} and ${b} is: ${product}`);
    return product;
};

multiplyArrowLog(7, 8);





// -------------------------------------------------------------------------------------------------
