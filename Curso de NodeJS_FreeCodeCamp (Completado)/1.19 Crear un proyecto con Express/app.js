const express = require('express');
/*Retorna una aplicación de Express que es un función*/
const app = express();
const {infoCursos} = require('./datos/cursos.js');
const routerMatematicas = require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js');

//Routers
app.use("/api/cursos/programacion",routerProgramacion);//Asignamos la ruta a la variable
app.use("/api/cursos/matematicas",routerMatematicas);


//Routing
/*Se ejecuta cuando en la aplicación se realize una acción GET*/
app.get('/',(req,res)=>{
    res.send("Mi primer servidor con Express. Cursos 💻")
});

app.get('/api/cursos',(req,res)=>{
    res.send(JSON.stringify(infoCursos));
});
/*
    process.env.PORT => Variable de entorno que asigna automaticamente un puerto a la aplicación.
                        Este puerto lo asigna el proveedor de servicios
*/
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})
