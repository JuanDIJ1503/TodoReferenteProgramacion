/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //Vamos a hacer dos contadores dinstintos, cada uno con un estado diferente

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM (vista HTML)
  const miRef = useRef();

  const incrementar1 = () => {
    setContador1(contador1 + 1);
  };
  const incrementar2 = () => {
    setContador2(contador2 + 1);
  };

  /**
   * Trabajando con useEffect
   */

  /**
   * ?Caso 1: Ejecutar siempre un snippet de código
   * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
   */

  // useEffect(()=>{
  //   console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
  //   console.log('Mostrado Referencia a Elemento del DOM:')
  //   console.log(miRef)
  // })

  /**
   * ?Caso2: Ejecutar solo cuando cambie el contador 1
   * Cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect
   * En caso de que se cambie contador 2, no habra ejecución
   */

  // useEffect(() => {
  //   console.log('Cambio el estado del Contador 1');
  //   console.log('Mostrado Referencia a Elemento del DOM:')
  //   console.log(miRef)
  // }, [contador1])

  /**
   * ?Caso 3: Ejecutar solo cuando cambie contador 1 o contador 2
   * Cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect
   * Cada vez que haya un cambio en el contador2, se ejecuta lo que diga el useEffect
   */

  useEffect(() => {
    console.log("Cambio el estado del Contador 1 / Contador 2");
    console.log("Mostrado Referencia a Elemento del DOM:");
    console.log(miRef);
  }, [contador1,contador2]);

  return (
    <div>
      <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      {/*Elemento Referenciado*/}
      <h4 ref={miRef}>Ejemplo de Elemento Referenciado</h4>
      {/*Botones para cambiar los contadores*/}
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
