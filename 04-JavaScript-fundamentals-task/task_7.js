// ---------------------------------
// Functions Tasks
// ---------------------------------
// Task 7: Function Declaration, Parameters, and Return Values
// ---------------------------------

function sumAndAverage(num) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] > 10) {
            sum = sum + num[i];
            count++;
        }
    }

    let average = 0;
    if (count > 0) {
        average = sum / count;
    }
    else {
        average = 0;
    }

    return {
        sum: sum,
        average: average.toFixed(2)  // rounded to 2 decimal placess
    };
}

const numArr = [5, 12, 8, 25, 10, 17, 3];
const result = sumAndAverage(numArr);
console.log("Sum of numbers > 10:", result.sum);
console.log("Average of numbers > 10:", result.average);



// -------------------------------------------------------------------------------------------------









