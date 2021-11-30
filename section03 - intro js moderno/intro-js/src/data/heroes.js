const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

// Exportando las funciones y propiedades de nuestro módulo
// con una de las formas disponibles
// export const owners = ["DC", "MARVEL"];
// export default heroes;

const owners = ["DC", "MARVEL"];

export { heroes as default, owners };
