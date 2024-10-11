

const express =require("express")
const app=express()
const PORT=8000;

app.get('/',(req,res)=>{
    res.send("hello home page......")
})

app.get('/about',(req,res)=>{
    res.send("hello about page......")
})


app.listen(PORT,()=>{
console.log(`server started prot ${PORT}`);

})