// react nos permite hacer uso de la síntaxis JSX
import React from "react";
// react-dom nos entrega las utilidades para tratar con el DOM del navegador
import ReactDom from "react-dom";

import PrimeraApp from "./PrimeraApp";
import "./index.css";

const divRoot = document.querySelector("#root");

ReactDom.render(<PrimeraApp saludo="Hola Mundo" />, divRoot);
