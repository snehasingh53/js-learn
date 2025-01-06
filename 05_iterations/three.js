//for of 

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) { 
    console.log(num);
}


const greeting =" Hello world!"
for (const greet of greeting) {
    console.log(`each char is ${greet}`)
    
}
  // Maps : object that store value in key-value pair , unique value bo duplicate values allowed
  const map = new Map()
  map.set('IN',"India")
  map.set('USA','United states of America')

  console.log(map)

 // for (const key of map) {
 for (const [key,value] of map) {     //destructure 
 console.log(key,":-",value)

  }


  const myObject={
    'game1':"NFS",
    'game2':"Spiderman"
  }

  /*
  for (const [key,value] of myObject) {
    console.log(key,":-",value)
    
  }
    */