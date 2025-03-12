// ## Activity 1: Template Literals

// ### Task 1
// Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let myName="Sohail"
let myAge=10
let string=`my name is ${myName} and my age is ${myAge}`
console.log(string);

// ### Task 2
// Create a multi-line string using template literals and log it to the console.
let string2=`lorem jns sdjn  ${ myName} sdncj csiaifjk hbfjkkjdl bkdfskjdlk hjbkjdlssk hjbjkflkjd vdjhdjkkl jkdscsdl vd hvdjskkl sdiowp hkjdskl vdjsdkkwL DSL DSDSL DSVJDSDL JKDSL DSBKJDSLJ DKJSLA JKDSLS JDKSJLQW JDSKSWL CDSJKWC `
console.log(string2);

// ### Task 3
// Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr=[1,2,3,4]
let [first,second]=arr
console.log(first,second);



// ### Task 4
// Use object destructuring to extract the title and author from a book object and log them to the console.
let obj={
    title:"book",
    aurthor:"sohail"
}
const {title,aurthor}=obj
console.log(title,aurthor);


// ## Activity 3: Spread and Rest Operators

// ### Task 5
// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr1=[1,2,3,4]
const newArr=[...arr1,5,6,7]
console.log(arr1);
console.log(newArr);

// ### Task 6
// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(a,b,...rest){
    return a+b+rest.reduce((acc,curr)=>(acc+curr),0)
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));



// ## Activity 4: Default Parameters

// ### Task 7
// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(a,b=1){
    return a*b
}
console.log(product(3,4));
console.log(product(2));



