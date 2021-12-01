// Fetch API
// Fetch es una funcionalidad que se encuentra disponible en los motores de javascript
// de los navegadores, y nos permite llevar a cabo peticiones a end points en internet.

const apiKey = "uAk5ilLSextoqxAn8NNuLCWeETbMdYCJ";
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    // Creamos una etiqueta img para insertar el gif obtenido en la petición
    const img = document.createElement("img");
    img.src = url;

    // Insertamos nuestra etiqueta dentro de la página
    document.body.append(img);
  })
  .catch(console.warn);
