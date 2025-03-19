/*
Event Loop is responsible for handling asynchronous operations by continuously monitoring the Call Stack and the Task Queue

      -> Callstack
      ->Browser
      ->callBack Queue /Task Queue



   callstack me jab bhi async code aata hai to vo handover kr diya jaata hai to browser
   ex setTimeOut(sayMyName(),500) /   ispe browser timer chalega, aur ye callstcak se entry hat jaegi aur iske baad
    wali console.log("end") print hoga uspe baad jaise hi timer complete hoga vo jaega TaskQueue me and eventLoop will make sure that if callstack is empty than it will execute the TaskQueue 


  
*/