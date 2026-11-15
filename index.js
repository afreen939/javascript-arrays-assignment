// Question 1: Array Access and Length

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

// a) Access the second fruit
console.log("Second Fruit:", fruits[1]);

// b) Access the last fruit
console.log("Last Fruit:", fruits[fruits.length - 1]);

// c) Print the length of the array
console.log("Array Length:", fruits.length);

// d) Modify the third element
fruits[2] = "Pineapple";
console.log("Updated Array:", fruits);



// Question 2: Understanding Array References

// Part 1: Reference Assignment

let arr1 = [10, 20, 30, 40];

// a) Assign arr1 to arr2
let arr2 = arr1;

// b) Modify the second element of arr2
arr2[1] = 99;

// c) Print both arrays
console.log("Part 1 - arr1:", arr1);
console.log("Part 1 - arr2:", arr2);

// d) Explanation
console.log("Explanation: Both variables refer to the same array in memory.");

// Part 2: Shallow Copy using slice()

let arr3 = arr1.slice();

// a) Modify the last element of arr3
arr3[arr3.length - 1] = 88;

// b) Print all arrays
console.log("Part 2 - arr1:", arr1);
console.log("Part 2 - arr2:", arr2);
console.log("Part 2 - arr3:", arr3);

// c) Explanation
console.log("Explanation: arr3 is a separate shallow copy, so modifying it does not affect arr1 or arr2.");


// Section 2 - Question 1: Basic Array Methods

let numbers = [12, 15, 20, 25, 30];

// a) Add a number using push()
numbers.push(35);
console.log("After push:", numbers);

// b) Remove the last number using pop()
numbers.pop();
console.log("After pop:", numbers);

// c) Find the position of 20 using indexOf()
console.log("Index of 20:", numbers.indexOf(20));



// Section 2 - Question 2: Working with Array Methods

let colors = ["red", "blue", "green", "yellow", "purple", "black"];

// a) Extract the middle three colors
let middleColors = colors.slice(2, 5);

console.log("Middle Three Colors:", middleColors);

// b) Check the original array
console.log("Original Array:", colors);

// Explanation
console.log("Explanation: slice() does not modify the original array. It returns a new array.");


// Section 2 - Question 3: Insert and Remove Elements

let items = ["pen", "pencil", "eraser", "scale", "sharpener"];

// a) Remove "eraser" and "scale"
items.splice(2, 2);

console.log("After Removing:", items);

// b) Insert "marker" and "ruler" at the same position
items.splice(2, 0, "marker", "ruler");

console.log("After Inserting:", items);



// Section 3 - Question 1: Replace Values in an Array

let scores = [12, 25, 37, 48, 59, 63, 77];

// a) Replace the last three values with 0
scores.fill(0, scores.length - 3);

console.log("After Replacing Last Three Values:", scores);

// b) Overwrite the entire array with "N/A"
scores.fill("N/A");

console.log("After Overwriting Entire Array:", scores);



// Section 3 - Question 2: Filtering Data from Arrays

let filterNumbers = [11, 22, 35, 42, 59, 60, 73, 88];

// a) Get numbers greater than or equal to 50
let greaterNumbers = filterNumbers.filter(num => num >= 50);

console.log("Numbers Greater Than or Equal to 50:", greaterNumbers);

// b) Function to check whether a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Get only even numbers
let evenNumbers = filterNumbers.filter(isEven);

console.log("Even Numbers:", evenNumbers);



// Section 3 - Question 3: Looping Through Nested Arrays

let cube = [
    [[1, 2, 3], [4, 5, 6]],
    [[7, 8, 9], [10, 11, 12]]
];

// Loop through nested array
for (let i = 0; i < cube.length; i++) {
    for (let j = 0; j < cube[i].length; j++) {
        for (let k = 0; k < cube[i][j].length; k++) {
            console.log(cube[i][j][k]);
        }
    }
}