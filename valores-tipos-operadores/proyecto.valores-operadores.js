const form = document.getElementById('registrationForm');
const error = document.getElementById('errorMessages');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  error.innerHTML = "";

  // Obtener los valores de los campos utilizando operadores unarios y sanetizacion
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  //Cambiamos la edad a numero con el operador unario positivo +
  const ageNumber = +age

  //Utilizamos un objeto para almacenar errores (usando delete cuando hay valores validos)
  const errors = {}

  //Validamos el nombre (string vacio y utilizando el operador unario !)
  if(!name){
    error.name = "El nombre es obligatorio"
  }

  //Validamos que la edad sea un numero válido utilizando isNaN()
  if(Number.isNaN(age) <= 0){
    error.age = "La edad no es válida"
  }

  //Validamos que email tenga un formato correcto y que no sea string vacio
  if(!email){
    error.email = "Email es obligatorio";
  }else if(!email.include("@")){
    error.email = "Formato de correo inválido"
  }

  //Validamos que haya una contraseña y tenga mas de 8 caracteres con numeros y letras
  if(!password){
    error.password = "La contraseña es obligatoria"
    console.log("Error de contraseña")
  }else if(password.length < 8){
    error.name =  "La contraseña tiene menos de 8 caracteres"
  }

  //Mostrar errores o enviar formularios
  if(Object.keys(errors).length > 0){
    showErrors(errors)
  }else{
    // Simulamos el envio exitoso usando void para evitar un valor de retorno
    void alert("Registro exitoso")
    form.reset()
  }
})

  //Funcion para mostrar errores (manejo del DOM)
function showErrors(errors){
  for (const [field, message] of Object.entries(errors)){
    error.innerHTML += `<p class="error">${alert(message)}</p>`
  }
}