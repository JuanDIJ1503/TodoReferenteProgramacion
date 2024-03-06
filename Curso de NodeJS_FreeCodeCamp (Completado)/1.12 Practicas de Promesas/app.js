const promesaCumplida = true;

/*Creamos una promesa*/
const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa cumplida');//Resolve para valores si la promesa a sido exitosa
        }else{
            reject('Promesa rechazada');//Reject devuelve un error si la promesa a sido rechazada
        }
    },3000);
});

/*.then() se ejecuta si la promesa se cumple. En este caso para exito no para rechazo*/
// miPromesa.then((valor)=>{
//     console.log(valor);
// });

// /*Este es para exito y rechazo. En este caso obtiene el valor Promesa cumplida y lo imprime*/
// miPromesa.then(
//     valorAprobado => console.log(valorAprobado),
//     valorRechazado => console.log(valorRechazado)
// );


const promesaAprobada = (valor)=>{
    console.log(valor);
}

const promesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo);
}
//then, recibe dos funciones como argumentos la primera para saber que ahcer si se cumple la promesa
//Y el 2do argumento la función que ese ejecutara cuando la promesa no se cumpla
miPromesa.then(promesaAprobada,promesaRechazada);