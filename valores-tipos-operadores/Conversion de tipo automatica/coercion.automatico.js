// Las coerciones son conversiones de valores de un tipo a otro. En JavaScript, las coerciones ocurren automáticamente cuando se intenta operar valores de tipos diferentes.

console.log(5 == "5"); // true (string "5" → número 5)
console.log(0 == false); // true (false → 0)
console.log("" == false); // true (ambos son falsy)
console.log(null == undefined); // true (caso especial)


// Sin coercion de tipos

console.log(5 === "5"); // false (número vs string)
console.log(0 === false); // false (número vs boolean)

//Verificar tipos manualmente
function sumar(a, b){
  if(typeof a !== "number" || typeof b !== "number"){
    throw new Error("Tipos inválidos");
  }
  return a + b
}
console.log(sumar(2, 3)); // 5
console.log(sumar(2, false)); // Error: Tipos inválidos
