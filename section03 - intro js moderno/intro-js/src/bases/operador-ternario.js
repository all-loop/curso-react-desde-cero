// Operador Condicional Ternario

const activo = true;
let mensaje = "";

// Una de las maneras de condicionar la asignación de una variable.
if (activo) {
  mensaje = "Activo";
} else {
  mensaje = "Desactivado";
}
console.log(mensaje);

// Asignando el valor de una variable a través de un operador ternario.
mensaje = !activo ? "Activo" : "Desactivado";
console.log(mensaje);

// Asignando un valor prefijado siempre que se cumpla una condición previa
mensaje = activo && "Valor configurado";
console.log(mensaje);
