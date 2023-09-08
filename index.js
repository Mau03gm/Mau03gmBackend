const express = require("express");
const cors = require("cors");

const app= express();
const port= 8081;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/ruta-prueba", (req, res) => {
    const contacto = {
      "x": "mau03",
      "instagram": "mau03._",
      "numero": "2712098996"
    };
    return res.status(200).json({
        contacto: contacto
      });
    });
  

//poner servidor a escuchar http
app.listen(port, ()=>{
    console.log("servidor node on port: ", port)
})

