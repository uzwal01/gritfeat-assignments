// --------------------------------------
// Task 1: Variable Declaration & Scope
// --------------------------------------

// Global Scope Declaration
console.log("Global Scope Variables")

var globalVar = "variable for var (global scope)";
let globalLet = "variable for let (global scope)";
const globalConst = "variable for const (global scope)";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);



// Block Scope Declaration
console.log("Block Scope Variables")

{
  var blockVar = "variable for var (block scope)";
  let blockLet = "variable for let (block scope)";
  const blockConst = "variable for const (block scope)";

  console.log(blockVar);
  console.log(blockLet);
  console.log(blockConst);
}

console.log(blockVar);  // still accessible
console.log(typeof blockLet);  // Reference Error
console.log(typeof blockConst);  // Reference Error



// Reassignment and Redeclaration Example
let name = "Ujjwal"
name = "duwal"  // Redeclaration allowed.

const pi = 3.14
pi = 3.1416  // TypeError: Redeclaration not allowed.

var a = 10
var a = 20  // For 'var', Redeclaration is allowed.

let b = 5
let b = 6  // Syntax Error - For 'let', Redeclaration not allowed. 

const c = "constant"
const c = "new"  // Syntax Error - Redeclaration not allowed.



// Variable Hoisting Demonstration
function hoistingDemo() {
    console.log(x); // undefined
    // console.log(y); // Reference Error: Cannot access 'y' before initialization
    // console.log(z); // Reference Error: Cannot access 'z' before initialization

    var x = 5;
    let y = 10;
    const z = 15;

    console.log(x);  // 5
    console.log(y);  // 10
    console.log(z);  // 15
}

hoistingDemo(); //function call


//-----------------------------------------------------------------------------------------

