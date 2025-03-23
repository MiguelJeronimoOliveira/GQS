function mediaArray(arr) {
    const soma = arr.reduce((total, num) => total + num, 0);

    const media = soma / arr.length;
    
    return media;
}

console.log(mediaArray([1, 2, 3, 4, 5]));  