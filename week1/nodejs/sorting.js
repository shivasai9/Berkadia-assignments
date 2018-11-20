var a=process.argv.slice(2);
var sort1=function(a,b){
    return a-b;
     }
console.log(a.sort(sort1));

/* C:\Users\shiva sai\node>node sorting 1 3 2 6 5 8 4
[ '1', '2', '3', '4', '5', '6', '8' ] */