
 // in Js arrays are resizable and mix of different type of data 

const myArr=[ 0,1,2]
console.log(myArr[0]) // method 1 
 // array creates shallow copies 

 const Heroes =["shaktiman ", "naagraj"]
 const myArr2 = new Array(1,2,3,4)
 console.log(myArr2.length) 

 // Array methods 
 myArr.push(3)
 myArr.push(4)

 console.log(myArr);
 
 myArr.pop()
 console.log(myArr)
 //unshift adds value to start
 myArr.unshift(0)
 console.log(myArr)
 myArr.unshift(9)
 console.log(myArr)

 //shift
 myArr.shift()
 myArr.shift()
 console.log(myArr)

 console.log(myArr.includes(9))
 console.log(myArr.indexOf(9))  // not exist 
 console.log(myArr.indexOf(2))


 const newArr = myArr.join()  // assigns value to myArr to newArr but type is strings

 console.log(myArr)
 console.log(newArr)

 console.log(typeof newArr)

 //slice , Splice
 console.log("A " , myArr)

 const myn1 = myArr.slice(1,3)
 console.log(myn1)


 const myn2 = myArr.splice(1,3)
 console.log(myn2)
 console.log("B" , myArr)
 // splice portion is removes and manupilates the original array 
 