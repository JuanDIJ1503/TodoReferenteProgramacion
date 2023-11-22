
//Sin corchetes se comporta como un return
const suma = (num1,num2) => parseInt(num1) + parseInt(num2);

const resta = (num1,num2)=> parseInt(num1) - parseInt(num2);

const multi = (num1,num2)=> parseInt(num1) * parseInt(num2);

const divi = (num1,num2) => parseInt(num1) / parseInt(num2);

alert("Escoja la operación a realizar");
operacion = parseInt(prompt("1: Suma | 2: Resta | 3: Multiplicación | 4: División"));

switch (operacion) {
    case 1:
        let num1 = prompt("Ingrese 1er número")
        let num2 = prompt("Ingrese 2do número")
        let resultado = suma(num1,num2);
        alert(`Tu resultado es: ${resultado}`);
        break;
    case 2:
        let num1r = prompt("Ingrese 1er número")
        let num2r = prompt("Ingrese 2do número")
        let resultador = resta(num1r,num2r);
        alert(`Tu resultado es: ${resultador}`);
        break;
    case 3:
        let num1m = prompt("Ingrese 1er número")
        let num2m = prompt("Ingrese 2do número")
        let resultadom = multi(num1m,num2m);
        alert(`Tu resultado es: ${resultadom}`);
        break;
    case 4:
        let num1d = prompt("Ingrese 1er número")
        let num2d = prompt("Ingrese 2do número")
        let resultadod = divi(num1d,num2d);
        alert(`Tu resultado es: ${resultadod}`);
    default:
        alert("ERROR -> Ingrese una operación valida")
        break;
}