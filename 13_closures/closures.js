/*


Closures : { function +req data or lexical scope}
A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing. This allows inner functions to maintain access to variables defined in their parent function.



*/

function init(){
    let name = "Mozilla";     
    function displayName(){
        console.log(name);
    }
    return displayName();
}
let inner=init();

inner();