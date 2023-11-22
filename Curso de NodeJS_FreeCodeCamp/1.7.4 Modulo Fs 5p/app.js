const fs = require('fs');

//Elimina un archivo
fs.unlink('main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log("Se elimino el archivo");
});