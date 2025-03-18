
//variable hoisting 
console.log(age);  // in this case sirf declaration shift hoga value nahi  isliye undefined answer hoga


var age=25;

// using let and const : not possibel will give error


// Hoisting: a process that shifts variable and function declaration to the top of their scope

/*sayMyName("Sneha Singh")

function sayMyName(finalName){
   console.log(finalName); // ye function function call ke time pe automatically pehle shift ho jayega 
}
  */

sayHello()

let sayHello= function(){
   console.log("hello")
} // function expression way will give error 


// Class hoisting


// const obj=new Human(); this will give reference error hence class hoisitng is not possible 
class Human{

}
//const obj1= new Human(); works properly 