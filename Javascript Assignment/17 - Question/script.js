//17. Write a program which tells the number of days in a month

// Prompt the user to enter a month and year
let month = parseInt(prompt("Enter the month (1-12): "));
let year = parseInt(prompt("Enter the year: "));

// Create a new Date object for the given month and year
let date = new Date(year, month - 1, 1);

// Get the last day of the month by setting the date to the 0th day of the next month
date.setMonth(date.getMonth() + 1);
date.setDate(0);

// Retrieve the day component, which represents the number of days in the month
let days = date.getDate();

// Display the result
console.log("Number of days:", days);

