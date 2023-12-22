/*.filter()*/
// let numeros = ["abecedario","manzana","pedro","dedo","bobo","pedro"];

// /*Nos devuelve en Array con los elementos que complan con una condición dada*/
// let resultado = numeros.filter(numero => numero.length > 5);

// document.write("<b>Array devuelto: </b>"+resultado);


/*forEach()*/
let numeros = [1,2,3,4,5,6,7,8,9,10];

let suma = 0;
/*Ejecuta una función para cada elemento del Array*/
let resultado = numeros.forEach((num)=>{
    suma += num;
});
document.write("Suma total del Array: "+suma)
