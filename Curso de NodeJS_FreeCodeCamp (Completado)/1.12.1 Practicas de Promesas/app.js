const estadoPedido = () =>{
    return Math.random() < 0.8;//Hay un 80% de que devuelva true; y 20% false
}; 

const promesaPedido = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(estadoPedido()){
            resolve('Su pedido fue completado con éxito')
        }else{
            reject('Su pedido tuvo un problema, vuelva a intentarlo')
        }
    },3000);
});

/*Estas funciones se utilizan cuando el procedicimiento al exito o al rechazo es algo extenso*/
// const promesaCumplida = (valor) =>{
//     console.log(valor)
// }
// const promesaRechaza = (valorRechazo) =>{
//     console.log(valorRechazo)
// }

// promesaPedido.then(promesaCumplida,promesaRechaza);


// /*Ahora una forma más simplificada*/
// promesaPedido
//     //Maneja el éxito
//     .then((pedidoExitoso)=>{
//         console.log(pedidoExitoso);
//     })
//     //Maneja el error o fracaso, por eso se coloca null en primer argumento
//     .then(null,(pedidoFail)=>{
//         console.log(pedidoFail)
//     });


/*Ahora con .catch*/
promesaPedido
    .then((pedidoExitoso)=>{
        console.log(pedidoExitoso);
    })
    //.catch se ejecutara solo si la promesa es rechazada
    .catch((pedidoFail)=>{
        console.log(pedidoFail);
    });