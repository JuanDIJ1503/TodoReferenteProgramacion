let cantAlum = prompt("Ingrese la cantidad alumnos")
let alum = [];
for(let i=0;i<cantAlum;i++){
    alum[i] =  [prompt("Ingrese el nombre del "+(i+1)+" alumno"),0];
}

const asistencias = (nombre,p) =>{
    let presencia = prompt(nombre);
    if(presencia == "p"||presencia=="P"){
        alum[p][1]++;
    }
}

for(let i=0;i<19;i++){
    for(alumnos in alum){
        asistencias(alum[alumnos][0],alumnos);
    }
}

for(alumnos in alum){
    let resultado = `${alum[alumnos][0]}:<br>
    ____Presente: ${alum[alumnos][1]} <br>
    ____Ausente: ${30 - (alum[alumnos][1])}<br>   
    `;
    if(30 - alum[alumnos][1] > 18){
        resultado += "<b style='color:red;'>DESAPROBADO POR INASISTENCIAS</b><br>";
    }else{
        resultado += "";
    }
    document.write(resultado)
}

