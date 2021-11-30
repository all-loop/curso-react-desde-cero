// import, export y funciones comunes de arreglos

// importando un módulo con la nueva síntaxis de ecmascript 6
import heroes, { owners } from "../data/heroes.js";

// Mostrando el contenido de la importación
console.log(heroes);
console.log(owners);

// Función común de un arreglo
const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
console.log(getHeroeById(2));
console.log(getHeroeById(1));
console.log(getHeroeById(10));

// Tarea pedida
const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};
console.log(getHeroesByOwner("DC"));
