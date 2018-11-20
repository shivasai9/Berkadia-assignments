var arr=process.argv.slice(2);
var dup=function(arr){
    var arr1=[],arr2=[];
    var z;
    arr1[0]=arr[0];
    for(i=0;i<arr.length;i++)
    {
        z=0;
        for(j=0;j<arr1.length;j++)
        {
            if(arr[i]==arr1[j])
            {
                z=1;
                break;
            }
        }
        if(z==0)
        arr1[arr1.length]=arr[i];
    }
    var c,n=0;
    for(i=0;i<arr1.length;i++)
    {
        c=0;
        for(j=0;j<arr.length;j++)
        {
          if(arr1[i]==arr[j])
          {
              c++;
              if(c>=2)
              {
               arr2[n]=arr1[i];
               n++;   
               break;
              }
          }
        }
    }
   console.log(arr2);
}
dup(arr);
/*
C:\Users\shiva sai\node>node duplicate 1 2 2 3 3 5 5 4 4 1 8 9 7
[ '1', '2', '3', '5', '4' ] */