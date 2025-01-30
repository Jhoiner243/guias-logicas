// conversion a string

//Ocurre cuando se usa + con un string y otro tipo

console.log(5 + " manzanas"); // "5 manzanas" (número → string)
console.log(true + " es true"); // "true es true" (boolean → string)

// conversion a número

//Ocurre con operadores matematicos (-, *, /), o comparaciones (>, <=)

console.log("10" - 5)
console.log("10" * "2")
console.log(true + false)
console.log(null + 5)
console.log(undefined + 5)

// conversion a boolean

if ("Hola") { // string no vacío → true
  console.log("Se ejecuta");
}

console.log(0 || "valor por defecto"); // "valor por defecto" (0 es falsy)


//Casos comunes

// Si hay un string, convierte todo a string:
console.log(2 + 3 + "5"); // "55" (2+3=5, luego 5 + "5" = "55")
console.log("5" + 2 + 3); // "523"

// Sin strings, convierte a número:
console.log(+"123"); // 123 (operador unario +)
console.log(+"abc"); // NaN