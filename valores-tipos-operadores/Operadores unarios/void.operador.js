//El operador void evalúa una expresión y devuelve undefined. Util para evitar retornos no deseados.

//Ejemplos de void:

//En un enlace para evitar la navegacion 

<a href="javascript:void(0)" onClick="handeClick()"> click </a>

//En modulos para evitar leaks 

void function IIE(){
  console.log("funcion auto invocada")
}