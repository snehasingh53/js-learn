//if 
const isUserLoggedin = true

/*if (2==="2"){    // if(true) will work but if(false) will not work 
console.log("executed")
}*/

/*
const temperature =41

if( temperature ===40){
 console.log("less than 50")
}else{
 console.log("temperature is greater than 50")
}
 */

/*
const score=200
if(score>100){
    const power="fly"  // if we use var then it will be global variable
    console.log(`User power: ${power}`)
}
*/

const balance=1000
//if(balance>500) console.log("test");  // implicit if for multiple line use , instead of ; but that's not a good practice
/* 
if(balance<500){
  console.log("less than 500")
 }else if(balance<750){
  console.log("less than 750")
 }else{
    console.log("less than 1200")
 }   
*/

const userLoggedIn = true;
const debitCard= true
const loggedInFromGoogle = false
const loggedInEmail= true

if(userLoggedIn && debitCard ){
    console.log("allow to buy")
}

if(loggedInEmail || loggedInFromGoogle){
    console.log("User Logged In ")
}

