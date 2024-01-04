const titulo = document.querySelector(".titulo");

//TODO: Agrega una clase a un elemento
// titulo.classList.add("grande");


//TODO: Remuve una clase a un elemento
//titulo.classList.remove("grande")


//TODO: Nos devuelve la clase que se encuentra en el indice especificado
// let value = titulo.classList.item(0);
// document.write(value);


//TODO: Devulve true si la clase especificada se encuentra en las clases de la etiqueta HTML
// let nombreDeClase = "grande"
// let value = titulo.classList.contains(nombreDeClase);
// if(value){
//     document.write(`La clase "${nombreDeClase}" existe`);
    
// }else{
//     document.write(`La clase "${nombreDeClase}" NO existe`);
// }


// //TODO: Agrega una clase si no existe en el elemento y devuelve TRUE, del caso contrario elimina dicha clase y devuelve FALSE
// titulo.classList.toggle("grande");
// //TODO: Si le pasamos como segundo argumento TRUE, siempre lo agregara
// titulo.classList.toggle("agua",true);
// //TODO: Si le pasamos como segundo argumento FALSE, siempre lo removera
// titulo.classList.toggle("grande",false);



//TODO: Reemplaza una clase por otra clase
titulo.classList.replace("grande","chico");