
var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");
var nota4 = document.getElementById("nota4");
var btnCalcular = document.getElementById("calcular");



btnCalcular.addEventListener('click',()=>{
    let primeraU = nota1.value * 0.15;
    let segundaU = nota2.value * 0.20;
    let terceraU = nota3.value * 0.30;

    let suma3 = primeraU + segundaU + terceraU;
    let falta = 20 - parseFloat(suma3.toFixed(1));
    let notaF4 = falta / 0.35;
    nota4.value = notaF4;
    console.log(suma3);
    console.log(falta);
})