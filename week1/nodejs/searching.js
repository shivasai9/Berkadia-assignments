//searching of starting element
var arr=process.argv.slice(2);
var search=function(arr){
    var x1=1;
    for(i=1;i<arr.length;i++)
    {
        if(arr[i]==arr[0])
        x1=0;
    }
    if(x1==0)
    console.log('search element is found');
    else 
    console.log('search element is not found');
}
search(arr);

/* C:\Users\shiva sai\node>node searching 1 2 5 3 6 1
search element is found

C:\Users\shiva sai\node>node searching 1 2 5 3 6
search element is not found */