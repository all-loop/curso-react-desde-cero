// Objetos Literales

const persona = {
  nombre: "Mr Kong",
  apellido: "Nintendo Country",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zipCode: 1289412,
    lat: 14.212,
    lng: 488.21,
  },
};

console.log(persona);
// console.table(persona);
console.log({ persona });

// La siguiente instrucción solo copia la referencia del objeto, no crea una copia
const persona2 = persona;
persona2.nombre = "Mr Didi";

console.log(persona);
console.log(persona2);

// Para generar una copia del objeto usamos el operador spread incluido en ecmascript 6
const persona3 = { ...persona };
persona3.nombre = "Ms conejita";
console.log(persona);
console.log(persona3);
