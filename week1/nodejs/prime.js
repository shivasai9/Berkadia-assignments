
var n=Number(process.argv[2]);
var x=0;
var prim=function(a){
    
    for(var i=2;i<a/2;i++)
    {
        if(a%i==0)
        {
         x=1;
         break;
        }
    }
    if(a==1)
    console.log('not a prime number');
    else
    {
    if(x==1)
    console.log('not a prime number');
    else
    return console.log('prime number');
    }
}
prim(n);
/*
C:\Users\shiva sai\node>node prime 11
prime number*/