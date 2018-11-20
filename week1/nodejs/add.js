
//addition
module.exports.adder=function(a,b){

   return a+b;
}


//substraction
module.exports.sub=function(a,b){
    return `${a-b}`;
}

//prime number
var x=0;
module.exports.prime=function(a){
    for(i=2;i<a/2;i++)
    {
        if(a%i==0)
        {
         x=1;
         break;
        }
    }
    if(x==1)
    return 'not a prime number';
    else
    return 'prime number'
}

//factorial
var n=1;
module.exports.fact=function(a){
    for(i=1;i<=a;i++)
     n=n*i;
     return n;
}

//maximum
module.exports.max=function(arr){
    var large=arr[0];
    for(i=1;i<arr.length;i++)
    {
      if(arr[i]>large)
      large=arr[i];
    }
    return large;
}

//minimum
module.exports.min=function(arr){
    var small=arr[0];
    for(i=1;i<arr.length;i++)
    {
      if(arr[i]<small)
      small=arr[i];
    }
    return small;
}

//duplicate data
module.exports.dup=function(arr){
  var arr1=[],arr2=[];
  var x2=0;
  //arr1[0]=arr[0];
  for(i=0;i<arr.length;i++)
  {
    for(j=0;j<arr1.length;j++)
    {
        if(arr[i]==arr1[j])
        {
            x2=1;
            break;
        }
    }
    if(x2==0)
    arr1[arr1.length]=arr[i];
  }

  return arr1;
}

//searching
module.exports.search=function(s,arr){
    var x1=1;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==s)
        x1=0;
    }
    if(x1==0)
    return('search element is found');
    else 
    return('search element is not found');
}


//fibanousi number
module.exports.fib=function(a){
    var arr=[];
    arr[0]=0;
    arr[1]=1;
    for(i=2;i<a;i++)
    {
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[a-1];
}


//sorting
module.exports.sort1=function(arr){
    var temp;
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr.length-i-1;j++)
        {
            if(arr[i]>arr[i+1])
            {
                temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }
        }
    }
    return arr;
}