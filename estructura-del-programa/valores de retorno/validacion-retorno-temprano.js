

function esMayorDeEdad(edad){
  if(typeof edad !== "number") return false //Retorno temprano
  return edad >= 18
}

console.log(esMayorDeEdad("20")) // False
console.log(esMayorDeEdad(30)) // True
