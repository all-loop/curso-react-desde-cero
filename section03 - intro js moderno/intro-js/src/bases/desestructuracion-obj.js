// Desestructuración o Asignación Desestructurante

const Persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// Forma tediosa de extraer propiedades de un objeto
console.log(Persona.nombre);
console.log(Persona.edad);
console.log(Persona.clave);

// Forma de desestructurar un objeto
const { nombre, edad, clave } = Persona;
console.log(nombre, edad, clave);

// Desestructuración por argumento
const retornaPersona = ({ nombre, edad }) => {
  console.log("Función: ", nombre, edad);
};
retornaPersona(Persona);

// Argumentos con valor por defecto en la desestructuración
const retornaPersona2 = ({ nombre, rango = "Capitán" }) => {
  console.log(rango, nombre);
};
retornaPersona2(Persona);

// Desestructurando el objeto devuelto por una función
const retornaPersona3 = ({ nombre, edad }) => ({
  nombreClave: nombre,
  anios: edad,
  latlng: {
    lat: 1213123,
    lng: 4893191,
  },
});
const { nombreClave, anios } = retornaPersona3(Persona);
console.log(nombreClave, anios);

// Desestructurando un objeto anidado
const {
  latlng: { lat, lng },
} = retornaPersona3(Persona);
console.log(lat, lng);
