
// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let futureStudents = [];

// ------------------------------------------------------------

// 2. Declare an empty array using JS object notation to store
// student names in future.

// let futureStudents = new Array();

// -------------------------------------------------------------------

// 3. Declare and initialize a strings array.


// let stringsArray = ["apple", "banana", "orange"];



//------------------------------------------------------------------

// 4. Declare and initialize a numbers array.


// let numbersArray = [1, 2, 3, 4, 5];

// -------------------------------------------------------------------

// 5. Declare and initialize a boolean array.


// let booleanArray = [true, false, true, false];

//----------------------------------------------------------------

// 6. Declare and initialize a mixed array.

// let mixedArray = ["apple", 7, null, true];


//-------------------------------------------------------------------
// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.


// / let mobileNetworksPakistan = ["Mobilink", "Telenor", "Zong", "Ufone", "Jazz"];

//-----------------------------------------------------------------

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser 


// let educationQualificationsPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h2>Education Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// for (let i = 0; i < educationQualificationsPakistan.length; i++) {
//     document.write("<li>" + educationQualificationsPakistan[i] + "</li>");
// }
// document.write("</ul>");




//---------------------------------------------------------------------------
 //Q.NO.09
// Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)



// const topMovies2015 = [];

// topMovies2015.push("Avangers age of ultrone");
// topMovies2015.push("spectere");
// topMovies2015.push("Jerrasic world");
// topMovies2015.push("Inside out");



// document.write("<h2>Top Movies of 2015:</h2>");
// document.write("<ul>");
// for (let i = 0; i < topMovies2015.length; i++) {
//     document.write("<li>" + topMovies2015[i] + "</li>");
// }
// document.write("</ul>");
// document.write("<p>Total number of movies: " + topMovies2015.length + "</p>");





// ------------------------------------------------------------------------------------

// Q.no.10 
//10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

// const favoriteCars = ["Audi ", "volvo", "Lamborghini ","ford"]
// document.write("<p> First index of the array: "+ 0 +"</p>");
// document.write("<p> Car at first index of the array: "+favoriteCars[0] + "</p>");
// document.write("<p> Last index of the array: "+(favoriteCars.length-1) + "</p>");
// document.write("<p> Car at last index of the array: " + favoriteCars[favoriteCars.length-1]+"</p>");

//-------------------------------------------------------------------------------
// Q.No.11
// Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students




// const studentNames = ["John", "tony", "Michael"];
// const scores = [430, 380, 440]
// document.write("<h2>Student Scores and Percentages:</h2>");
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (scores[i] / 500) * 100;
//     document.write("<p>" + studentNames[i] + "'s score: " + scores[i] + " out of 500, Percentage: " + percentage.toFixed(2) + "%</p>");
// }


//---------------------------------------------------------------------------------
// Q.No.. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// ARRAYS |	JAVASCRIPT
// Page	4 of	8
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.



//  Initialize an array with color names
// let colors = ["red", "green", "blue"];
//  Display the array elements
// document.write("<h3>Original Array:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array
// let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);
//  Display the updated array 
// document.write("<h3>Array after adding color to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");
//  b. Ask the user what color he/she wants to add to the end & add that color to the end of the array
// let colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// Display the updated array 
// document.write("<h3>Array after adding color to the end:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");
//  c. Add two more color to the beginning
// colors.unshift("orange", "yellow")
//  Display the updated array 
// document.write("<h3>Array after adding two colors to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // d. Delete the first color 
// colors.shift();

//-----------------------------------------------------------------------

// // Q.NO. 13 
// Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method 



// let studentScores = [85, 72, 93, 65, 78];
// studentScores.sort(function(a, b) { return a - b;
// });console.log("Sorted student scores in ascending order:", studentScores);



//------------------------------------------------------
// Q.no.14 
// Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];





// var fruits = ["strawberry", "apple", "orange", "banana"];

// fruits.sort();

// console.log("Sorted array of fruits:", fruits);


// -------------------------------------------------


// Q.NO.20
// Declare and initialize an empty multidimensional array
// let multiDimArray = [];


//  let multiDimArray = new Array(rows);

// For example, a 3x3 array:
//  let multiDimArray = new Array(3);
// for (let i = 0; i < 3; i++) {
//     multiDimArray[i] = new Array(3);
// }



//--------------------------------------------------------------





















