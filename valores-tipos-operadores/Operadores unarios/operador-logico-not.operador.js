//Toggle de estado en una UI
let isMenuOpen = false 

function toggleMenu() {
  isMenuOpen = !isMenuOpen; //Aleterna entre true o false
}

//Verifica si un valor es falsy
const userInput = "Andres";
if(!userInput) {
  console.log("Campo vacío") // Se ejecuta si userInput es falsy
}else{
  console.log(userInput)
}

const newUser = userInput