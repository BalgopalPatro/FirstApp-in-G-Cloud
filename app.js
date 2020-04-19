const express = require('express');


const app = express();

const PORT = process.env.PORT || 8000 ; 

app.get('/',(req,res)=>{
    console.log(process.env.PORT);
    res.send("<h1>I am N Balgopal Patro</h1>")
})

app.listen(PORT,()=>{
    console.log(`Started at ${PORT}`)
});