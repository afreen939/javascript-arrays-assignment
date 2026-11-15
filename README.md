# JavaScript Arrays Assignment

## About This Assignment

**Topic:** JavaScript Arrays & Array Methods

**Objective:** To strengthen understanding of arrays in JavaScript, including indexing, array methods, shallow copy behavior, nested arrays, filtering, and logical reasoning with array operations.

## Topics Covered

- Array creation, indexing, and length
- Array references and shallow copies
- `slice()` and `splice()`
- `push()`, `pop()`, and `indexOf()`
- `fill()` method
- `filter()` method
- Even number checking
- Nested arrays and nested loops

---

## Section 1 – Array Basics

### Question 1: Array Access and Length

Created an array of five fruits and performed the following operations:
- Accessed the second fruit using its index.
- Accessed the last fruit using array length.
- Printed the array length.
- Modified the third element.

**Output:**
```text
Second Fruit: Mango
Last Fruit: Grapes
Array Length: 5
Updated Array: [ 'Apple', 'Mango', 'Pineapple', 'Orange', 'Grapes' ]
```

### Question 2: Understanding Array References

**Part 1 – Reference Assignment**

Assigned `arr1` to `arr2` and modified the second element through `arr2`.

**Output:**
```text
arr1: [ 10, 99, 30, 40 ]
arr2: [ 10, 99, 30, 40 ]
```

**Explanation:** Both variables refer to the same array in memory. Therefore, changes made through one variable are reflected in the other.

**Part 2 – Shallow Copy Using slice()**

Created `arr3` using `arr1.slice()` and changed its last element.

**Output:**
```text
arr1: [ 10, 99, 30, 40 ]
arr2: [ 10, 99, 30, 40 ]
arr3: [ 10, 99, 30, 88 ]
```

**Explanation:** `slice()` creates a new shallow copy. Changes to this new array do not affect the original array when modifying primitive elements.

---

## Section 2 – Array Methods

### Question 1: Basic Array Methods

Used `push()` to add an element, `pop()` to remove the last element, and `indexOf()` to find the position of 20.

**Output:**
```text
After push: [ 12, 15, 20, 25, 30, 35 ]
After pop: [ 12, 15, 20, 25, 30 ]
Index of 20: 2
```

### Question 2: Working with Array Methods

Used `slice(2, 5)` to extract the middle three colors.

**Output:**
```text
Middle Three Colors: [ 'green', 'yellow', 'purple' ]
Original Array: [ 'red', 'blue', 'green', 'yellow', 'purple', 'black' ]
```

**Explanation:** The `slice()` method returns a new array without modifying the original array.

### Question 3: Insert and Remove Elements

Used `splice()` to remove `"eraser"` and `"scale"` and insert `"marker"` and `"ruler"` at the same position.

**Output:**
```text
After Removing: [ 'pen', 'pencil', 'sharpener' ]
After Inserting: [ 'pen', 'pencil', 'marker', 'ruler', 'sharpener' ]
```

---

## Section 3 – Advanced Array Operations

### Question 1: Replace Values in an Array

Used the `fill()` method to replace the last three values with `0`, then overwrite the entire array with `"N/A"`.

**Output:**
```text
After Replacing Last Three Values: [ 12, 25, 37, 48, 0, 0, 0 ]
After Overwriting Entire Array: [ 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', 'N/A' ]
```

### Question 2: Filtering Data from Arrays

Used `filter()` to:
- Get numbers greater than or equal to 50.
- Get even numbers using a separate `isEven()` function.

**Output:**
```text
Numbers Greater Than or Equal to 50: [ 59, 60, 73, 88 ]
Even Numbers: [ 22, 42, 60, 88 ]
```

### Question 3: Looping Through Nested Arrays

Used three nested `for` loops to access and print every value from a three-dimensional array.

**Output:**
```text
1
2
3
4
5
6
7
8
9
10
11
12
```

---

## Key Learnings

Through this assignment, I practised:

1. Creating arrays and accessing elements using indexes.
2. Understanding array references and shallow copying.
3. Adding, removing, and replacing array elements.
4. Using JavaScript array methods such as `push()`, `pop()`, `slice()`, `splice()`, `indexOf()`, and `fill()`.
5. Filtering array elements using conditions.
6. Writing reusable functions for even number checking.
7. Traversing nested arrays using nested loops.

## Technologies and Tools Used

- JavaScript
- Node.js
- Visual Studio Code
- Git and GitHub

## Project Structure

```text
JavaScript-Arrays-Assignment/
│
├── index.js
└── README.md
```

## GitHub Repository

GitHub Profile: https://github.com/afreen939
