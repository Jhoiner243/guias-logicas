let clcikCount = 0

//Pre-incremento

function handleClick() {
  console.log(`Clic número: ${++ClickCount}`)
}

//Post-incremento en un blucle
for (let i = 0; i < 5; i++){
  console.log(i)// 0, 1, 2, 3, 4, 5 (Incrementa después de la evaluación)
}