
var arr=process.argv.slice(2);
var max=function(arr){
    var large=arr[0];
    for(i=1;i<arr.length;i++)
    {
      if(arr[i]>large)
      large=arr[i];
    }
    console.log('maximum element is '+large);
}
var min=function(arr){
    var small=arr[0];
    for(i=1;i<arr.length;i++)
    {
      if(arr[i]<small)
      small=arr[i];
    }
     console.log('minimum element is '+small);
}
max(arr);
min(arr);

/* C:\Users\shiva sai\node>node max_min 1 2 5 3 6
maximum element is 6
minimum element is 1 */