//Permiten manejar operaciones asincrona de manera mas limpia

function obtenerDatos(){
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos recibidos"), 1000)
  })
}

obtenerDatos().then((datos) => console.log(datos))

// Sintaxis moderna par trabajar con promesas

async function main() {
  const datos = await obtenerDatos();
  console.log(datos);
}

main();