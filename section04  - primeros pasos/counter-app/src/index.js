// react nos permite hacer uso de la síntaxis JSX
import React from "react";
// react-dom nos entrega las utilidades para tratar con el DOM del navegador
import ReactDom from "react-dom";

const saludo = <h1>Hola, Mundo!</h1>;
const divRoot = document.querySelector("#root");

ReactDom.render(saludo, divRoot);
