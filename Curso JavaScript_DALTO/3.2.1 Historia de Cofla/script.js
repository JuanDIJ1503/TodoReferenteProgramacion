class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.inciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App Instalada")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App Desintalada")
        }
    }
    abrir(){
        if(this.inciada == false && this.instalada == true){
            this.inciada = true;
            alert("App Encendida");
        }
    }
    cerrar(){
        if(this.inciada == true){
            this.inciada = false;
            alert("App Cerrada")
        }
    }
    appInfo(){
        document.write(`
            Descargas: <b>${this.descargas}</b><br>
            Puntuacion: <b>${this.puntuacion}</b><br>
            Peso: <b>${this.peso}</b><br><br>
        `);
    }
}

let app = new App("16.000","5 starts","900mb");
let app2 = new App("12.000","4 starts","400mb");
let app3 = new App("15.000","3 starts","100mb");
let app4 = new App("19.000","1 starts","1gb");
let app5 = new App("13.000","3 starts","300mb");
let app6 = new App("15.000","2 starts","250mb");
let app7 = new App("10.000","4 starts","400mb");

app.appInfo();
app2.appInfo();
app3.appInfo();
app4.appInfo();
app5.appInfo();
app6.appInfo();
app7.appInfo();