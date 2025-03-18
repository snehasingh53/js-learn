

/*

 variable Scoping: -> Global
                   -> block
                   -> function
*/

var age=15; // global scope


/*
function sayHello(){
    var name="Earth";  // function scoped
    console.log("Hello Duniya")
}
console.log(name); // will give not defined
sayHello();

{
    var height=180; // var is not bloack scope , but let and const would give error 
}

console.log(height)
*/

// Temporal Dead Zone :  

console.log(marks);
let marks=100;   //same for const , this is Temporal Zone means that marks exist but because let and const does not allow hositing accesing its value is not possible 
