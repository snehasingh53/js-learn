// accumaltor ek khali variable diya hota hai 

const myNums=[1,2,3]

/*
const myTotal=myNums.reduce(function (acc,currVal){
    console.log(`acc:${acc}`)
    console.log(`currVal:${currVal}`)

    return acc+currVal
    },    0 // initial value for acc 
)
    */
   const myTotal= myNums.reduce((acc,currVal)=>acc+currVal,0)
console.log(myTotal)



const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:999
    },
    {
        itemName:"data science course",
        price:12999
    }
]

const pricePay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(pricePay)