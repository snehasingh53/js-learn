
/* Error is just an event that impacts or disrupt the normal flow of program 

compile time error: caught during parsing before running
runtime error : caught during ruuning of program 
*/



//compile time error 
//console.log(1;      //synatx error 


//    Runtime error

//console.log(x)  x is not defined , reference error is a type of runtype error 




//Handling:  try-catch block 

try{
    console.log("Try block starts here")
    console.log(x)// will stop as soon as it catches error 
    //a
    console.log("Try block ends here")
 
  

    //b
}catch(e){
    //define krte h , ki error ke saath ap kya krna chahte hai
    //retry logic, fallback mechanism , logging , custom error 
 console.log("your error is ",e)

}
finally{
    console.log("I will run everytime")
}
//finally block : runs everytime