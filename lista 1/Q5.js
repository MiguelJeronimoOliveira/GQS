function fatorial(num) {
    if (num < 0) return "O número deve ser positivo"; 
    let resultado = 1;
    
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(5)); 