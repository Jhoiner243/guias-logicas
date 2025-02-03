// Propósito: Calcular estadísticas de un arreglo de números.

function calcularEstadisticas(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return null; // Retorno temprano si el input es inválido
  }

  const suma = numeros.reduce((acc, num) => acc + num, 0);
  const promedio = suma / numeros.length;
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);

  return { suma, promedio, maximo, minimo };
}

// Uso:
const datos = [10, 20, 30, 40, 50];
const stats = calcularEstadisticas(datos);
console.log(stats);
// { suma: 150, promedio: 30, maximo: 50, minimo: 10 }