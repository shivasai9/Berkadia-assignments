/*
  setTimeout, setTimeinterval,setimmediate?????

    setTimeout:
      if we want to run a piece of code after certain amount of time then we use this setTimeout function.

     syntax:
     let varaiable=setTimeout(function,time);

     here the function holds the code which we want to run.
     here the the time is in milliseconds is the delay after which we need to run the code which is present 
     in the function.
     if we set a Timeout before that Timeout if we want to execute the code then cancel it by using timeout
     variable

     setinterval:
       it is similar to setTimeout but the difference is setTimeout runs only once but setinterval repeats
       the function executions at regular intervals. 

       syntax:
       let variable=setinterval(function,time);

     here the function holds the code which we want to run.
     here the the time is in milliseconds is the delay after which we need to run the code which is present 
     in the function.
     here we can cancel the interval by using variable.
     clearinterval(variable);
     by using the above statement we can cancel the setinterval function.

     setImmediate:
        it is similar to settimeout function with 0 milli seconds delay. 
*/

var timeout=setTimeout(function(){
console.log("5 seconds is completed.....")
},5000)

/*
here the output will be displayed after 5 seconds.
C:\Users\shiva sai\node\assignment 3>node settimeout,setinterval
5 seconds is completed.....*/

var c=0;
var timeout=setInterval(function(){
    if(c<5)
    {
    console.log("5 seconds is completed.....")
    c+=1;
    }
    else
    clearInterval(timeout);
    },5000)

 /*   
C:\Users\shiva sai\node\assignment 3>node settimeout,setinterval
5 seconds is completed.....
5 seconds is completed.....
5 seconds is completed.....
5 seconds is completed.....
5 seconds is completed.....
*/