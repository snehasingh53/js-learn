const name = "sneha"
const repoCount = 50 

//console.log(name+repoCount+"Value")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)


const gameName = new String("Anjali  Singh")

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); // does not change the original value of gameName
console.log(gameName.charAt(5));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-13,4) // negative no can also be used
console.log(anotherString);


const newStringOne = "            sneha          "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim removes unnecessary space 


const url ="https://sneha.com/sneha%20singh"
console.log(url.replace('%20','-'))


console.log(url.includes('sneha'))

console.log(gameName.split(' '))