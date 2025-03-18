 //code 1 
/*
 const t1=performance.now()
for(let i=1;i<=100;i++){
    let para= document.createElement("p");
    para.textContent="This is para";
    document.body.appendChild(para)
}  //performance.Now() : will give timestamps , tbeg-bend= time that function is taking

const t2= performance.now()
console.log("Total time take by code 1",(t2-t1));
*/
 //code 2

/*
 const t3=performance.now()
 let myDiv=document.createElement("div")
 for(let j=0;j<=100;j++){
    let para= document.createElement("p")
    para.textContent="This is para ";
    myDiv.appendChild(para)
 }

 const t4= performance.now()

 console.log("Time taken by code 2 ", (t4-t3))
*/

 /*Reflow: process of calculating position , dimension of elent that u want to render on your page 
        -> takes times , intensive task 


*/
/*
 Repaint : process of display content or element pixel by pixel
           faster than reflow 
 */





/* DocumentFragement: lightweght document object 
  -> on appending element na to ye reflow krta hai na repaint krta to better performance deta hai 




  */
 //best code


 let t5= performance.now()
 let fragment = document.createDocumentFragment();

 for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent="this is para "+i
    // no reflow and repaint for the below line 
    fragment.appendChild(para)
 }
 // This line will take 1 reflow and 1 repaint 
 document.body.appendChild(fragment)

 let t6= performance.now()
 console.log(t6-t5)