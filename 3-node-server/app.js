const { response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (request,response)=>{
    response.send("hello world");
})
app.listen(PORT,()=>{
    console.log('example app listening at http://localhost:${PORT}');
});