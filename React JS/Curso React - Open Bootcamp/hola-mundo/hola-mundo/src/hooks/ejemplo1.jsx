/*
 * Ejemplo de uso del Hooks useState()
 *
 * Crear un componente de tipo función y acceder a su estado privado a través de un hook
 * y, ademas, poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  //Valor inicial para un contador
  const valorInicial = 0;

  //Valor inicial para una persona
  const personaInicial = {
    nombre: "Martin",
    email: "martin@gmail.com",
  };

  /**
   * Queremos que el valor inicial y personaInicial sean parte del estado del componente para asi
   * poder gestionar su cambio y este se vea reflejado en la vista del componente
   *
   * const [nombreVariable,funcionParaCambiar] = useState(valorinicial)
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Función para Actualizar el estado privado que contiene el contador
   */
  const incrementarContador = () => {
    //TODO: funcionParaCambiar(nuevovalor)
    setContador(contador + 1);
  };

  /**
   * Función para Actualizar el estado de persona en el componenente
   */
  const actualizarPersonas = () => {
    setPersona({
      nombre: "Juan",
      email: "juan@gmail.com",
    });
  };

  return (
    <div>
      <h1>Ejemplo de useState</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      {/*Bloque de botones para actualizar el estado del componente*/}
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <br />
      <button onClick={actualizarPersonas}>Actualizar Persona</button>
    </div>
  );
};

export default Ejemplo1;
