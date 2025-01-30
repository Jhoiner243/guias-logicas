// Ejemplo práctico de conversión de tipo automática, en formulario

function calcularTotal() {
  const precioInput = document.getElementById("precio").value; // Ej: "100"
  const cantidadInput = document.getElementById("cantidad").value; // Ej: "2"

  // Coerción implícita peligrosa:
  const totalInseguro = precioInput * cantidadInput; // "100" * "2" = 200 (funciona, pero es riesgoso)

  // Mejor práctica: Conversión explícita
  const precio = Number(precioInput);
  const cantidad = parseInt(cantidadInput, 10);

  if (Number.isNaN(precio) || Number.isNaN(cantidad)) {
    alert("Valores inválidos");
    return;
  }

  console.log(`Total seguro: ${precio * cantidad}`);
}