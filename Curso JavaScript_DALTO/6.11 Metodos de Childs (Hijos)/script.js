const contenedor = document.querySelector(".contenedor");

const paragraphNew = document.createElement("P");
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo h2 Nuevo";
const h2_antiguo = document.querySelector(".h2");

//TODO: Reemplaza un elemento hijo antiguo con un nuevo elemento HTML que le especifiquemos
// contenedor.replaceChild(h2_nuevo,h2_antiguo);

//TODO: Elimina un elemento hijo de un elemento padre
// contenedor.removeChild(h2_antiguo);

//TODO: Verifica si un elemento padre contiene elementos hijos
let respuesta = contenedor.hasChildNodes();
console.log(respuesta);
