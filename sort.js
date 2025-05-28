const numbers = [10, 3, 5, 1, 20];

// Ascending
numbers.sort((a, b) => a - b); 
console.log(numbers); // [1, 3, 5, 10, 20]

// Descending
numbers.sort((a, b) => b - a); 
console.log(numbers); // [20, 10, 5, 3, 1]
