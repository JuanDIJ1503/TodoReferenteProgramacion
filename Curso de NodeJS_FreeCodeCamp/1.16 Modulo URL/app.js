const miURL = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");

/*Extrae el nombre del host*/
console.log(miURL.hostname)

/*Extrae la ruta o el camino de nuestra URL*/
console.log(miURL.pathname)

/*Accede a los parametros query de nuestra URL*/
console.log(miURL.searchParams);
/*Obtiene el valor de la clave que le pasemos a get*/
console.log(miURL.searchParams.get('ordenar'));
console.log(miURL.searchParams.get('nivel'));