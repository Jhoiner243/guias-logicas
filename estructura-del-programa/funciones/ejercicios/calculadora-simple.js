function operaciones(a, b){  
    const suma = a + b;
    const multi = a * b
    const divi = a / b
    const res = a - b

    return {suma, multi, divi, res}
}
console.log(operaciones(4, 5))