const express = require("express")
const path=require("path")
const app = express()
const PORT = 2929

// app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))


app.get("/", (req, res) => {
    //   res.end("Namaste Node");
    res.sendFile(path.join(__dirname,"public","index.html"))
    });
    
app.listen(PORT,(res,req)=>{
    console.log("server started");
    
})