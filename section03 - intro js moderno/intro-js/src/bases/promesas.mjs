// Promesas

import heroes from "./data/heroes.js";

const getHeroeById = (id) => heroes.find((h) => h.id === id);

// Las promesas son por naturaleza asíncronas.
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    resolve(heroe);
  }, 2000);
});

promesa.then((heroe) => {
  console.log(heroe);
});

// Devolviendo una promesa como resultado de una función
const getHeroesById2 = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (!heroe)
        return reject(`Error, no se encontro ningún héroe con id ${id}`);
      resolve(heroe);
    }, 2000);
  });
};

getHeroesById2(4)
  .then((heroe) => console.log(heroe))
  .catch((error) => console.error(error));

getHeroesById2(10)
  .then((heroe) => console.log(heroe))
  .catch((error) => console.warn(error));
