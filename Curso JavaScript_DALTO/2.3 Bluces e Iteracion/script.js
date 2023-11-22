
let array2 = ["maria","josefa","roberta"];
let array1 = ["pedro","marcelo",array2,"julia"];

Terminarfor:
for(let array in array1){
    if(array == 2){
        for(let array of array2){
            document.write(array+"<br>");
            break Terminarfor;
        }
    }else{
        document.write(array1[array]+"<br>")
    }
}



// let animales = ["gato","perro","tiranosaurio"]

// //Devuelve el indice
// for(let IndAnim in animales){
//     document.write(animales[IndAnim]+"<br>")
// }

// //Devuelve el valor
// for(let ValAnim of animales){
//     document.write(ValAnim+"<br>")
// }


// let persona = {
//     nombre:"Juan",
//     edad:"17",
//     colegio:"Certus"
// }

// for(let Indice in persona){
//     document.write(persona[Indice]+"<br>")
// }





// for(let i = 1;i <= 5;i++){
//     if(i==3){
//         continue;
//     }
//     document.write(i+"<br>");
// }


// while(numero < 1000){
//     numero++;
//     document.write(numero+"<br>");
//     if(numero == 10){
//         break;
//     }
// }
// document.write("FIN")


// do {
//     numero++;
//     document.write(numero+"<br>")
// } while (numero < 5);

// if(numero < 10){
//     numero++;
//     console.log(numero)
// }


// while(numero <= 10){
//     numero++;
//     document.write("Hola "+numero+"<br>")
// }