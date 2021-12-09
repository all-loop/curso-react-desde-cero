// react nos permite hacer uso de la síntaxis JSX
import React from "react";
// react-dom nos entrega las utilidades para tratar con el DOM del navegador
import ReactDom from "react-dom";
import CounterApp from "./CounterApp";

import "./index.css";

const divRoot = document.querySelector("#root");

ReactDom.render(<CounterApp value={0} />, divRoot);
