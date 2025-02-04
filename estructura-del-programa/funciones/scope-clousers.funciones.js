//Ejemplo de scope

function ejemploScope() {
  if (true) {
    const x = 10;
    let y = 20;
    var z = 30; // var tiene scope de función
  }
  console.log(z); // 30 (var es accesible)
  console.log(x); // Error: x no está definido
}

//Ejemplo de closures
//Una función que "recuerda" el ámbito en el que fue creada, incluso si se ejecuta fuera de ese ámbito.
function contador(){
  let count = 0;
  return function (){
    count++
    return count
  }
}

const incrementar = contador()
console.log(incrementar())
console.log(incrementar())
