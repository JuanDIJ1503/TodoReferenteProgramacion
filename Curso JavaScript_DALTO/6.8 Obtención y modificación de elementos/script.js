const titulo = document.querySelector(".titulo");

//TODO: Nos devuelve el contenido de una etiqueta; no devuelve el HTML
let resultado = titulo.textContent;
console.log(resultado)


//TODO: Nos devuelve todo lo que este dentro de una etiqueta incluido el HTML
let resultado2 = titulo.innerHTML;
console.log(resultado2);


//TODO: Nos devuelve el elemento HTML completo con sus etiquetas y contenidos
let resultado3 = titulo.outerHTML;
console.log(resultado3);