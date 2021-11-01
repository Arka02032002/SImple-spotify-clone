const express=require('express');
const path = require('path');
const app= express();
const htmlPath=path.join(__dirname,'./index.html');
const port=80;

app.use('/static',express.static('./static'));

app.get('/',(req,res)=>{
    res.status(200).sendFile(htmlPath,err=>{
        if(err){
            res.status(err.status).end();
        }
        else{
            console.log(`Sent ${htmlPath}`);
        }
    });
});

app.listen(port,()=>{
    console.log(`App started at port ${port}`);
})