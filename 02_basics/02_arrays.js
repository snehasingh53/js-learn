const marvel_heros = ["thor", "Ironman","Spiderman"]
const dc_heros =["Superman", "flash","batman"]

//marvel_heros.push(dc_heros)   // will create another element at marvel_heros which will be array 

//console.log(marvel_heros)

const newArr=marvel_heros.concat(dc_heros)
//console.log(newArr)

//spread
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)


const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(2); // argument will be depth
console.log(real_another_arr)


console.log(Array.isArray("Sneha"))
console.log(Array.from("Sneha"))
console.log(Array.from({name:"sneha"})) // interesting will return [], will have to mention ki array keys se bnana hai ya value se 


let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3))
