// --------------------------------------
////////// Task 2: Data Type Coercion
// --------------------------------------

// Different Data Types Example
let str = "Hello"                                   
let num = 42                                        
let bool = true                                    
let obj = { name: "Ujjwal" }                        
let undef                                           
let nul = null                                      
let sym = Symbol("id")                              
let big = 1111112222222333333334333333542323423n    


// Checking Typeof
console.log("Type of str:", typeof str);            // String
console.log("Type of num:", typeof num);            // Number
console.log("Type of bool:", typeof bool);          // Boolean
console.log("Type of obj:", typeof obj);            // Object
console.log("Type of undef:", typeof undef);        // Undefined
console.log("Type of nul:", typeof nul);            // Null
console.log("Type of sym:", typeof sym);            // Symbol
console.log("Type of big:", typeof big);            // BigInt


// NaN handling
let notNum = NaN
console.log("NaN + 5 =", notNum + 5);                // NaN
console.log("NaN + 'string' =", notNum + 'string')   // NaNstring
console.log("typeof NaN =", typeof notNum);          // number

// Type Coercion Examples
console.log("'5' + 3 =", '5' + 3);                // "53" (string)
console.log("true + 2 =", true + 2);              // 3
console.log("false + 10 =", false + 10);          // 10
console.log("'10' - 2 =", '10' - 2);              // 8 (number, not "102")
console.log("null + 1 =", null + 1);              // 1
console.log("undefined + 1 =", undefined + 1);    // NaN


// ---------------------------------------------------------------------------------------