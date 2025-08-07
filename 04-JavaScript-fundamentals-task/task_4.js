// ------------------------------------
// Task 4: Switch Statement with Complex Cases
// ------------------------------------

function getDays(dayNum) {
    let dayName;

    switch (dayNum) {
        case 1:
            dayName = "Sunday";
            break;

        case 2:
            dayName = "Monday";
            break;

        case 3:
            dayName = "Tuesday";
            break;

        case 4:
            dayName = "Wednesday";
            break;

        case 5:
            dayName = "Thursday";
            break;

        case 6:
            dayName = "Friday";
            break;

        case 7:
            dayName = "Saturday";
            break;

        default:
            dayName = "Invalid day Number. Please enter a number between 1 to 7.";
    }

    console.log(dayName);
    return dayName;
}

getDays(1);       // Sunday
getDays(8);       // Invalid
getDays(-1);      // Invalid



// ----------------------------------------------------------------------------------------------------
