function mostraNombre({nombre, apellido}){
  return `${nombre} y ${apellido}`
}

const usuario ={
    nombre: "Ana",
    apellido: "Perez"
  }

console.log(mostraNombre(usuario))