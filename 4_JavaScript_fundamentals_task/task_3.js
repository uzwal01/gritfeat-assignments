// ------------------------------------
// Control Flow Statements Tasks
// ------------------------------------
// Task 3: If...Else with Logical Operators
// ------------------------------------

function checkNum(num) {
    if (num > 0) {
        console.log(`${num} is positive`);
    }
    else if (num < 0) {
        console.log(`${num} is negative`);
    }
    else {
        console.log(`${num} is zero`);
    }

// Check Divisibility by both 2 and 3
    if (num%2 == 0 && num%3 == 0) {
        console.log(`${num} is divisible by 2 and 3`);
    }
    else {
        console.log(`${num} is not divisible by 2 and 3`);
    }
}

checkNum(6);      // positive, divisible by both 2 and 3
checkNum(-9);     // negative, not divisible by both 2 and 3
checkNum(0);  // zero, divisible by both



// Multiples of Array
function checkMultiples(num, arr) {
    for(let i=0; i<arr.length; i++) {
        if(num % arr[i] == 0) {
            console.log(`${num} is multiple of ${arr[i]}`);
            return true;
        }
    }
    console.log(`${num} is not a multiple of any in [${arr}]`);
    return false;
}

checkMultiples(10, [2,3,5]);
checkMultiples(13, [4,6,8]);

// ---------------------------------------------------------------------------------------









