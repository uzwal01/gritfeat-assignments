// ------------------------------------
// Task 5: Loops with Break, Continue, and Nested Loops
// ------------------------------------


// Print number from 1 to 20 - Loop with continue and break

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        continue;  //skip numbers divisible by 3
    }

    if (i % 5 == 0) {
        console.log(`${i} is divisible by 5. So Stop here!`);
        break;  //stop when number is divisible by 5
    }

    console.log(i);  // Print if not skipped or stopped
}



//// Bonus - Sum of Even Numbers (1 to 100)

let sum = 0;
 for(i=1; i<=100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
 }
 console.log("Sum of even numbers between 1 to 100 is:", sum);



 //// Challenge - Print Pattern

 for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = i; j >= 1; j--) {
        line = line + j + " ";
    }
    console.log(line);
 }


// ---------------------------------------------------------------------------------------
