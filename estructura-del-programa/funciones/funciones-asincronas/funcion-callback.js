// La funcion se ejecuta despues de que otra operacion haya terminado
function obtenerDatos(callback){
  setTimeout(() => {
    callback("Datos recibidos")
  }, 1000)

}

obtenerDatos((datos) => console.log(datos))