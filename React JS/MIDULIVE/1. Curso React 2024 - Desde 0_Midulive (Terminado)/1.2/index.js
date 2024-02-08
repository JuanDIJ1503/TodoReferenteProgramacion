import React  from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDOMElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDOMElement)


const button = React.createElement('button',{"data-id":123},'Boton 1');
const button2 = React.createElement('button',{"data-id":123},'Boton 2');
const button3 = React.createElement('button',{"data-id":123},'Boton 3');

//React.Fragment: Une elementos de tal manera que no se crea un div o un elemento que los una. De esta manera se puede renderizar varios elementos.
const div = React.createElement(React.Fragment,null,[button,button2,button3]);
root.render(div);

/*
<React.Fragment>
  <button data-id="123">Boton 1</button>
  <button data-id="456">Boton 2</button>
  <button data-id="354">Boton 3</button>
</React.Fragment>
*/