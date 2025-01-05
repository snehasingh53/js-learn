 const userEmail ="sneha.ai"
 // truthy - when u assume that string contains true value
 if(userEmail){
    console.log("Got user email")
 }
 else{
    console.log("don't have user email")
 }

/*
 falsy value : false , 0  ,-0 , BigInt 0n, null, undefined,NaN
 truthy value :  '0', 'false',' ', [],{}, function(){}
*/

if(userEmail.length ===0){
    console.log("Array is empty");
}

const emptyObj = {}
 if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
 }


 //Nullish Coalescing operator (??) : null undefined

 let val1;
 //val1 = 5??10
 //val1 = null??10  // this operator will check the safety of null operator , if value appears then we will use that otherwise null
   val = null??10??20
 
 
 console.log(val1);

 // Ternary Operator

 //conditon ? true :false

 const iceTeaPrice = 100
 icePriceTea >= 80? console.log("less than 80"): console.log("more than 80")
