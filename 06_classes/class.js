/*
 
clsass {
  block1: States/Property  age:13, weight:80
  block2: Behavior/Functionality   walking(), running() 

  }



*/

class Human{
    //properties
    age;  // by default public 
    #wt=50;  //private
    ht=150;

constructor(newAge,newHeight, newWt){
    this.age=newAge;
    this.ht=newHeight;
    this.#wt= newWt;
}
    //behaviour 
    walking(){
        console.log("I am Walking", this.#wt)
    } // can also be made priate just by adding #
    running(){
        console.log("I am running");
    }
    get FetchWeighth(){
        return this.#wt;
    }
    set modifyWeight( val){
        this.#wt=val;
        
    } // bot wil wor propely even if we don't use keyword get and set , but using it give semantic clearity
}
let obj1= new Human()
let obj - new Human(50,190); //with constructor
console.log(obj1.age)
//console.log(obj1.wt) // not possible because wt is private
console.log(obj1.walking())

// have to use getter and setter to use private value 

