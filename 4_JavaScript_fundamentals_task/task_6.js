// ------------------------------------
// Task 6: Nested Loops for Multi-Dimensional Arrays
// ------------------------------------


//// 3x3 Multiplication Table
console.log("3x3 Multiplication Table")
for (let i = 1; i <= 3; i++) {
     let row = "";
     for (let j = 1; j <=3; j++) {
         row = row + (i * j) + " ";
     }
     console.log(row);
  }


//// Bonus - Full 12x12 Multiplication Table
console.log("12x12 Multiplication Table")
for (let i = 1; i <= 12; i++) {
     let row = "";
     for (let j = 1; j <=12; j++) {
         row = row + (i * j).toString().padStart(4) + " ";   // for consistent grid like spacing - leart from chatgpt
     }
     console.log(row);
  }