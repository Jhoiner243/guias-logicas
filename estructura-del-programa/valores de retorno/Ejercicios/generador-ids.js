function generarIDSeguro(longitud = 5) {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  let id = "";

  // Asegurar al menos una letra y un número
  id += letras[Math.floor(Math.random() * letras.length)];
  id += numeros[Math.floor(Math.random() * numeros.length)];

  // Completar el resto del ID
  const caracteres = letras + numeros;
  for (let i = 2; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    id += caracteres[indiceAleatorio];
  }

  // Mezclar el ID para que no siempre empiece con letra y número
  return id
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

console.log(generarIDSeguro()); // Ejemplo: "3aB7f"

const usuarios = []

function newUsuarios (nombre, apellido) {
  const id = generarIDSeguro(8)
  const usuario = {id, nombre, apellido}
  usuarios.push(usuario)
  return usuario
}

console.log(newUsuarios("Jhoiner", "Martinez"))