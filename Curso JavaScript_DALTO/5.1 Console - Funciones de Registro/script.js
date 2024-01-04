/*Aparece un mensaje de error en la consola si la afirmación es falsa
Si la afirmación es verdadera, no aparecera nada (NO ESTANDAR)*/
console.assert(5 < 3);

/*Limpia la consola*/
console.clear();

/*Muestra un mensaje de Error en consola*/
console.error("Mensaje de Error")

/*Emite un mensaje informativo en consola*/
console.info("Mensaje Informativo")

/*Muestra un mensaje en la consola web*/
console.log("Mensaje de Depuración")

/*Esta función toma como argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional:
columns y nos muestra una tabla en consola*/
let Objmaterias = {   
    fisica:["Perez","Juan","Maria","Cofla","Manuel"],
    programacion: ["Dalto","Juan","Pedro","Maria","Manuel"],
    logica: ["Hernandez","Pedro","Maria","Cofla","Manuel"],
    quimica: ["Rodriguez","Juan","Pedro","Cofla","Manuel"]
}
console.table(Objmaterias);

/*Imprime un mensaje de Advertencia en la consola*/
console.warn("Mensaje de Alerta o Advertencia");

/*.dir() -> Despliega una lista interactiva de las propiedades del objeto JavaScript especificado*/
let Objmaterias2 = {   
    fisica:["Perez","Juan","Maria","Cofla","Manuel"],
    programacion: ["Dalto","Juan","Pedro","Maria","Manuel"],
    logica: ["Hernandez","Pedro","Maria","Cofla","Manuel"],
    quimica: ["Rodriguez","Juan","Pedro","Cofla","Manuel"]
}
console.log(Objmaterias2);
console.dir(Objmaterias2);


/*Con %c podemos modificar el estilo del mensaje en consola*/
console.log("%cEste es un mensaje con estilos","color:red;background:white; padding: 10px; border-radius:10px")