
var a=Number(process.argv[2]);
var b=Number(process.argv[3]);


var adder=function(a,b){

    console.log(a+b);
 }
 var sub=function(a,b){
     console.log(a-b);
 }
 adder(a,b);
 sub(a,b);
/*
 C:\Users\shiva sai\node>node add_sub 2 1
3
1  */