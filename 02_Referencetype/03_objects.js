 // like literals or constructors
  // singleton
const mySym = Symbol("key1")
 Object.create  // constructors
  const JsUser= {   //object  literals
    name:"sneha",
    "fullname":"Sneha Singh", // cannot be accessed using .
    age:18,
    mySym :"Keyvalue",
    [mySym]:"mykey1", //used like Symbol datatype 
    location:"lucknow",
    email:"ssnehasingh@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday", "Tuesday"]
  }  // key value pair 

  console.log(JsUser.email)
  console.log(JsUser["email"])
  console.log(JsUser["fullname"])
  console.log(JsUser["mySym"])
  console.log(JsUser[mySym]) //  Symbol

//Object.freeze(JsUser) // no changes will be propogated
console.log(JsUser)

JsUser.greeting= function(){
    console.log("Hello js User")
}
JsUser.greetingTwo= function(){
  console.log(`Hello js User,${this.name}`)
}
//console.log(JsUser.greeting)  // will give undefined 
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())