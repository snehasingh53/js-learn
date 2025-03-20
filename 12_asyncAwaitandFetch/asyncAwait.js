/* async await ka use krke async code ko sync behaviour provide kr skte hai 
*/

/*

async function getData(){
    setTimeout(function{
        console.log("I am inside setTimeOut block")
    },3000);
}

let output=getData()
*/
// async function humesha e promise return krega 

/*
async function getData(){

    // get request --async
   let response =  await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    let data =  await response.json()
    console.log(data);
    
}


getData();
 */

  const myHeaders = new Headers();

  myHeaders.append("Content-Type","application/json");
  const url = "https://jsonplaceholder.typicode.com/posts";
  const options={
    method: "POST",
    body: JSON.stringify({username:"Sneha Singh"}),
    headers:myHeaders,
  };

 async function getData(){
    const response= await fetch(url);
    let data = await response.json();
    console.log("Get data", data)
 }

  async function postData(){
    const response = await fetch(url,options)
    let data = await response.json();
    console.log("Post data", data)
  }

 

 async function processData(){
 await postData();
 await getData();
  }


//scenario :
//prepare url   or endpoint ->synchronous 
  // await -?  //fetch data  -> network call ->async
//process data -> sync






