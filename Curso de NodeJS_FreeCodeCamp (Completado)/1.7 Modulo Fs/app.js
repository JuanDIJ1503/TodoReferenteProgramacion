const fs = require('fs');

/*Nos permite leer archivos
    1arg:Ubicacion del archivo a leer
    2arg:Codificación de los datos
    3arg:Función a ejecutar cuando se termine el proceso, con dos parametros, 
        1:Error si se produce,2:Contenido del archivo
*/

fs.readFile('index.html','utf-8',(err,contenido)=>{
    if(err){
        console.log(err)//Si no hay error devuelve null
    }
    console.log(contenido)
});

//Otra forma con throw
fs.readFile('index.html','utf-8',(err,contenido)=>{
    if(err){
        throw err;//Detiene la ejecución completamente y devuelve error
    }
    console.log(contenido)
});