/*El modulo fs al ser asincrono no podremos predecir en que orden se ejecutaran cada metodo
Ahora agregaremos Sync para que pueda ser sincrono y asi saber que es lo que va a pasar
Con los métodos sincronos ya no se acepta como parametro un función
*/
const fs = require('fs');

console.log("Antes de leer el archivo...");
//Lee un archivo
const archivo = fs.readFileSync('index.html','utf-8');
console.log(archivo)
console.log("Despues de leer el archivo..")


//Cambia nombre de archivo
fs.renameSync('index.html','main.html');

console.log("DEspues de cambiar el nombre...")


//Agrega datos al final del archivo
fs.appendFileSync('main.html','<h2>Contenido agregado</h2>');
console.log("Despues de agregar datos...")



/*Reemplaza el archivo con los datos que le pasemos*/
fs.writeFileSync('main.html','<h1>Hola Mundo</h1>');
console.log("Despues de reemplazar datos")


/*Eliminar el archivo*/
fs.unlinkSync('main.html');
console.log("DEspues de eliminar el archivo...");