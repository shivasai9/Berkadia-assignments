var n1=Number(process.argv[2]);
var n=1;
var fact=function(a){
    for(i=1;i<=a;i++)
     n=n*i;
     console.log(n);
}
fact(n1);
/* 
C:\Users\shiva sai\node>node factorial 5
120 */