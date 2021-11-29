// Funciones en Js

function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Mr Kong"));

// Protegiendo la referencia a una función
const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
};

console.log(saludar2("Ms Bonny"));

// Funciones Flecha
const saludar3 = (nombre) => `Hola ${nombre}`;
console.log(saludar3("Mr Didi"));

// Devolver un objeto por medio de una función flecha
const getUser = () => ({
  uid: "ABC12344",
  username: "pepito paga doble",
});
const user = getUser();
console.log(user);

// Desarrollo de la tarea:
// 1. Transforme a una función flecha
// 2. Devuelva un objeto implícito
// 3. Pruebas
const getUserActivo = (nombre) => ({
  uid: "LASD999213",
  username: nombre,
});
const userActivo = getUserActivo("Ms Dolly");
console.log(userActivo);
