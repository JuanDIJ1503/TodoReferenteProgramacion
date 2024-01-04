/*Selecciona un objeto del documento con el id parrafo*/
// let parrafo = document.getElementById("parrafo");
// document.write(parrafo);



/*Permite seleccionar todos los elementos que tengan la etiqueta especificada.
    Este nos devuelve un lista de elementos. Podemos acceder con [].
*/
// let parrafo = document.getElementsByTagName("p");
// document.write(parrafo[2]);



/*Nos permite seleccionar el primer elemento que coincida con el selector CSS especificado*/
// let parrafo = document.querySelector(".parrafo");
// let parrafo2 = document.querySelector("#parrafo2");//Para seleccionar id es recomendable usar getElementById()
// document.write(parrafo)
// document.write(parrafo2)



/*Nos devuelve todos los elementos que coincidan con el selector CSS especificado.
    Nos devuelve un nodeList que no es un Array
*/
let parrafo = document.querySelectorAll(".parrafo2");
document.write(parrafo);
console.log(parrafo);
