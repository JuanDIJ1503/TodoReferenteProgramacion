/*El modulo fs al ser asincrono no podremos predecir en que orden se ejecutaran cada metodo*/
const fs = require('fs');

console.log("Antes de leer el archivo...");
//Lee un archivo
fs.readFile('index.html','utf-8',(err,contenido)=>{
    if(err){
        throw err;
    }
    console.log(contenido)
});
console.log("Despues de leer el archivo..")


//Cambia nombre de archivo
fs.rename('index.html','main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log("Nombre de archivo cambiado")
});
console.log("DEspues de cambiar el nombre...")


//Agrega datos al final del archivo
fs.appendFile('main.html','<h2>Contenido agregado</h2>',(err)=>{
    if(err){
        throw err;
    }
    console.log("Datos agregados correctamente");
});
console.log("Despues de agregar datos...")



/*Reemplaza el archivo con los datos que le pasemos*/
fs.writeFile('main.html','<h1>Hola Mundo</h1>',(err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo reemplazado exitosamente')
});
console.log("Despues de reemplazar datos")


/*Eliminar el archivo*/
fs.unlink('main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log("Archivo eliminado correctamente")
});
console.log("DEspues de eliminar el archivo...")