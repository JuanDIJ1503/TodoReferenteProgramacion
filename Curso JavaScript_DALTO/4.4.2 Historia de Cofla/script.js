let Objmaterias = {   
    fisica:["Perez","Juan","Maria","Cofla","Manuel"],
    programacion: ["Dalto","Juan","Pedro","Maria","Manuel"],
    logica: ["Hernandez","Pedro","Maria","Cofla","Manuel"],
    quimica: ["Rodriguez","Juan","Pedro","Cofla","Manuel"]
}
console.table(Objmaterias)
const inscritos = (alumno,materia) =>{
    personas = Objmaterias[materia];
    if(personas.length >= 21){
        document.write(`Lo siento <b>${alumno}</b>, la materia <b>${materia}</b> ya tiene 20 alumnos<br>`)
    }else{
        personas.push(alumno);
        if(materia == "fisica"){
            Objmaterias = {   
                fisica: personas,
                programacion: Objmaterias['programacion'],
                logica: Objmaterias['logica'],
                quimica: Objmaterias['quimica'],
            }
        }else if(materia == "programacion"){
            Objmaterias = {   
                fisica: Objmaterias['fisica'],
                programacion: personas,
                logica: Objmaterias['logica'],
                quimica: Objmaterias['quimica'],
            }
        }else if(materia == "logica"){
            Objmaterias = {   
                fisica: Objmaterias['fisica'],
                programacion: Objmaterias['programacion'],
                logica: personas,
                quimica: Objmaterias['quimica'],
            }
        }else if(materia == "quimica"){
            Objmaterias = {   
                fisica: Objmaterias['fisica'],
                programacion: Objmaterias['programacion'],
                logica: Objmaterias['logica'],
                quimica: personas,
            }
        }
        document.write(`Felicidades <b>${alumno}</b> te has incrito correctamente en <b>${materia}</b>:<br>
                        Lista actual de alumnos inscritos en <b>${materia}</b>:<br>${personas}<br><hr>`)
    }
    
}

inscritos("Briss","fisica");
inscritos("Mateo","fisica");
inscritos("Pedrito","fisica");
inscritos("Briss","fisica");
inscritos("Mateo","fisica");
inscritos("Pedrito","fisica");
inscritos("Briss","fisica");
inscritos("Mateo","fisica");
inscritos("Pedrito","fisica");
inscritos("Briss","fisica");
inscritos("Mateo","fisica");
inscritos("Pedrito","fisica");
inscritos("Briss","fisica");
inscritos("Mateo","fisica");