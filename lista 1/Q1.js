// Somar Elementos de um Array
function somarArray(numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

numeros = [1, 2, 3, 4, 5];

console.log(somarArray(numeros));
