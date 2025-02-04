function multiplicarPor(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const duplicar = multiplicarPor(2);
console.log(duplicar(5)); // 10