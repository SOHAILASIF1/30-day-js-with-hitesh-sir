// ## Activity 1: Understanding Promises

// **Task 1:**  
// Create a promise that() resolves with a message after a 2-second timeout and log the message to the console.
let promise=new Promise((resolve,reject)=>{
    let sucess=false

    setTimeout(() => {
        if (sucess) {
            resolve("data fetch")
            
        }else{
            reject("Error happend")
        }
        
    }, 2000);

})
promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// **Task 2:**  
// Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.

// implement in task 1