//Funciones como argumentos
function operar(a, b, operacion) {
  return operacion(a, b);
}

const suma = (x, y) => x + y;
console.log(operar(2, 3, suma)); // 5