


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
