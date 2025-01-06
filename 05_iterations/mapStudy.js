const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.map((num)=>num+10)

const newNums=myNums.map((num)=>num*10).
                     map((num)=>num+10).
                     filter((num)=>num>=40) // this is known as chaining when we can use more than one function togeter
console.log(newNums)