import { useState } from "react";
import PropTypes from "prop-types";

//Componente de tipo función
const GreetingF = (props) => {
  //TODO: [variable,metodoParaActualizarlo] = useState(ValorInicial)
  const [age, setAge] = useState(29); //TODO: useState: es una función que nos permitira crear estados

  const birthday = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h1>
        Hola {props.name} desde <br />
        componente Funcional
      </h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
