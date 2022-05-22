const express = require("express")

const app = express();

app.get("/" , (req,res) =>{
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/js" , express.static(__dirname + "/js"));

app.listen(8000 , () =>{
    console.log("Server");
})
