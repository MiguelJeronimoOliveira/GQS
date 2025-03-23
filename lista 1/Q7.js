function palindromo(str){

    let stringMinuscula = str.toLowerCase();
    let strInvertida = stringMinuscula.split('').reverse().join('');

    return stringMinuscula === strInvertida;
}

console.log(palindromo("ovo")); 