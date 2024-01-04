/*Crea un nuevo grupo en línea en el registro de la consola Web*/
console.group("Nuevo Grupo")
console.log("Item 1")//Este pertenece a "Nuevo Grupo"
console.log("Item 2")//Este pertenece a "Nuevo Grupo"
console.log("Item 3")//Este pertenece a "Nuevo Grupo"

/*Remueve un grupo en línea en el registro de la consola Web*/
console.groupEnd()
console.log("Item 4")//Este ya no pertenece a "Nuevo Grupo1"


/*Crea un grupo en línea pero contraido el usuario debe expandirlo para verlo*/
console.groupCollapsed("Nuevo Grupo Collapse");
console.log("Item 1")//Este pertenece a "Nuevo Grupo Collapse"
console.log("Item 2")//Este pertenece a "Nuevo Grupo Collapse"
console.log("Item 3")//Este pertenece a "Nuevo Grupo Collapse"
