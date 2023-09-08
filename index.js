const express = require("express");
const cors = require("cors");

const app= express();
const port= 8081;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/ruta-prueba", (req,res)=>{
    return res.status(200).json({
        "hola": "jeje hola",
        
    })
})

//poner servidor a escuchar http
app.listen(port, ()=>{
    console.log("servidor node on port: ", port)
})