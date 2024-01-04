const contenedor = document.querySelector(".contenedor");

//TODO: Almacena nodos 
const fragmento = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    //TODO: Crea un nuevo elemento HTML
    const item = document.createElement("LI");
    item.innerHTML = "Este es un texto";
    fragmento.appendChild(item);
};
console.log(fragmento);
contenedor.appendChild(fragmento);
