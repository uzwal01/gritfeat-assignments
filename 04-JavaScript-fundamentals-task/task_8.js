// ---------------------------------
// Task 8: Function with Multiple Parameters & Default Parameters
// ---------------------------------

function greetMultipleTimes(greetings, times = 3) {
    if (!Number.isInteger(times) || times <= 0) {
        console.log("Error: 'times' must be a positive integer");
        return;
    }

    for (let i = 0; i < times; i++) {
        console.log(greetings);
    }
}

greetMultipleTimes("Hello!");  //Default: prints 3 times
greetMultipleTimes("Welcome!", 5);  // Prints 5 times
greetMultipleTimes("Ola!", 2.5);  // Invalid input



// -----------------------------------------------------------------------------------------------
