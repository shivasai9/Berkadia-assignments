const fs=require('fs');
const Joi=require('joi');
const express=require('express');
const app=express();
app.use(express.json());


app.get('/api/courses/',(req,res)=>{
    var data =fs.readFileSync('test.json','utf-8');
    if(data==[])
    res.status(404).send('the courses was not available');
    else{  
    res.send(data);
    }
    });

    
app.post('/api/courses',(req,res)=>{
    
    const result=valiidate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details[0].message);
    }
 
    const course={
        id:req.body.id,
        name:req.body.name,
        dept:req.body.dept
    };
     data =fs.readFileSync('test.json','utf-8');
    data1=JSON.parse(data);
    console.log(data1.push(course));
     fs.writeFileSync('test.json',JSON.stringify(data1,null,2));
     res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{
    var data =fs.readFileSync('test.json','utf-8');
    data1=JSON.parse(data);
 var course=data1.find(c=>c.id===parseInt(req.params.id));
 if(!course)
  res.status(404).send('the entered id was not present in the courses')
  const result=valiidate(req.body);
  if(result.error){
    return res.status(400).send(result.error.details[0].message);
}
 for(var i=0;i<data1.length;i++)
 {       
     if(data1[i].id===course.id)
     {
         data1[i]=req.body;
         break;
     }    
 }
    fs.writeFileSync('test.json',JSON.stringify(data1,null,2));
    res.send(course);
})

app.delete('/api/courses/:id',(req,res)=>{
    
    console.log(req.params.id);
    var data =fs.readFileSync('test.json','utf-8');
    data1=JSON.parse(data);
 var course=data1.find(c=>c.id===parseInt(req.params.id));
 if(!course)
  res.status(404).send('the entered id was not present in the courses')
 for(var i=0;i<data1.length;i++)
 {       
     if(data1[i].id===course.id)
     {
         data1.splice(i,1);
         break;
     }
 }
    fs.writeFileSync('test.json',JSON.stringify(data1,null,2));
    res.send(course);
})
function valiidate(course){
    const schema={
        id:Joi.required(),
        name:Joi.string().min(3).required(),
        dept:Joi.string().required()
    };
    //console.log(Joi.validate(course,schema));
    return Joi.validate(course,schema);
}

app.listen(3000,()=>console.log('listening on port 3000....'));
