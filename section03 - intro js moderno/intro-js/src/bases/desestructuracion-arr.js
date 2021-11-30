// Desestructuración de Arreglos

const personajes = ["Gokú", "Vegeta", "Trunks"];
// Forma tediosa de imprimir cada elemento de un arreglo
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Forma con desestructuración
const [newPersonaje] = personajes;
console.log(newPersonaje);

// Ignoramos el primer elemento
const [, reySayayin] = personajes;
console.log(reySayayin);

// con las comas dentro de un arreglo definimos cual elemento seleccionar o no
const [, , viajeroFuturo] = personajes;
console.log(viajeroFuturo);

// Desestructurando un arreglo devuelto por una función
const retornaArreglo = () => ["ABC", 123];
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Ejercicio solicitado
const stateUse = (valor) => [valor, () => console.log("Hola, Mundo")];
const [nombre, setState] = stateUse("Mr Kong");
console.log(nombre);
setState();
