// ## Activity 1: Basic Error Handling with Try-Catch

// **Task 1: Intentional Error Throwing**

// * Create a function that throws an error with an informative message.
// * Wrap the function call in a `try-catch` block to catch the error and log an appropriate message to the console.

function login(userName){
    if (userName !=="sohail") {
        throw new Error("user name is wrong");
        
    }
    return "login ho gia bc"
}                                                                   
try {
    console.log(login("sohail"));
} catch (error) {
    console.log(error.message);
    
}
// **Task 2: Division by Zero Check**

// * Design a function that divides two numbers.
// * Within the function, check for division by zero and throw an error if encountered.
// * Use a `try-catch` block to handle the potential error and provide a meaningful message.

function divide(num1,num2){
    if (num2 === 0) {
        throw new Error("denominator mai zero ho to nahn divide ho sakta")
        
    }
    return num1/num2

}
try {
    console.log(divide(12,3));
    console.log(divide(12,0));

    
} catch (error) {
    console.log(error.message);
    
}




