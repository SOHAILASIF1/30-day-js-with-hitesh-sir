// ## Activity 1: Array Creation and Access

// ### Task 1
// - Create an array of numbers from 1 to 5 and log the array to the console.
const arr=[1,2,3,4,5]
// console.log(arr);

// ### Task 2
// - Access the first and last elements of the array and log them to the console.
console.log(arr[0]);



// ### Task 3
// - Use the `push` method to adda new number to the end of the array and log the updated array.
const arr1=arr.push("6")
console.log(arr1);
console.log(arr);

// ### Task 4
// - Use the `pop` method to remove the last element from the array and log the updated array.
console.log(arr.pop());
console.log(arr);

// ### Task 5
// - Use the `shift` method to remove the first element from the array and log the updated array.
console.log(arr.shift());
console.log(arr);

// ### Task 6
// - Use the `unshift` method to add a new number to the beginning of the array and log the updated array.
console.log(arr.unshift("1"));
console.log(arr);


// ## Activity 3: Array Methods (Intermediate)

// ### Task 7
// - Use the `map` method to create a new array where each number is doubled and log the new array.
arr.map((el)=>el*el)
console.log(arr.map((el)=>el*el));

// ### Task 8
// - Use the `filter` method to create a new array with only even numbers and log the new array.
console.log(arr.filter((el)=>el%2===0));

// ### Task 9
// - Use the `reduce` method to calculate the sum of all numbers in the array and log the result.
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 15

// ## Activity 4: Array Iteration

// ### Task 10
// - Use a `for` loop to iterate over the array and log each element to the console.
for (const iterator of arr) {
    console.log(iterator);
    
}

// ### Task 11
// - Use the `forEach` method to iterate over the array and log each element to the console.
arr.forEach((el)=>{
    console.log(el);
})