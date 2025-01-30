// Valor vacio string. Texto sin contenido

//Validar un campo de formulario
const inputNombre = document.getElementById("nombre").value // Verifica si el campo del elemento en la vista con ID nombre está vacío
if(inputNombre === "") {
  alert("El nombre es obligatorio")
}

//VERIFICACIONES

if (texto === "") { /* ... */ } // Verifica si la variable texto está vacía

if (!texto.trim()) { // Si el texto solo contiene espacios
  console.log("Texto vacío o con espacios");
}