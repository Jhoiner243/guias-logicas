//Se usan para crear objetos con new.

function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;//Se usan para crear objetos con new.

  function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  
  const ana = new Persona("Ana", 19)
  console.log(ana)
}

const ana = new Persona("Ana", 19)
console.log(ana)