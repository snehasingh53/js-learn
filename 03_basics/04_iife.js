 // Immediately Invoked Function Expressions (IIFE)

// to prevent pollution from global scope variable
 (function chai(){ //named iife
    console.log("Database  Connected");
 })();


 ((name)=> { //unnamed iife
    console.log(`Db connected ${name}`);
 })("sneha")