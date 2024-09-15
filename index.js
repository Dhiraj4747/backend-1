require('dotenv').config
const express = require('express');
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
   res.send("hello")
})

app.get('/login',(req,res)=>{
   res.send("<h1>hello brother")
})

app.listen(process.env.PORT,()=>{
   console.log(`app listening on port ${port}`)
})

