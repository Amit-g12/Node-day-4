const express = require("express");
const pass = require("./route/pass")
const app = express();
app.use(express.json());
app.use('/pass',pass)

app.get('/',(req,res)=>{
    res.send("working");
    console.log(req);
})

app.listen(5000,()=>{
    console.log("Working on port 5000");
})