const fs = require('fs');

/*Reemplaza el archivo con los datos que le pasemos*/
fs.writeFile('main.html','<h1>Hola Mundo</h1>',(err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo reemplazado exitosamente')
});