class Calculadora{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    Suma(){
        return parseInt(this.num1) + parseInt(this.num2)
    }
    Resta(){
        return parseInt(this.num1) - parseInt(this.num2);
    }
    Multiplicacion(){
        return parseInt(this.num1) * parseInt(this.num2);
    }
    División(){
        return parseInt(this.num1) / parseInt(this.num2);
    }
    Potencia(){
        return parseInt(this.num1) ** parseInt(this.num2);
    }
    RaizCuadrada(){
        return Math.sqrt(parseInt(this.num1));
    }
    RaizCubica(){
        return Math.cbrt(parseInt(this.num1));
    }
}



alert("Escoja la operación a realizar");
operacion = parseInt(prompt("1: Suma | 2: Resta | 3: Multiplicación | 4: División | 5: Potencia | 6: Raiz Cuadrada | 7: Raiz Cubica"));

switch (operacion) {
    case 1:
        let num1 = prompt("Ingrese 1er número")
        let num2 = prompt("Ingrese 2do número")
        let resultado = new Calculadora(num1,num2);
        alert(`Tu resultado es: ${resultado.Suma()}`);
        break;
    case 2:
        let num1r = prompt("Ingrese 1er número")
        let num2r = prompt("Ingrese 2do número")
        let resultador = new Calculadora(num1r,num2r);
        alert(`Tu resultado es: ${resultador.Resta()}`);
        break;
    case 3:
        let num1m = prompt("Ingrese 1er número")
        let num2m = prompt("Ingrese 2do número")
        let resultadom = new Calculadora(num1m,num2m);
        alert(`Tu resultado es: ${resultadom.Multiplicacion()}`);
        break;
    case 4:
        let num1d = prompt("Ingrese 1er número")
        let num2d = prompt("Ingrese 2do número")
        let resultadod = new Calculadora(num1d,num2d);
        alert(`Tu resultado es: ${resultadod.División()}`);
        break;
    case 5:
        let num1p = prompt("Ingrese 1er número")
        let num2p = prompt("Ingrese 2do número")
        let resultadop = new Calculadora(num1p,num2p);
        alert(`Tu resultado es: ${resultadop.Potencia()}`);
        break;
    case 6:
        let num1ra = prompt("Ingrese el número");
        alert(`Tu resultado es: ${new Calculadora(num1ra).RaizCuadrada()}`);
        break;
    case 7:
        let num1cu = prompt("Ingrese el número");
        alert(`Tu resultado es: ${new Calculadora(num1cu).RaizCubica()}`);
        break;
    default:
        alert("ERROR -> Ingrese una operación valida")
        break;
}