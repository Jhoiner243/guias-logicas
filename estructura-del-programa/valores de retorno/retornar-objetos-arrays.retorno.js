// Retornar objetos y arrays

function crearUsuario(nombre, email){
  return {
    nombre: nombre.trim(),
    email: email.toLowerCase(),
  }
}

const usuario = crearUsuario("Ana", "Ana@gmail.COM");
console.log(usuario)