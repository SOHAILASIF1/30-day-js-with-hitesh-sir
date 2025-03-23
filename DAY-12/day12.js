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


// **Task 3: Execution Flow Observation**

// * Construct a script that includes a `try-catch` block and a `finally` block.
// * Log messages within each block (`try`, `catch`, and `finally`) to observe the order of execution.
try {
    console.log("ho gia");
    throw new Error("custom error")
    
} catch (error) {
    console.log(error.message);
  
        
   
    
} finally{
    console.log("mashallah");

}
// **Task 5: Custom Error for Validation**

// * Create a function that validates user input (e.g., checking for an empty string).
// * If the validation fails, throw a custom error object with a descriptive message.
// * Utilize a `try-catch` block to handle the custom error and provide appropriate feedback.
function checkUser(userName,email,pass){
    if (userName==="") {
        throw new Error("Username to lihko bhai")
        
    }
    if (!email.includes("@")) {
        throw new Error("Email lihko bhai")
        
    }
    if (pass.length  < 6) {
        throw new Error("password poora lihko")
        
    }
    return "User sahi hay"

}
try {
    console.log(checkUser("username","sohailasuf123@gmail.com",12345));
} catch (error) {
    console.log(error.message);
    
}




