const fs = require('fs');

/*Cambia en nombre del archivo
    1arg: Ubicacion del archivo a cambiar
    2arg: Nombre nuevo del archivo a cambiar
    3arg: Función que recibira como parametro un error si es que lo hay
*/
fs.rename('index.html','main.html',(err)=>{
    if(err){
        try {
            throw err;
        } catch (error) {
            console.log("Ocurrio un error a la hora de cambiar el nombre del archivo");
        }
    }else{
        console.log("Nombre de archivo cambiado exitosamente");
    }
})