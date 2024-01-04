const contenedor = document.querySelector(".contenedor");

//TODO: Crea un nuevo elemento HTML
const item = document.createElement("LI");
console.log(item)

//TODO: Crea un nuevo nodo de texto
const textDelItem = document.createTextNode("Este es un texto del item");
console.log(textDelItem);

//TODO: Agrega un nodo al final y dentro de un elemento padre que este utilizando el método
item.appendChild(textDelItem);
contenedor.appendChild(item)
console.log(item);