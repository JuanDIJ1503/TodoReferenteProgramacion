/*starsWith()*/
// let cadena = "cadena de prueba";//Esto es igual a: new String("cadena de prueba")
// let cadena2 = "c"

// let resultado = cadena.startsWith(cadena2);

// document.write(resultado);


/*.endsWith()*/
// let cadena = "cadena de prueba";//Esto es igual a: new String("cadena de prueba")
// let cadena2 = "prueba"

// let resultado = cadena.endsWith(cadena2);

// document.write(resultado);


/*.includes()*/
// let cadena = "Pedro es inmaduro";
// let cadena2 = "inmaduro"

// let resultado = cadena.includes(cadena2);

// document.write(resultado);

// /*.indexOf()*/
// let cadena = "Pedro es inmaduro";
// let cadena2 = "inmaduro";

// let resultado = cadena.indexOf(cadena2);//Nos indica el indice de la cadena que le pasemos

// document.write(resultado);


/*.lastIndexOf()*/
// let cadena = "Pedro es inmaduro inmaduro inmaduro";
// let cadena2 = "inmaduro";

// let resultado = cadena.lastIndexOf("inmaduro");  

// document.write(resultado);


// let cadena = "abc";

// /*
//     1arg: La cantidad de caracteres que se desea en la cadena
//     2arg: La cadena que se utilizara para rellenar lo que falta de caracteres al principio
//  */
// let resultado = cadena.padStart(10,"1234");

// document.write(resultado);


// /*padEnd()*/
// let cadena = "abc";

// /*
//     1arg: La cantidad de caracteres que se desea en la cadena
//     2arg: La cadena que se utilizara para rellenar lo que falta de caracteres al final
//  */
// let resultado = cadena.padEnd(10,"1234");

// document.write(resultado);


/*.repeat()*/
let cadena = "123 ";

/*
    Repite una cadena una cantidad especifica de veces
 */
let resultado = cadena.repeat(4);

document.write(resultado);