const express = require('express');
const routerProgramacion = express.Router();//Crea una variable capaz de almacenar una rutaç
const {programacion} = require('../datos/cursos.js').infoCursos;
routerProgramacion.use(express.json());//Es un middleware que analiza los cuerpos de las solicitudes

//Para utiliar el router reemplazamos el app por la variable que almacena las rutas
routerProgramacion.get('/',(req,res)=>{//Como utilizamos la misma ruta almacenado en la variable de coloca solo /
    res.json(programacion);
});

/*Los dos puntos (:) nos indican que es un parametro de ruta*/
routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;//Captura el parametro pasado
    const resultado = programacion.filter(cursos => cursos.lenguaje === lenguaje);

    if(resultado.length === 0){
        return res.status(404).send(`No se encontraron cursos de: ${lenguaje}.`);
    }
    
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultado.sort((a,b) => b.vistas - a.vistas)));//Ordena nuestro array con respecto a las vistas de forma descendente
    }

    res.json(resultado);
});

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje;//Captura un parametro de nuestra URL en este caso el lenguaje
    const nivel = req.params.nivel;

    const resultado = programacion.filter(cursos => cursos.lenguaje === lenguaje && cursos.nivel === nivel);

    if(resultado.length === 0){
        return res.status(204).send(`No se encontraron cursos de ${lenguaje} con un nivel ${nivel}`);//El 204 signfica que la respuesta a sido exitosa pero no se encuentro ningun recurso asociado
        //return res.status(404).end();
    }
    res.json(resultado);
});

//Agrega datos
routerProgramacion.post('/',(req,res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);//Agregamos al objeto nuevo a programaciòn
    res.json(programacion);
});

//Actualiza datos
routerProgramacion.put('/:id',(req,res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);//Retorna -1 si no encuentra el indice

    if(indice >=0){
        programacion[indice] = cursoActualizado;
    }else{
        res.status(404);
    }

    res.json(programacion);
});

//Actualiza solo propiedades de los datos
routerProgramacion.patch('/:id',(req,res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        const cursoAActualizar = programacion[indice];
        Object.assign(cursoAActualizar,infoActualizada);//En el primer argumento se coloca el elemento que queremos modificar y en el 2do se coloca las propiedades cambiadas
    }
    res.json(programacion);
});

//Elimina un elemento
routerProgramacion.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion.splice(indice,1)//Elimina un elemento apartir del indice seleccionado
    }
    res.json(programacion);
});

module.exports = routerProgramacion;