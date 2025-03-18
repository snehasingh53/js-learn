function sayNme(myName="Sneha Singh"){ // Sneha Singh is default name here 
 console.log("My name is ",myName)
}

sayName(); // this will give undefined if default value is not set



function solve(value={age:15,wt:90,ht:190}){ // objects, functions and arrays as default value is also possible
   console.log("Hello", value)
}

solve();  // if undefined is sent as parameter then default value will be printed but if null is sent then null will be printed


function getAge(){
    return 190; 
}

function utility(name,age=getAge()){
    console.log(name," ",age)
}
utility("Sneha",21)