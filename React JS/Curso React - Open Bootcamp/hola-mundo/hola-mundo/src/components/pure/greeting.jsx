import React, { Component } from "react";
import PropTypes from "prop-types";

//Componente de tipo clase
class Greeting extends Component {
  constructor(props) {
    super(props); //TODO: Obtiene las propiedades del componenten Greeting
    this.state = {
      //TODO: Define el estado inicial del componente
      age: 29,
    };
  }
  
  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <h2>Tu edad es de: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  //Creamos metodo birthday
  birthday = () =>{
    this.setState((prevState) => (
      {age: prevState.age + 1}
    ))
  }
  
}

Greeting.propTypes = {
  //TODO: Define el tipo de datos esperado para cada props
  name: PropTypes.string,
};

export default Greeting;
