console.log("Hola Mundo");
//warn sirve para mostrar una advertencia
console.warn("Ocurrio un error...");
console.error("¡Ocurrior un error grave!");
//Se pueden crear errores
console.error(new Error("Se creo un error"))
//Si el booleano en el primer argumento es false imprime lo que esta escrito en el 2do argumento
console.assert(2<0,"2 no es mayor que 0");
//A base de una data podemos ver con console.table como se estructura estos datos
const data = [{
    juan:"Juan",
    edad:15,
    residencia:"Piura"
}];
console.table(data)