//Retornar funciones (Closures)

function contador() {
  let count = 0;
  return () => count++
}

const incrementar = contador()


for(let i = 0; i <= 20; i++){
console.log(incrementar()) 
}


