function validarContrasena(contrasena) {
  // Verificar que la contraseña tenga al menos 8 caracteres
  if (contrasena.length < 8) {
      return false;
  }

  // Verificar que la contraseña contenga al menos una letra mayúscula
  const tieneMayuscula = /[A-Z]/.test(contrasena);

  // Verificar que la contraseña contenga al menos un número
  const tieneNumero = /[0-9]/.test(contrasena);

  // Retornar true solo si cumple todas las condiciones
  return tieneMayuscula && tieneNumero;
}

// Ejemplo de uso:
console.log(validarContrasena("Password1")); // true
console.log(validarContrasena("password"));  // false (no tiene mayúscula ni número)
console.log(validarContrasena("PASSWORD"));  // false (no tiene número)
console.log(validarContrasena("pass1"));     // false (menos de 8 caracteres)