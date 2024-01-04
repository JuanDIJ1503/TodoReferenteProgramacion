let tp = "100 minutos hacer trabajos practicos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de hacer cosas en la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for (let i = 1; i <= 14; i++) {
  if (i == 1) {
    console.group("Semana 1");
  }
  console.groupCollapsed(`Day ${i}`);
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(tp);
  console.log(homework);
  console.groupEnd();
  if (i == 7) {
    console.groupEnd();
    console.group("Semana 2");
  }
}
