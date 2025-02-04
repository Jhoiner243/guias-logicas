// El parametros rest se utiliza para capturar multiples propiedades de un array

function sumar(...numeros){
  return numeros.reduce((acc, num) => acc + num, 0)
}

const numeros = [1, 2, 3, 4, 5, 50, 32]

console.log(sumar(...numeros)) // Hay que poner en la llamada de la funcion el parametro rest