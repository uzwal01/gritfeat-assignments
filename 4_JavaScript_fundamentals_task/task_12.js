// ---------------------------------
// Task 12: Higher-Order Functions (without Callbacks)
// ---------------------------------

//// multiplyAll
function multiplyAll(arr, multiplier) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * multiplier);
    }
    return result;
}

console.log(multiplyAll([1,2,3], 2));   




//// sumAll
function sumAll(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

console.log(sumAll([1,2,3,4]));   
