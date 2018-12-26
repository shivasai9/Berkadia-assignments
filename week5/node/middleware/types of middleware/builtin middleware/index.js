/*
   there are three builtin middleware function are they are
   1.express.json()
   2.express.urlencode()
   3.express.static() 
*/

const express=require('express');
const app=express();
app.use(express.json());//builtin middleware
app.post('/api/courses',(req,res)=>{
    const course={
        id:req.body.id,
        name:req.body.name,
        dept:req.body.dept
    };
     res.send(course);
});

app.listen(3000,()=>console.log('listening on port 3000....'));