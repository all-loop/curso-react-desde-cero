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
import PropTypes from "prop-types";

// Functional components

/**
 * Props
 * ......
 *
 * Todo componente tiene la capacidad de recibir propiedades o argumentos a través
 * de un objeto llamado props. Es a través de este objeto que podemos comunicar un
 * componente con otro.
 */
const PrimeraApp = ({ saludo, subtitulo }) => {
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
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

// La propiedad propTypes de un componente hace referencia al lugar dónde se
// validan los valores recibidos por un componente. La validación abarca cosas
// como: el tipo de dato, es necesario, entre otras cosas. En caso de no pasar
// alguna validación, React nos señala el problema con un Warning en consola.
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

// La proopiedad defaultProps de un componente nos permite establecer los
// valores por defecto que de cada propiedad recibida por el componente.
PrimeraApp.defaultProps = {
  subtitulo: "Subtítulo por defecto",
};

export default PrimeraApp;
