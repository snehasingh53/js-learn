 // Primitive


 // 7 types : String , Number , Boolean , null , undefined, Symbol, BigInt
 

 const score = 200
 const scoreValue = 10.3


 const isLoggedIn = false
 const outsideTemp = null 
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol("123")
 
 console.log(id=== anotherId);

 const bigNumber = 23454678456n // BigInt
 // Reference Type (Non Primitive )

 // Array , Objects, Functions
 const heros =["shaktiman", "naagraj ","doga"]
let myObj= {
    name:"sneha",
    age:21,
}

 const myFunction = function(){
   console.log("Hello World")
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack memory  { Primitive} , Heap memory  {Non-Primitive}

let myYoutubename ="ssnehasinghdotcom"

let anothername = myYoutubename

anothername= "chaiaurcode"

console.log(anothername)
console.log(myYoutubename)


let userOne = {
  email:"user@google.com",
  upi:"user@ybl"
}
let userTwo = userOne

userTwo.email = "ssnehasingh53@gmail.com"


console.log(userOne)
console.log(userTwo)