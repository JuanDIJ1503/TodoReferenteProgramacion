//Para desestructurar utilizamos {}
//Esto crea una variable que contiene el elemento del modulo y que podemos utilizar como variable
const {saludarHolaMundo,saludar} = require("./saludos.js");

console.log(saludarHolaMundo());
console.log(saludar('freeCodeCamp'));