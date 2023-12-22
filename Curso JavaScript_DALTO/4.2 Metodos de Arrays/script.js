/*.pop()*/
// let nombres = ["pedro","maria","jorge"];

// document.write(nombres+"<br>")
// /*Elimina el ultimo elemento de un array y nos lo devuelve*/
// let respuesta = nombres.pop();

// document.write(respuesta+"<br>");
// document.write(nombres);


/*.shift()*/
// let nombres = ["pedro","maria","jorge"];

// document.write("<b>Array Original: </b>"+nombres+"<br>")
// /*Elimina el primer elemento de un array y nos devuelve dicho elemento*/
// let respuesta = nombres.shift();

// document.write("<b>Elemento removido: </b><span style='color:red'>"+respuesta+"</span><br>");
// document.write("<b>Array final: </b>"+nombres);



/*.push()*/
// let nombres = ["pedro","maria","jorge"];

// document.write("<b>Array Original: </b>"+nombres+"<br>")
// /*Agrega un elemento al final de array y nos devuelve la cantidad de elmentos que ahora contiene el mismo Array*/
// let respuesta = nombres.push("juan","robert");

// document.write("<b>Cant. de Elementos en el Array: </b>"+respuesta+"<br>");
// document.write("<b>Array final: </b>"+nombres);



/*.reverse()*/
// let numeros = [1,2,3,4,5,6,7,8,9];

// document.write("<b>Array Original: </b>"+numeros+"<br>")
// /*Invierte el orden de los elementos de un Array*/
// numeros.reverse();

// document.write("<b>Array final: </b>"+numeros);



/*.unshift()*/
// let numeros = [4,5,6,7,8,9];

// document.write("<b>Array Original: </b>"+numeros+"<br>")
// /*Agrega elementos al incio de un Array*/
// numeros.unshift(0,1,2,3);

// document.write("<b>Array final: </b>"+numeros);


/*.sort()*/
// let numeros = [4,7,2,4,9,6,2,0,3,4,1];

// document.write("<b>Array Original: </b>"+numeros+"<br>")
// /*Ordena los elementos de un Array de forma Ascendente*/
// numeros.sort();

// document.write("<b>Array final: </b>"+numeros);



/*.splice()*/
// let numeros = ["abecedario","manzana","pedro","dedo","bobo"];

// document.write("<b>Array Original: </b>"+numeros+"<br>");
// /*Elimina elementos especificando un indice y la cantidad de elementos a eliminar.
//     Luego opcionalmente se pueden agregar elementos*/
// numeros.splice(-1,0,"roberto","gustavo","maximo");

// document.write("<b>Array final: </b>"+numeros);



/*.join()*/
// let numeros = [1,2,3,4,5,6];

// document.write("<b>Array Original: </b>"+numeros+"<br>");
// /*Convierte un Array en un String y une los elementos con el caracter que el especifiquemos*/
// let resultado = numeros.join("_______");
// document.write("<b>Array final: </b>"+resultado);



/*.slice()*/
// let numeros = [1,2,3,4,5,6];

// document.write("<b>Array Original: </b>"+numeros+"<br>");
// /*Crea una nueva cadena a base de los indices que le pasemos. El elemento del indice de cierre no se incluye*/
// let resultado = numeros.slice(0,numeros.length);
// document.write("<b>Array final: </b>"+resultado);



/*.includes()*/
// let numeros = [1,2,3,4,5,6];

// document.write("<b>Array Original: </b>"+numeros+"<br>");
// /*Devuelve true si encuentra el elemento que le pasemos. Del caso contrario false*/
// let resultado = numeros.includes(3);
// document.write(resultado);



/*.indexOf()*/
// let numeros = [1,2,3,4,5,6];

// document.write("<b>Array Original: </b>"+numeros+"<br>");
// /*Nos devuelve el indice del priemr elemento que encuentra a base del argumento que le pasemos*/
// let resultado = numeros.indexOf(2);
// document.write(resultado);



/*.lastIndexOf()*/
// let numeros = [1,2,3,4,5,6,2];

// document.write("<b>Array Original: </b>"+numeros+"<br>");
// /*Devuelve el indice del ultimo elemento encontrado a base del argumento pasado*/
// let resultado = numeros.lastIndexOf(2);
// document.write(resultado);