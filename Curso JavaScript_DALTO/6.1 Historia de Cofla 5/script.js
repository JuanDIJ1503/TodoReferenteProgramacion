let materias = {
  fisica: [91, 9, 2, "fisica"],
  matematica: [98, 7, 2, "matematica"],
  logica: [93, 9, 3, "logica"],
  quimica: [72, 8, 4, "quimica"],
  calculo: [100, 3, 4, "calculo"],
  programacion: [10, 4, 4, "programacion"],
  biologia: [50, 5, 1, "biologia"],
  bbdd: [77, 6, 2, "bbdd"],
  algebra: [89, 7, 3, "algebra"],
};

const asistencias = () => {
  for (let materia in materias) {
    console.groupCollapsed(materia);
    let asistencias = materias[materia][0];
    let promedios = materias[materia][1];
    let trabajos = materias[materia][2];
    if (asistencias >= 90) {
      console.log(
        `%cAsistencias en orden en: ${materia}`,
        "color: green; background:white;padding:10px;border-radius:10px"
      );
    } else {
      console.log(
        `%cFalta de Asistencias en: ${materia}`,
        "color: red; background:white;padding:10px;border-radius:10px"
      );
    }
    if (promedios >= 7) {
      console.log(
        `%cPromedio en orden en: ${materia}`,
        "color: green; background:white;padding:10px;border-radius:10px"
      );
    } else {
      console.log(
        `%cPromedio desaprobado: ${materia}`,
        "color: red; background:white;padding:10px;border-radius:10px"
      );
    }
    if (trabajos >= 3) {
      console.log(
        `%cTrabajos practicos en orden: ${materia}`,
        "color: green; background:white;padding:10px;border-radius:10px"
      );
    } else {
      console.log(
        `%cFalta de trabajos practicos en: ${materia}`,
        "color: red; background:white;padding:10px;border-radius:10px"
      );
    }
    console.groupEnd();
  }
};
asistencias();
