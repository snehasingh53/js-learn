


/*
 function addTwoNum(number1,number2){  //parameter used for function definition
  console.log(number1+number2)
 }
  */
 function addTwoNum(number1,number2){
    let result = number1 + number2
    return result
 }
 /*
 sayMyName    -- function refernce
 sayMyName()   -- function execution
 */
 const result = addTwoNum( 3,4)  // arguments used for function calling
//console.log("Result:", result)

function loginUserMessage(username = "sam"){
    if(!username){
     console.log("Please enter a username")
    }
    else{
    return `${username} just logged in`
    }
}
console.log(loginUserMessage("sneha"))  
console.log(loginUserMessage())// if no value passed then undefined


// ... = rest and spread operator depending upon use
/*function calculateCartPrice(...num1){
 return num1
} 
console.log(calculateCartPrice(200, 400, 600, 150 )) 
*/
function calculateCartPrice(val1, val2,...num1){
    return num1
   } 
   console.log(calculateCartPrice(200, 400, 600, 150 ))


const user={
    username:"sneha",
    price:999
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price }`)
}
handleObject(user)


const myNewArray =[200,400,600,800]
function returnSecondValue(getArray){
return getArray[2]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,600,800]))