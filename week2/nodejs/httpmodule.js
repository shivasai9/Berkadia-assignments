/*  what is http modle???
     http module is used for network applications. i.e we can create web server that listens web requests.
     by using this http module we can create back end servers for client applications like web applications
     we bulid on angular. 
*/ 

//implementation of http module
 
var http=require('http')
var server =http.createServer((request,response)=>{
    if(request.url==='/')
    {
        response.write("http module is implemented");
        response.end();
    }
});
server.listen(3000);
console.log("listening at port 3000.....")
/*
C:\Users\shiva sai\node\assignment2>node httpmodule
listening at port 3000.....

on browser at port 3000
http module is implemented

*/