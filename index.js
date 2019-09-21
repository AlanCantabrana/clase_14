const express=require('express');
const app=express();
const port=9000;

app.get('/',function(req,res){
    res.send("Hello World!");
})

app.get('/another-route',function(req,res){
    res.send("Hello to another route");
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
})