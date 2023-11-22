const fs = require('fs');

fs.rename('index.html','main.html',(err)=>{
    if(err){
        throw err;
    }else{
        console.log("Se cambio el nombre correctamente")
    }
});