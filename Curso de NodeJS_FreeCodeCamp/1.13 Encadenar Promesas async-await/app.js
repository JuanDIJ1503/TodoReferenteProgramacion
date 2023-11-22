function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando ${producto} de freeCodeCamp`);
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve('Ordenando la taza');
            }else{
                reject('El producto no está diponible en este momento');
            }
        },2000)
    });
};

function procesarPedido(respuesta){
    //Si no utilizamos resolve o reject podemos eliminar el que no utilizamos
    return new Promise(resolve =>{
        console.log("Procesando pedido")
        console.log(`La respuesta es: "${respuesta}"`);
        setTimeout(()=>{
            resolve('Gracias por tu compra. Atte: freeCodeCamp')
        },4000)
    })
}

// /*Encadenamos promesas*/
// ordenarProducto('taza')
//     //Cuando pondemos return y la otra función todo esto se convierte en una promesa  
//     .then((respuestaOrdenar)=>{
//         console.log("Repuesta recibida")
//         console.log(respuestaOrdenar);
//         return procesarPedido(respuestaOrdenar);
//     })
//     .then(respuestaCompletada =>{
//         console.log(respuestaCompletada)
//     })
//     .catch(error =>{
//         console.log(error)
//     });


/*Ahora el código anterior simplificado*/
async function realizarPedido(producto){
    try {
        const respuestaOrdPro = await ordenarProducto(producto);
        console.log("R: "+respuestaOrdPro);
        const respuestaProPedido = await procesarPedido(respuestaOrdPro);
        console.log("R: "+respuestaProPedido);
    } catch (error) {
        console.log(error);//Si una de las promesas devuvel reject se muestra ese error
    }
    
};

realizarPedido("taza");