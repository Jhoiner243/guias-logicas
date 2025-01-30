//El operador delete ejemplos:

//Limpiar propiedades de un objeto de configuración

const config = {apiKey: "123ABC", debugMode: true}

delete config.debugMode

console.log(config)

//Eliminar un número de un array con delete deja un hueco

const numeros = [1, 2, 3, 4, 5, 6]

delete numeros[2] // numeros ahora es [1, 2, <1 empty item>, 4, 5, 6]

console.log(numeros)