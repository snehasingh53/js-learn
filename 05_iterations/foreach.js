const coding=["js","ruby",'java',"python","cpp"]
//higher order loops in array

/*
coding.forEach(function (val){ // callback function has no name
  console.log(val)
})
  */


/*   Arrow function
 coding.forEach((val)=>{
  console.log(val)
 })
  */

/*
 function printMe(item){
    console.log(item);

 }

 coding.forEach(printMe)
 */

/*
 coding.forEach((item, index,arr)=>{
   console.log(item,index,arr)
 })
   */

 const myCoding=[
    {
    languageName:"javascript",
    langugaeFileName:"js"
 },{
    languageName:"java",
    langugaeFileName:'java'
 },
 
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})