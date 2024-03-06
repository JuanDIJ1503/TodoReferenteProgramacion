/*Pasamos de un archivo JavaScript a JSON*/
let infoCurso = {
    "titulo":"Aprendiendo Node.js",
    "numVistas":45642,
    "numLikes":21123,
    "temas":[
        "JavaScript",
        "Node.js"
    ],
    "esPublico":true
};

//Objeto -> Cadena de caracteres
//Convertimos el objeto JS a una cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof(infoCursoJSON));

//Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof(infoCursoObjeto));
//Al pasarlo a un objeto podemos usar las propiedades de un objeto
console.log(infoCursoObjeto.titulo);
