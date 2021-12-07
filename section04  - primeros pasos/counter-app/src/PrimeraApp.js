// Entre los desarrolladores que usan REACT existe la convención de que todo
// archivo que describe un componente use la síntaxis Upper-Case en su nombre.
// ---------------------------------------------------------------------------
//
/**
 * Nuestro Primer Componente
 * ..........................
 *
 * En REACT hay dos maneras de crear un componente:
 *  1. Las basadas en clases
 *  2. Las basadas en funciones
 */
// import React, { Fragment } from "react";
import React from "react";

// Functional components
const PrimeraApp = () => {
  /**
   * Devolver más de una etiqueta
   * ............................
   *
   * Un componente solo puede devolver una etiqueta, la cuál puede o no anidar más
   * etiquetas dentro de ella.
   *
   * Para anidar etiquetas podriamos:
   * 1. Crear una etiqueta General, por ejemplo <div>contenido</div>. Esta forma crea una
   *  etiqueta div dentro del dom.
   * 2. Usando el Componente Fragment ofrecido por React, <Fragment>contenido</Fragment>. Esta forma
   *  sólo incluye su contenido en el dom.
   * 3. Usando la síntaxis <>conenido</>. Al igual que fragment, sólo incluye su contenido en el dom.
   */
  return (
    <>
      <h1>Hola, Mundo!</h1>
      <p>Mi primera aplicación</p>
    </>
  );
};

export default PrimeraApp;
