
function aprendiendoTema(tema){
    console.log(`El tema que estoy aprendiendo es: ${tema}`);
};
/*El primer argumento es la función
El segundo argumento es el tiempo de retraso en milisegundos
El tercer o más argumentos son los argumentos que le pasamos a la función
*/
setTimeout(aprendiendoTema,4000,'Node.js por fin');


function persona(nombre,edad){
    console.log(`Soy ${nombre} y tengo ${edad}`);
}

setTimeout(persona,3000,"Juan",14);

function sumar(a,b){
    console.log(a+b);
}
setTimeout(sumar,3000,4,5)