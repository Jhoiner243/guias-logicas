//Valor vacio undefined, variable declarada pero no inicializada

let nombre;
console.log(nombre); // undefined

function suma(a, b) {
  console.log(b); // undefined si no se pasa el segundo argumento
}
suma(2);

//VERIFICACIONES 

if (variable === undefined) { /* ... */ }
// o
if (typeof variable === "undefined") { /* ... */ }