//------Array---------//
//--------Question 1-------//

var studentNames = [];

//-------Question 2----//

var studentNames = new Array();

//----------Question 3------//

var studentNames = ["Ali", "Ahmed", "Sana", "Sara"];

//------------Question 4-----//

var numbers = [1, 2, 3, 4, 5];

//---------Question 5--------//

var booleanValues = [true, false];

//----------Question 6------//

var mixedArray = [1, "hello", true, null, [2, 3]];

//----------Quetion 7-------//

// Declare and Initialize an array with education qualifications
const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the listed qualifications in the browser
let qualificationsList = "<h2>Education Qualifications in Pakistan:</h2><ul>";
for (let i = 0; i < qualifications.length; i++) {
    qualificationsList += "<li>" + qualifications[i] + "</li>";
}
qualificationsList += "</ul>";

document.write(qualificationsList);

//----------Question 8 -------------//

// Array to store student names
const studentNames = ["Ali", "Sara", "Ahmed"];

// Array to store scores of students
const studentScores = [430, 380, 450];

// Display the scores and percentages of students
document.write("<h2>Student Scores and Percentages:</h2>");
document.write("<ul>");
for (let i = 0; i < studentNames.length; i++) {
    const percentage = (studentScores[i] / 500) * 100;
    document.write("<li>" + studentNames[i] + " - Score: " + studentScores[i] + ", Percentage: " + percentage + "%</li>");
}
document.write("</ul>");

//-----------Question 9----------//

// Initialize an array with color names
let colors = ["Red", "Blue", "Green"];

// Display the array elements in the browser
document.write("<h2>Initial Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user for a color to add to the beginning
let colorToAddStart = prompt("Enter a color to add to the beginning of the array:");

// Add the color to the beginning of the array
colors.unshift(colorToAddStart);

// Display the updated array with the color added at the beginning
document.write("<h2>Array after adding color to the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user for a color to add to the end
let colorToAddEnd = prompt("Enter a color to add to the end of the array:");

// Add the color to the end of the array
colors.push(colorToAddEnd);

// Display the updated array with the color added at the end
document.write("<h2>Array after adding color to the end:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Add two more colors to the beginning of the array
colors.unshift("Yellow", "Purple");

// Display the updated array with two colors added to the beginning
document.write("<h2>Array after adding two more colors to the beginning:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Delete the first color in the array
colors.shift();

// Display the updated array after deleting the first color
document.write("<h2>Array after deleting the first color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Delete the last color in the array
colors.pop();

// Display the updated array after deleting the last color
document.write("<h2>Array after deleting the last color:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user for the index and color to add at that index
let indexToAdd = prompt("Enter the index where you want to add a color:");
let colorToAddIndex = prompt("Enter the color you want to add at that index:");

// Add the color at the specified index
colors.splice(indexToAdd, 0, colorToAddIndex);

// Display the updated array after adding the color at the specified index
document.write("<h2>Array after adding color at a specific index:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user for the index and number of colors to delete
let indexToDelete = prompt("Enter the index from where you want to delete color(s):");
let numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");

// Delete the specified number of colors from the specified index
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array after deleting colors from the specified index
document.write("<h2>Array after deleting color(s) from a specific index:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");


//------------------Question 10------------//

// Step 1: Create an array to store student scores
var studentSc = [88, 92, 78, 85, 95];

// Step 2: Sort the array in ascending order using the Array's sort method
studentSc.sort((a, b) => a - b);

// Step 3: Display the sorted scores
console.log("Sorted Student Scores (Ascending Order):", studentSc);

//-------------Question 11-----------//

// Step 1: Initialize an array with city names
let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Step 2: Create an empty array to store selected cities
let selectedCities = [];

// Step 3: Copy 3 array elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Step 4: Display the selected cities
console.log("Selected Cities:", selectedCities);

//------------Question 12-----------//

// Initialize the array
var arr = ["This ", " is ", " my ", " cat"];

// Create a single string from the array using the join method
var singleString = arr.join('');

// Display the single string
console.log("Single String:", singleString);

//------------Question 13----------//

// Create a new array for FIFO storage
let fifoArray = [];

// Store values one by one in FIFO order
fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");

// Access and remove values in the order they were stored (FIFO)
let firstValue = fifoArray.shift();
let secondValue = fifoArray.shift();
let thirdValue = fifoArray.shift();

// Display the values in FIFO order
console.log("First Value:", firstValue);
console.log("Second Value:", secondValue);
console.log("Third Value:", thirdValue);


//----------Question 14----------//

// Create a new array for LIFO storage
let lifoArray = [];

// Store values one by one in LIFO order
lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");

// Access and remove values in reverse order (LIFO)
let lastValue = lifoArray.pop();
let secondLastValue = lifoArray.pop();
let thirdLastValue = lifoArray.pop();

// Display the values in reverse order (LIFO)
console.log("Last Value:", lastValue);
console.log("Second Last Value:", secondLastValue);
console.log("Third Last Value:", thirdLastValue);

//---------Question 15-----------//

// Array to store phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the select menu
let selectMenu = '<select>';

// Loop through the phone manufacturers array to create options
phoneManufacturers.forEach(function(manufacturer) {
    selectMenu += '<option>' + manufacturer + '</option>';
});

// Close the select menu tag
selectMenu += '</select>';

// Display the select menu using document.write()
document.write(selectMenu);

