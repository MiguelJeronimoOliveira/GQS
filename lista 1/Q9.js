function contarOcorrencias(str, char) {
    let contador = 0;
    let palavraMinuscula = str.toLowerCase();  
    let charMinusculo = char.toLowerCase(); 
    
    for (let i = 0; i < palavraMinuscula.length; i++) {
        if (palavraMinuscula[i] === charMinusculo) {
            contador++;
        }
    }
    
    return contador;
}

console.log(contarOcorrencias("TADS JAVASCRIPT", 'a'));  