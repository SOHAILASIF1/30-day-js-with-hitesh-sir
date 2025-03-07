// Activity 1  Variable Declaration


// -Task 1
// Declare a variable using `var`, assign it a number, and log the value to the console.
var num=6
// console.log(num);

// Task 2:
//  Declare a variable using `let, assign it a string, and log the value to the console.

let name="sohail"
// console.log(name);


// Activity 2 Constant Declearication

// Task 3: Declare a variable using `const` , assign it a boolean value, and log the value to the console.
const cons=true
// console.log(cons);


// ### Activity 3: Data Types
// Task 4: Create variable of different data types (number, string, boolean, object, array) and log each variable's type using the `tyreof` operator.
let number=4
let city="kunri"
let eligble=true
let car={}
let bike=[]
// console.log(typeof(number));
// console.log(typeof(city));
// console.log(typeof(eligble));
// console.log(typeof(car));
// console.log(typeof(bike));
// output
// number
// string
// boolean
// object
// object



// ### Activity 4: Reassigning variables
// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let num1=8
let num2=num
// console.log(num1);
// console.log(num2);


// ### Activity 5: Understanding `cont`
// Task 6: Try reassigning a variable declared with `const` and observe the error.

const ali=9
// ali=8
// console.log(ali);


// output
// c:\Users\Sohail\Desktop\30DAYSBYHITESHSIR\DAY-1\day1.js:56
// ali=8
//    ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (c:\Users\Sohail\Desktop\30DAYSBYHITESHSIR\DAY-1\day1.js:56:4)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.11.1



// Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let name1="Sohail"
let age=9
let eligbleToVote=false
console.log("value of name1",name1);
console.log("typeof name1",typeof(name1));
console.log("value of age",age);
console.log("typeof age",typeof(age));
console.log("value of eligibletovote",eligbleToVote);
console.log("typeof eligibletovote",typeof(eligbleToVote));
// 2. Reasignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.


