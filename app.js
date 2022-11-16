const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000;

app.get("/",function(req,res){
    res.send("Hello")
})

app.listen(PORT,function(req,res){
    console.log(`server started on port ${PORT}`)
})

