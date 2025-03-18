 // object is dynamic because we can edit properties during runtime 

let obj1={
    age:21,
    wt:50,
    ht:150

}
let b= obj1 ;// this is not cloning this is reference 
// cloning: changes will not be reflected in another object
  // Spread operator ....
  let dest={...obj1}  // cloning
  console.log(dest)
  console.log(obj1)
  
  //assign method
  let des= Object.assign({},obj1) // two objects can also be cloned together 
  console.log(des)


  //iteration
  let destination={};
   for(let key in obj1){
    let newKey=key;
    let newValue = obj1[key];
    destination[newKey]= newValue;
   }


   console.log(destination)
 // garbage collector :  deallocates unused memory 