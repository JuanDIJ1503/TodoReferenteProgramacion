const fs = require('fs');

/*Agrega datos a un archivo en especifico al final del mismo
    Si no existe el archivo crea otro con los datos que le proporcionamos
*/
fs.appendFile('main.html','<h2>Elemento nuevo</h2>',(err)=>{
    if(err){
        throw err;
    }
    console.log("El archivo se actualizo")
});