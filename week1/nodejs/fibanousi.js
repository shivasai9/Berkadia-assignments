
var n=Number(process.argv[2]);
var fib=function(a){
    var arr=[];
    arr[0]=0;
    arr[1]=1;
    for(i=2;i<a;i++)
    {
        arr[i]=arr[i-1]+arr[i-2];
    }
    console.log(arr[a-1]);
}
fib(n);

/* C:\Users\shiva sai\node>node fibanousi 5
3 */ 