/* 
A Promise in JavaScript represents a placeholder for a future value. It is used to handle asynchronous operations more cleanly than callbacks.
A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
This lets asynchronous methods return synchronous methods 

It has three states:

Pending → The initial state, the operation is ongoing.
Fulfilled → The operation was successful.
Rejected → The operation failed.

syntax:
    new Promise((resolve,reject)=>{
        })




*/ 

/*
let firstPromise= new Promise((resolve,reject)=>{
    console.log("Hi Sneha")  // synchronous code 
    resolve(1101) // if we don't pass resolve or reject it will give pending
    // reject(new Error("internal server error "))
})
*/

let firstPromise= new Promise((resolve,reject)=>{
    function sayMyName(){
        console.log("My Name is Sneha Singh")
    }
    setTimeout(sayMyName,15000);
    resolve(1) ;
})


/* promise ---> fulfilled---> then ()
        |
         -------rejected --->catch()



*/

let promise1= new Promise((resolve,reject)=>{
      let success=true;
      if(success){
        resolve("promise fulfilled")
      }
      else{
        reject("promise rejected")
      }
})

promise1.then((message)=>{
    console.log("then ka message is "+message);
}).catch((error)=>{
    console.log("Error:"+error);
})   // multiple then blocks can be added --> called chaining promises 
.finally((message)=>{
    console.log("will work no matter what")
})
// 
//setTimeOut(resolve,1000,"first")  can also be done 


//Promise.all(promise1,promise2,promise3) // create new promise jo tab resolve mark hoga jab iske andar ke sare promise resolve ho jae 






