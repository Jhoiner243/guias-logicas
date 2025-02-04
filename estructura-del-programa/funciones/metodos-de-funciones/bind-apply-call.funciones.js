const persona = {nombre: "Ana", apellido: "Martinez"};

function saludar(){
  return `Hola ${this.nombre} ${this.apellido}`;
}

console.log(saludar.call(persona)); // Hola Ana Martinez
console.log(saludar.apply(persona, [])); // Hola Ana Martinez

const newFuncion = saludar.bind(persona);
console.log(newFuncion()); // Hola Ana Martinez
