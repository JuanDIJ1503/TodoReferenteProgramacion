const infoMaterias = (materia)=>{
    Objmaterias = {   
        fisica:["Perez","Juan","Maria","Cofla","Manuel"],
        programacion: ["Dalto","Juan","Pedro","Maria","Manuel"],
        logica: ["Hernandez","Pedro","Maria","Cofla","Manuel"],
        quimica: ["Rodriguez","Juan","Pedro","Cofla","Manuel"]
    }
    if(Objmaterias[materia]!== undefined){
        return [Objmaterias[materia],materia,Objmaterias];
    }else{
        return Objmaterias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = infoMaterias(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor <b style="color:blue">${profesor}</b> lleva la materia de <b style="color:green">${informacion[1]}</b> y sus alummnos son:<br>
                        <b style="color:red">${alumnos}</b><br><br>
        `);
    }
};

const cantAlumnoClases = (alumno)=>{
    let listaMaterias = infoMaterias();
    let clasesPresentes = []
    let cantVeces = 0;
    for(info in listaMaterias){
        if(listaMaterias[info].includes(alumno)){
            clasesPresentes.push(info)
            cantVeces++;
        }
    }
    return `El alumno <b style="color:red">${alumno}</b> esta en <b style="color:blue">${cantVeces}</b> materias<br>
            <b>Esta cursando las Materias:</b> ${clasesPresentes}<br><br>
    `;
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");

document.write(cantAlumnoClases("Cofla"));
document.write(cantAlumnoClases("Manuel"));