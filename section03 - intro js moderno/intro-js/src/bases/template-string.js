// Template String
const nombre = "Mr Kong";
const apellido = "Nintendo country";

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

nombreCompleto = `Hola, Mundo`;
console.log(nombreCompleto);

nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

nombreCompleto = `
  ${nombre}
  ${apellido}
  ${1 + 1}
`;
console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
