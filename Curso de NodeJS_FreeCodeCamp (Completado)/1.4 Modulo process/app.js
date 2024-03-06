//console.log(process)

/*Describe el ambiente de ejecucion del programa*/
//console.log(process.env)

/*process.argv nos devuelve un arreglo de lo que escribamso en consola, 
y los indices se rigen con el espacio*/
// console.log(process.argv)

/*Con este for mostramos todos los argumentos que puedan ingresar el usuario*/
// for(let i=2;i<process.argv.length;i++){
//     console.log(process.argv[i]);
// }

console.log(process.memoryUsage())