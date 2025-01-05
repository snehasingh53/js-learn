const user={
    username:"sneha",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)

/*
function chai(){
    console.log(this)
}
chai()
*/
//const chai =() =>{
  //  let username="sneha";
    //console.log(this);
//}


//chai();


/* basic arroa funstion
const addTwo=(num1,num2)=>{
    return num1+num2;
}

console.log(addTwo(3,4));
*/
  // implicit return 
  //const addTwo=(num1,num2) => (num1+num2); // if curly braces used then return has to be wriiten 
 const addTwo =(num1,num2) => ({username:"sneha"});
  console.log(addTwo(3,4));


 // const myArray =[2,5,3,7,9];
  //myArray.forEach(()=>())



    //Arrow functions are useful for simple callbacks and methods where the this context is not required. Normal functions are better at handling logic that requires multiple expressions, and are suitable for constructor functions and object methods.