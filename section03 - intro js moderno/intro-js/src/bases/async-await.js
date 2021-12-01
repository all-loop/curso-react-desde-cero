// Asyn - Await
// Las palabras reservadas async y await siempre van juntas.

const getImagen = async () => {
  // La estructura try-catch se utiliza para tratar cualquier error que suceda en la espera
  // de una cláusula await
  try {
    const apiKey = "uAk5ilLSextoqxAn8NNuLCWeETbMdYCJ";
    // await indica que se debe esperar por la respuesta asíncrona antes de continuar
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
