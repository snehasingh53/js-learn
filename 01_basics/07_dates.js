
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())


let myCreatedDate = new Date(2023, 0 ,23)
console.log(myCreatedDate.toDateString())

let createdDate= new Date("01-14-2003")

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))  // convert into seconds


let newDate = new Date();
console.log(newDate.getMonth()+1)


newDate.toLocaleString('default',{
    weekday: "long",
})