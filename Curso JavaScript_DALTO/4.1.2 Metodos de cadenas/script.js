/*.split()*/
// let cadena = "Hola como estas";

// /*
//     Convierte la cadena en un array, y los elementos se ordenan con respecto a lo que
//     pasamos a .split()
//  */
// let resultado = cadena.split(" ");

// document.write(resultado);


// /*.subString()*/
// let cadena = "ABCDFG";

// /*Crea una nueva cadena basandode en el indice de cada caracter del String*/
// let resultado = cadena.substring(2,5);

// document.write(resultado);


/*.toLowerCase()*/
// let cadena = "ABCDFG";

// /*Convierte la cadena en minuscula*/
// let resultado = cadena.toLowerCase();

// document.write(resultado);


// /*.toUpperCase()*/
// let cadena = "abcdfg";

// /*Convierte la cadena en mayuscula*/
// let resultado = cadena.toUpperCase();

// document.write(resultado);


/*.toString()*/
// let cadena = ["Pedro","Mathias"];

// /*Convierte lo que le pasemos a String*/
// let resultado = cadena.toString();

// document.write(resultado+"<br>");
// document.write(resultado[0]);



/*.trim()*/
// let cadena = "   Pedro hola   ";

// let resultado = cadena.length;
// document.write(resultado+"<br>");

// /*Elimina los espacios en blanco al incio y al final de un String*/
// let resultado2 = cadena.trim();
// document.write(resultado2.length);



/*.trimEnd()*/
// let cadena = "   Pedro hola   ";

// let resultado = cadena.length;
// document.write(resultado+"<br>");

// /*Elimina los espacios en blanco al final de un String*/
// let resultado2 = cadena.trimEnd();
// document.write(resultado2.length);



/*.trimStart()*/
let cadena = "   Pedro hola   ";

let resultado = cadena.length;
document.write(resultado+"<br>");

/*Elimina los espacios en blanco al inicio de un String*/
let resultado2 = cadena.trimStart();
document.write(resultado2.length);