// En React a partir de su versión 16.8 tenemos los llamados "hooks",
// los cuales son una nueva característica para manejar algun estado
// o alguna otra cosa de un componente sin necesidad de escribir una clase.
// ...
// useState es un hook utilizado para manejar el estado de un componente
import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  // Hacemos uso del hook "useState"
  const [counter, setCounter] = useState(value);

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  // handleSubstract
  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  // handleReset
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      {/**
       * React nos permite añadir eventos a nuestros elementos (etiquetas). Estos eventos
       * son llamados "eventos sintéticos" porqué son una emulación de los eventos nativos
       * del navegador.
       *
       * Cada evento debe recibir una función que se ejecutará cada vez un evento se dispare.
       */}
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;
