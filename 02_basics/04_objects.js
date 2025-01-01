const tinderUser= new Object()
// or const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=true
console.log(tinderUser)


const regularUser={
    email:"some@gmail.com",
    fullname:{
      userfullname:{
        firstname:"sneha",
        lastname:"singh"
      }
    }
}

//console.log(regularUser.fullname.userfullname.lastname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

//const obj3={obj1,obj2}
// assign returns modified target object
//assign(target,sources)
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

const obj3= {...obj1,...obj2} // spread the objects
console.log(obj3)


const users =[
  {
    id:1,
    email:"s@gmail.com"
  },{

  }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


//console.log(tinderUser.hasOwnProperty(isLoggedIn))

//Destructuring
const course = {
  courseName:"JS in Hindi",
  price:"999",
  courseInstructor:"sneha"
}

const {courseInstructor : instructor} = course // now we can use instructor instead of courseInstructor
console.log(instructor)


//API - Application Programming Interface
   //json
  /* {
    "name":"ssnehasingh53@gmail.com"
   }
    */


   [
    {},
    {},
    {}
   ]