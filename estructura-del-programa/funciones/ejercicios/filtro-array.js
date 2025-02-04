const usuarios = [
  { nombre: "Ana", edad: 25, activo: true },
  { nombre: "Carlos", edad: 30, activo: false },
  { nombre: "María", edad: 20, activo: true },
];

function filter(array, criterio){
  return array.filter(criterio)
}

const mayores25 = filter(usuarios, (usuario) => usuario.edad > 25)
const activoYedadMenor = filter(usuarios, (usuario) => usuario.activo === true  && usuario.edad <= 19)

console.log(mayores25) // Carlos
console.log(activoYedadMenor) // []