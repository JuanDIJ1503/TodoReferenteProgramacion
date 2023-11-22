/*Funciones Flecha:
    -Se omite la palabra function
    -Si hay un solo parametro y una sola linea de codigo se puede colocar todo en una sola linea
    */

const saludo = function(nombre){
    document.write(`¡Hola ${nombre}! como estas?<br>`);
}
saludo("Juan");

const saludo2 = nombre => document.write(`¡Hola ${nombre}! como estas?<br>`);
saludo2("Juan");

const saludo3 = () =>{
    document.write(`¡Hola! como estas?`);
}
saludo3();



// function saludar(nombre){
//     document.write(`¡Hola ${nombre}! como estas?`);
// }
// saludar("Juan")





// function suma(num1,num2){
//     let result = num1 + num2;
//     document.write(result+"<br>")
// }
// suma(12,12);
// suma(12,32);







// function saludar(){
//     return "La función funciona correctamente"
//     alert("Hola")
// }
// let saludo = saludar();
// document.write(saludo)