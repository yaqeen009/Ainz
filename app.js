const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyParser.json());


app.get("/",(req,res)=>{
  res.send("Hello World");
});

app.post("/user", (req,res)=>{
  res.send({name: "John"})
});


app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
});



