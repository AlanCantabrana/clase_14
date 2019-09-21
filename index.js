const express=require('express');
const app=express();
const port=9000;

app.get('/',function(req,res){
    res.send("Hello World!");
})

app.get('/get-route',function(req,res){
    res.send("Contestando una peticion por Get");
})

app.post('/post-route', function(req,res){
    res.send("Contestando una peticion por Post")
})

app.put('/put-route', function(req,res){
    res.send("Contestando una peticion por Put")
})

app.delete('/delete-route', function(req,res){
    res.send("Contestando una peticion por Delete")
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
})
