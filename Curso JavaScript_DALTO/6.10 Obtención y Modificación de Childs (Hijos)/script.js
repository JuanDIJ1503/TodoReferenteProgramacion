const contenedor = document.querySelector(".contenedor");

//TODO: Nos devuelve el primer nodo hijo del elemento padre seleccionado
const firstChild = contenedor.firstChild;
//console.log(firstChild);

//TODO: Nos devuelve el ultimo nodo hijo del elemento padre seleccionado
const lastChild = contenedor.lastChild;
//console.log(lastChild);

//TODO: Nos devuelve el primer elemento hijo del elemento padre seleccionado
const firstElementChild = contenedor.firstElementChild;
//console.log(firstElementChild);

//TODO: Nos devuelve el ultimo elemento hijo del elemento padre seleccionado
const lastElementChild = contenedor.lastElementChild;
//console.log(lastElementChild);

//TODO: Nos devuelve todos los nodos del elemento padre seleccionado
const nodesChild = contenedor.childNodes;
// console.log(nodesChild);
// console.log(nodesChild[0]);


//TODO: Nos devuelve los elementos HTML del elemento padre seleccionado
const children = contenedor.children;
console.log(children);
for (let child of children) {
    console.log(child)
}