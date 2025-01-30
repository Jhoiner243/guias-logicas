//Valor vacio NaN. Es el resultado de operaciones matematicas inválidas.

const resultado = 100 / "hola" // NaN
console.log(resultado)

//VERIFICIONES

if(Number.isNaN(valor)) {
    console.log("Es NaN")
}

// Ejemplo en un caso real:

function validarFormulario (){
  const nombre = document.getElementById("nombre").value
  const edad = parseInt(document.getElementById("edad").value);

  if(!nombre){
    alert("Nombre es requerido");
    return false
  }

  if(Number.isNaN(edad)){
    alert("Edad inválida")
    return false;
  }

  return console.log("Enviando datos")
}