// Arreglos en Js

// Creación de un arreglo de la forma no convencional
const arreglo = new Array(100);
arreglo.push(1);
console.log(arreglo);

// Creación de un arreglo e la manera convencional
const arreglo2 = [1, 2, 3, 4];
console.log(arreglo2);

// Usamos el operador spread para incluir los elementos de un arreglo dentro de otro
let arreglo3 = [...arreglo2, 5];
console.log(arreglo3);

// Usando map
arreglo3 = arreglo3.map((n) => n * 2);
console.log(arreglo3);
