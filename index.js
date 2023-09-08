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
    const work_experience = [
        {
          "puesto": "Desarrollador en Spring Boot",
          "descripcion": "Trabajé en un proyecto de desarrollo de una aplicación web utilizando el framework Spring Boot."
        },
        {
          "puesto": "Diseñador UX/UI",
          "descripcion": "Diseñé la interfaz de usuario y la experiencia de usuario para aplicaciones móviles y web."
        },
        {
          "puesto": "Analista de Datos",
          "descripcion": "Realicé análisis de datos para informar las decisiones empresariales y optimizar las operaciones."
        },
        {
          "puesto": "Gerente de Proyectos",
          "descripcion": "Gestioné proyectos de desarrollo de software de principio a fin, asegurando la entrega a tiempo y dentro del presupuesto."
        }
      ];
    return res.status(200).json({
        contacto: contacto,
        work_experience: work_experience
      });
    });
  

//poner servidor a escuchar http
app.listen(port, ()=>{
    console.log("servidor node on port: ", port)
})

