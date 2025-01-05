// var c =30
 let a =300
 if(true){
    let a = 10
    const b = 20 
   
 }
 console.log(a);  
 //console.log(b);  error
 //console.log(c);



 function one(){
    const username="sneha"

    function two(){
        const website ="youtube"
        console.log(username)
    }
   // console.log(website)

    two()
 }
 //one()

if(true){
    const username = "sneha"
    if(username=="sneha"){
        const website = "youtube"
        console.log(username+website)
    }
    //console.log(website)
}

//console.log(username);

// +++++++++++++++++++++++++ interesting++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(addone(5))  // works correctly 
function addone(num){
    return num+1
}


addTwo(5)  // not allowed  for this syntax
const addTwo = function(num){
    return  num+2
}
